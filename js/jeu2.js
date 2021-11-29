var center_container = document.getElementById("center");
center_container.parentNode.removeChild(center_container);

var fin = false;

var zoom_level_init = 20;
const max_zoom = 22;

const map_2 = L.map('mapid_2').setView([38.862808, -76.989990], zoom_level_init);

const mainLayer_2 = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoienVtYmFsb3ZlOTc0IiwiYSI6ImNrdzN0N2tpODAwMGMyb252MDNuNjR1YzgifQ.BlHeXVvx1ob4eR8uyZOWOg',
    maxZoom: max_zoom,
    minZoom: 11
});
mainLayer_2.addTo(map_2);
map_2.options.minZoom = 17;

function get_coeff_zoom(map) {
    return max_zoom - map.getZoom() + 1;
}

function get_new_taille(taille_init){
    return taille_init/get_coeff_zoom(map_2);
}

var text = document.getElementById("box_2");
text.innerHTML = "Vous sortez des égouts, votre maison n'est plus très loin.<p></p>Votre voiture rouge est garée devant.";
text.style.backgroundColor = "rgba(138, 44, 226, 0.5)";
setTimeout(function(){text.innerHTML = ""; text.style.backgroundColor = "rgba(138, 44, 226, 0.0)"}, 5000);

function get_index(bdd, nom) {
    var tab;
    for (var i=0; i<bdd.length; i++) {
        tab = bdd[i];
        if (tab["nom"] == nom){
            return i;
        }
    }
}

fetch('../php/index.php', {methode: 'get'})
.then(bdd => bdd.json())
.then(bdd => {

    function create_on_map_objet(nom) {
        var index = get_index(bdd, nom);
        var row = bdd[index];
        var src = row["lien_image"];
        var taille_init = row["taille"];
        var taille = get_new_taille(taille_init);
        var lat = row["latitude"];
        var lng = row["longitude"];

        var icon = L.divIcon({
            html: '<img src='.concat(src, ' class="" alt="egout" width=', taille.toString(), ' height=', taille.toString(), '>'),
            iconSize: [0, 0], // c'est le width et le height de la div qui permet de modifier sa taille
            iconAnchor: [taille/2, taille/2]
        });
        var objet = L.marker([lat, lng], {icon: icon, autoPan:false});
        return [objet, icon];
    }

    var [egout, egout_icon] = create_on_map_objet("plaque_egout");
    egout.addTo(map_2);

    var [car, car_icon] = create_on_map_objet("car");
    car.demarre = false;
    car.addTo(map_2);

    var demarrage = document.createElement("audio");
    demarrage.setAttribute("src", "../son/demarrage.mp3");

    car.on('mouseover', function(e) {
        if (car_key.just_moved) {
            car.demarre = true;
            demarrage.play();
            text.style.zIndex = 1004;
            text.innerHTML = "Un billet d'avion pour Paris CDG se trouve dans la boîte à gant!";
            text.style.backgroundColor = "rgba(138, 44, 226, 0.5)";
            block.appendChild(billet);
            setTimeout(function(){text.innerHTML = "Notre avion se situe à l'aéroport international de Washington-Dulles!<p></p>Il décolle bientôt..."}, 3000);
            setTimeout(function(){text.innerHTML = ""; text.style.backgroundColor = "rgba(138, 44, 226, 0.0)";}, 6000);
            map_2.options.minZoom = 11;
        }
    });

    var [porte, porte_icon] = create_on_map_objet("porte");
    porte.addTo(map_2);

    porte.on('mouseover', function(e) {
        if (key.just_moved) {
            document.getElementById("mapid_2").style.zIndex = 999;
            block.appendChild(leave_button);
        }
    });

    var [avion, avion_icon] = create_on_map_objet("avion");
    avion.addTo(map_2);

    avion.on('click', function(e) {
        var message;
        if (car.demarre) {
            if (sur_moi.includes(flingue)) {
                message = "Vous pensiez vraiment prendre l'avion avec un revolver? Vous êtes en état d'arrestation!";
                window.location.href="http://localhost";
            } else if (sur_moi.includes(cagoule)) {
                message = "La douane vous a trouvé suspect avec votre cagoule... Vous êtes en état d'arrestation!";
                window.location.href="http://localhost";
            } else if (dans_tiroir.includes(pass)) {
                message = "Sans votre passeport, la douane ne vous laisse pas passer... Vous ratez votre vol!";
                window.location.href="http://localhost";
            } else if (dans_tiroir.includes(diamant)) {
                message = "Ouf! Vous avez réussi à prendre l'avion! Mais...où est le diamant?";
                window.location.href="http://localhost";
            } else {
                message = "Vous passez la douane et montez dans l'avion direction Paris!<p></p>À vous la belle vie!";
                fin = true;
            }
            text.innerHTML = message;
            text.style.backgroundColor = "rgba(223, 44, 138, 0.5)";
            setTimeout(function(){
                let mapDiv = document.getElementById("mapid_2");
                mapDiv.parentNode.removeChild(mapDiv);
                let script = document.createElement("script");
                script.src = "../js/fin.js";
                var block = document.getElementById("jeu_2");
                block.appendChild(script);
            }, 4000);
        } 
    });

    function modify_size(taille_init, taille, icon, marker) {
        taille = get_new_taille(taille_init);
        html_list = icon.options.html.split(' ');
        icon.options.html = html_list[0].concat(' ', html_list[1], ' ', html_list[2], ' ', html_list[3], ' width=', taille.toString(), ' height=', taille.toString(), '>')
        icon.options.iconAnchor = [taille/2, taille/2];
        marker.setIcon(icon);
    }

    function charger_carte() {
        map_2.invalidateSize();
        map_2.removeEventListener('mouseover', charger_carte);
    }

    map_2.addEventListener('mouseover', charger_carte);

    map_2.on('zoom', function() {
        var ligne = bdd[get_index(bdd, "plaque_egout")];
        modify_size(ligne["taille"], get_new_taille(ligne["taille"]), egout_icon, egout);
        ligne = bdd[get_index(bdd, "car")];
        modify_size(ligne["taille"], get_new_taille(ligne["taille"]), car_icon, car);
        ligne = bdd[get_index(bdd, "porte")];
        modify_size(ligne["taille"], get_new_taille(ligne["taille"]), porte_icon, porte);
        ligne = bdd[get_index(bdd, "avion")];
        modify_size(ligne["taille"], get_new_taille(ligne["taille"]), avion_icon, avion);
        if (map_2.getZoom() < 17) {
            map_2.invalidateSize();
        }
    });

    var leave_button = document.createElement("input");
        leave_button.type = "Button";
        leave_button.id = "leave";
        leave_button.addEventListener("click", leave);
        leave_button.value = "SORTIR";

    function leave() {
        document.getElementById("mapid_2").style.zIndex = 1004;
        block.removeChild(leave_button);
        block.removeChild(bouton_retour);
    }

    var objets_text = document.createElement("text");
    objets_text.innerHTML = "OBJETS";
    objets_text.id = "objets_text";

    var flingue = document.createElement("img");
    flingue.src = bdd[get_index(bdd, "flingue")]["lien_image"];
    flingue.id = "flingue";

    var cagoule = document.createElement("img");
    cagoule.src = bdd[get_index(bdd, "cagoule")]["lien_image"];
    cagoule.id = "cagoule";

    var diamant = document.createElement("img");
    diamant.src = bdd[get_index(bdd, "diamant")]["lien_image"];
    diamant.id = "diamant";

    var key = document.createElement("img");
    key.src = bdd[get_index(bdd, "key")]["lien_image"];
    key.id = "key";

    var car_key = document.createElement("img");
    car_key.src = bdd[get_index(bdd, "car_key")]["lien_image"];
    car_key.id = "car_key";

    var pass = document.createElement("img");
    pass.src = bdd[get_index(bdd, "passeport")]["lien_image"];
    pass.id = "pass";
    pass.style = "grid-area: 7/3/10/6; width: 100%; height: 100%;";

    var billet = document.createElement("img");
    billet.src = bdd[get_index(bdd, "billet")]["lien_image"];
    billet.id = "billet";

    var img = document.createElement("img");
    img.src = "../img/empty_room_2.png";
    img.id = "chambre";


    var dans_tiroir = [pass, car_key];
    var sur_moi = [cagoule, flingue, diamant, key];
    var sur_map = [avion, car, porte];


    var tiroir = document.createElement("input");
    tiroir.type = "Button";
    tiroir.id = "tiroir";
    tiroir.addEventListener("click", ouvrir_tiroir);

    var tiroir_ouvert = false;

    var bouton_retour = document.createElement("input");
        bouton_retour.type = "Button";
        bouton_retour.id = "retour";
        bouton_retour.addEventListener("click", retour);
        bouton_retour.value = "RETOUR";

    function ouvrir_tiroir() {
        img.src = "../img/tiroir.png";
        tiroir.disabled = true;
        block.appendChild(bouton_retour);
        bouton_retour.style.zIndex = 1002;
        dans_tiroir.forEach(objet => block.appendChild(objet));
        tiroir_ouvert = true;
    }

    function retour() {
        img.src = "../img/empty_room_2.png";
        tiroir.disabled = false;
        bouton_retour.style.zIndex = 1000;
        dans_tiroir.forEach(objet => block.removeChild(objet));
        tiroir_ouvert = false;
    }

    var block = document.getElementById("jeu_2");
    block.appendChild(img);
    block.appendChild(tiroir);
    block.appendChild(objets_text);
    for (let i = 1; i < 10; i++) {
        var cases = document.createElement("div");
        cases.className = "cases";
        cases.style = "grid-row-start:".concat(toString(i), ";");
        block.appendChild(cases);
    }
    sur_moi.forEach(objet => {block.appendChild(objet)});

    var top_bar_height = screen.height - screen.availHeight;

    function supprimer(liste, element) {
        var i = liste.indexOf(element);
        liste.splice(i, 1);
    }

    function drag(objet, area, row_start) {
        objet.onmousedown = function(e) {
            objet.style.position = "absolute";
            objet.style.width = "100px";
            objet.style.height = "100px";
            objet.style.left = e.screenX - objet.width/2 + 'px';
            objet.style.top = e.screenY - objet.height/2 - top_bar_height + 'px';
        
            document.addEventListener('mousemove', onMouseMove);
            
            function onMouseMove(e) {
                objet.style.left = e.screenX - objet.width/2 + 'px';
                objet.style.top = e.screenY - objet.height/2 - top_bar_height + 'px';
            }
            objet.ondragstart = function() {
                return false;
            };
        
            objet.onmouseup = function(e) {
                var bool = dans_tiroir.includes(objet);
                if (tiroir_ouvert && e.screenX < screen.width*9/10) {
                    objet.style = "grid-area: ".concat(area, "; width: 100%; height: 100%;");
                    if (!bool) {
                        dans_tiroir.push(objet);
                        supprimer(sur_moi, objet);
                    } 
                } else if(tiroir_ouvert && e.screenX > screen.width*9/10){
                    objet.style = "grid-column-start: 10; grid-row-start: ".concat(row_start.toString(), "; width: 100%; height: 100%;");
                    if (bool) {
                        sur_moi.push(objet);
                        supprimer(dans_tiroir, objet);
                    }
                } else {
                    objet.style = "grid-column-start: 10; grid-row-start: ".concat(row_start.toString(), "; width: 100%; height: 100%;");
                    objet.just_moved = true;
                    setTimeout(function(){objet.just_moved = false}, 700);
                }
                document.removeEventListener('mousemove', onMouseMove);
                objet.onmouseup = null;
            };
        };
    }

    drag(flingue, "2/3/7/6", 2);
    drag(cagoule, "2/6/8/9", 3);
    drag(diamant, "8/6/10/8", 4);
    drag(key, "9/8/10/9", 5)
    drag(pass,"7/3/10/6", 6);
    drag(car_key, "8/8/9/9", 7);

})
// instructions
document.getElementById("text_map").innerHTML = "Échappez-vous!";
document.getElementById("box").style = "background-color: rgba(164, 196, 255, 0.5);";


const washington = {
    lat: 38.890633, 
    lng: -77.02705
};

const page_height = document.documentElement.scrollHeight;

function get_zoom_level() {
    if (page_height > 650) {
        return 17;
    } else if (page_height > 400) {
        return 16;
    }
    return 15;
}

function get_coeff_animation(zoom_level) {
    return 17 - zoom_level + 1;
}

var zoom_level = get_zoom_level();
document.documentElement.style.setProperty('--coeff', get_coeff_animation(zoom_level));

const map = L.map('mapid').setView([washington.lat, washington.lng], zoom_level);
map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.boxZoom.disable();
map.keyboard.disable(); // quand l'utilisateur va déplacer le personnage avec les flèches directionnelles, la map doit resté fixe
const mainLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: zoom_level,
    minZoom: zoom_level,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoienVtYmFsb3ZlOTc0IiwiYSI6ImNrdzN0N2tpODAwMGMyb252MDNuNjR1YzgifQ.BlHeXVvx1ob4eR8uyZOWOg'
});
mainLayer.addTo(map);


const police_1_init_coords = [38.890465, -77.022958];
var police_1_new_coords = [38.890465, -77.022958];

const police_2_init_coords = [38.889882, -77.028];
var police_2_new_coords = [38.889882, -77.028];

const police_3_init_coords = [38.888754, -77.030012];
var police_3_new_coords = [38.888754, -77.030012];

const police_4_init_coords = [38.889339, -77.022169];
var police_4_new_coords = [38.889339, -77.022169];

var taille_icone = 30/get_coeff_animation(zoom_level);

// afin d'ajouter une image à la carte on utilise l'élément leaflet 'divIcon' qui prend en paramêtre une balise html
var police_icon = L.divIcon({
    html: '<img src="../img/police_icon.png" class="police_1" alt="police" width='.concat(taille_icone.toString(), ' height=', taille_icone.toString(), '>'),
    iconSize: [0, 0], // c'est le width et le height de la div 'img' qui permet de modifier sa taille
    iconAnchor: [15/get_coeff_animation(zoom_level), 15/get_coeff_animation(zoom_level)] // permet de centrer l'icone de police dans son cercle
});
var police_1 = L.marker(police_1_init_coords, {icon: police_icon, autoPan:false}).addTo(map);
var item_1 = document.querySelector('.police_1');
item_1.addEventListener('load', (e) => {
    item_1.addEventListener('animationiteration', reboot_1);
 });
 reboot_1 = (e) => {
    police_1_new_coords = [38.890465, -77.022958];
    iter_1 = 0;    
}

var circle_1 = L.circleMarker([38.890465, -77.022958], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'police_1',
    radius: 30/get_coeff_animation(zoom_level)
}).addTo(map);

// afin d'ajouter une image à la carte on utilise l'élément leaflet 'divIcon' qui prend en paramêtre une balise html
var police_icon = L.divIcon({
    html: '<img src="../img/police_icon.png" class="police_2" alt="police" width='.concat(taille_icone.toString(), ' height=', taille_icone.toString(), '>'),
    iconSize: [0, 0], // c'est le width et le height de la div 'img' qui permet de modifier sa taille
    iconAnchor: [15/get_coeff_animation(zoom_level), 15/get_coeff_animation(zoom_level)] // permet de centrer l'icone de police dans son cercle
});
var police_2 = L.marker([38.889882, -77.028], {icon: police_icon}).addTo(map);
var item_2 = document.querySelector('.police_2');
item_2.addEventListener('load', (e) => {
    item_2.addEventListener('animationiteration', reboot_2);
 });
 reboot_2 = (e) => {
    police_2_new_coords = [38.889882, -77.028];
    iter_2 = 0;    
}

var circle_2 = L.circleMarker([38.889882, -77.028], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'police_2',
    radius: 30/get_coeff_animation(zoom_level)
}).addTo(map);

// afin d'ajouter une image à la carte on utilise l'élément leaflet 'divIcon' qui prend en paramêtre une balise html
var police_icon = L.divIcon({
    html: '<img src="../img/police_icon.png" class="police_3" alt="police" width='.concat(taille_icone.toString(), ' height=', taille_icone.toString(), '>'),
    iconSize: [0, 0], // c'est le width et le height de la div 'img' qui permet de modifier sa taille
    iconAnchor: [15/get_coeff_animation(zoom_level), 15/get_coeff_animation(zoom_level)] // permet de centrer l'icone de police dans son cercle
});
var police_3 = L.marker([38.888754, -77.030012], {icon: police_icon}).addTo(map);
var item_3 = document.querySelector('.police_3');
item_3.addEventListener('load', (e) => {
    item_3.addEventListener('animationiteration', reboot_3);
 });
 reboot_3 = (e) => {
    police_3_new_coords = [38.888754, -77.030012];
    iter_3 = 0;    
}

var circle_3 = L.circleMarker([38.888754, -77.030012], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'police_3',
    radius: 30/get_coeff_animation(zoom_level)
}).addTo(map);

// afin d'ajouter une image à la carte on utilise l'élément leaflet 'divIcon' qui prend en paramêtre une balise html
var police_icon = L.divIcon({
    html: '<img src="../img/police_icon.png" class="police_4" alt="police" width='.concat(taille_icone.toString(), ' height=', taille_icone.toString(), '>'),
    iconSize: [0, 0], // c'est le width et le height de la div 'img' qui permet de modifier sa taille
    iconAnchor: [15/get_coeff_animation(zoom_level), 15/get_coeff_animation(zoom_level)] // permet de centrer l'icone de police dans son cercle
});
var police_4 = L.marker([38.889339, -77.022169], {icon: police_icon}).addTo(map);
var item_4 = document.querySelector('.police_4');
item_4.addEventListener('load', (e) => {
    item_4.addEventListener('animationiteration', reboot_4);
 });
 reboot_4 = (e) => {
    police_4_new_coords = [38.889339, -77.022169];
    iter_4 = 0;    
}

var circle_4 = L.circleMarker([38.889339, -77.022169], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    className: 'police_4',
    radius: 30/get_coeff_animation(zoom_level)
}).addTo(map);

//var test = L.marker(police_4_new_coords).addTo(map);

var taille_icone_voleur = 50/get_coeff_animation(zoom_level);

// afin d'ajouter une image à la carte on utilise l'élément leaflet 'divIcon' qui prend en paramêtre une balise html
var voleur_icon = L.divIcon({
    html: '<img src="../img/cagoule.png" class="voleur" alt="voleur" width='.concat(taille_icone_voleur.toString(), ' height=', taille_icone_voleur.toString(), '>'),
    iconSize: [0, 0], // c'est le width et le height de la div 'img' qui permet de modifier sa taille
    iconAnchor: [25/get_coeff_animation(zoom_level), 25/get_coeff_animation(zoom_level)] // permet de centrer l'icone dans son cercle
});
var voleur = L.marker([38.890398, -77.027475], {icon: voleur_icon}).addTo(map);

function move() {
    // police 3
    if (iter_3 < 5) {
        police_3_new_coords[0] += 0.0002;
    } else if (iter_3 < 6) {
        police_3_new_coords[0] += 0.00006;
        police_3_new_coords[1] -= 0.00027;
    } else if (iter_3 < 11) {
        police_3_new_coords[1] -= 0.00029;
    } else if (iter_3 < 12) {
        police_3_new_coords[0] -= 0.00006;
        police_3_new_coords[1] -= 0.00026;
    } else if (iter_3 < 17) {
        police_3_new_coords[0] -= 0.0002;
    } else if (iter_3 < 24) {
        police_3_new_coords[1] += 0.00029;
    }

    // police 2
    if (iter_2 < 8) {
        police_2_new_coords[1] += 0.000238;
    } else if (iter_2 < 9) {
        police_2_new_coords[0] -= 0.00012;
        police_2_new_coords[1] += 0.00012;
    } else if (iter_2 < 12) {
        police_2_new_coords[0] -= 0.000155;
    } else if (iter_2 < 20) {
        police_2_new_coords[0] -= 0.00001;
        police_2_new_coords[1] -= 0.000238;
    } else if (iter_2 < 21) {
        police_2_new_coords[0] += 0.00012;
        police_2_new_coords[1] -= 0.00012;
    } else if (iter_2 < 24) {
        police_2_new_coords[0] += 0.000155;
    }

    // police 4
    if (iter_4 < 9) {
        police_4_new_coords[0] -= 0.000005;
        police_4_new_coords[1] -= 0.000184;
    } else if (iter_4 < 10) {
        police_4_new_coords[0] += 0.00007;
        police_4_new_coords[1] -= 0.00016;
    } else if (iter_4 < 13) {
        police_4_new_coords[0] += 0.00018;
    } else if (iter_4 < 24) {
        police_4_new_coords[1] -= 0.000182;
    } else if (iter_4 < 26) {
        police_4_new_coords[0] += 0.000182;
    } else if (iter_4 < 27) {
        police_4_new_coords[1] -= 0.0001;
        police_4_new_coords[0] += 0.0001;
    } else if (iter_4 < 37) {
        police_4_new_coords[0] -= 0.000002;
        police_4_new_coords[1] -= 0.00018;
    } else if (iter_4 < 38) {
        police_4_new_coords[0] -= 0.000009;
        police_4_new_coords[1] -= 0.00008;
    } else if (iter_4 < 46) {
        police_4_new_coords[1] -= 0.00001;
        police_4_new_coords[0] -= 0.000178;
    } else if (iter_4 < 47) {
        police_4_new_coords[1] -= 0.00001;
        police_4_new_coords[0] -= 0.00018;
    } else if (iter_4 < 68) {
        police_4_new_coords[1] -= 0.000185;
    } else if (iter_4 < 70) {
        police_4_new_coords[0] += 0.000182;
    } else if (iter_4 < 71) {
        police_4_new_coords[0] += 0.00006;
        police_4_new_coords[1] += 0.00005;
    } else if (iter_4 < 130) {
        police_4_new_coords[0] += 0.000004;
        police_4_new_coords[1] += 0.000177;
    }
    
    // police 1
    if (iter_1 < 47) {
        police_1_new_coords[0] -= 0.0000038;
        police_1_new_coords[1] -= 0.000191;
    } else if (iter_1 < 58) {
        police_1_new_coords[0] -= 0.000146;
    } else if (iter_1 < 79) {
        police_1_new_coords[0] += 0.0000038;
        police_1_new_coords[1] += 0.000185;
    } else if (iter_1 < 82) {
        police_1_new_coords[0] += 0.00014;
    } else if (iter_1 < 113) {
        police_1_new_coords[0] += 0.0000038;
        police_1_new_coords[1] += 0.000191;
    } else if (iter_1 < 117) {
        police_1_new_coords[0] += 0.00014;
    } else if (iter_1 < 121) {
        police_1_new_coords[1] -= 0.00017;
    } else if (iter_1 < 125) {
        police_1_new_coords[0] += 0.00014;
    }

    //var m = L.marker(police_1_new_coords).addTo(map);
    //var m = L.marker(police_2_new_coords).addTo(map);
    //var m = L.marker(police_3_new_coords).addTo(map);
    //var m = L.marker(police_4_new_coords).addTo(map);

    end();
    catched();
    
    iter_1 ++;
    iter_2 ++;
    iter_3 ++;
    iter_4 ++;
}

function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x1-x2),2) + Math.pow((y1-y2),2));
}

function angle(a, b, c) {
    var ab = Math.sqrt(Math.pow(b.lat-a.lat,2) + Math.pow(b.lng-a.lng,2));    
    var bc = Math.sqrt(Math.pow(b.lat-c.lat,2) + Math.pow(b.lng-c.lng,2)); 
    var ac = Math.sqrt(Math.pow(c.lat-a.lat,2) + Math.pow(c.lng-a.lng,2));
    return Math.acos((bc*bc+ab*ab-ac*ac)/(2*bc*ab));
}

function aire(a, b, c) {
    return Math.abs((b.lat-a.lat)*(c.lng-a.lng)-(c.lat-a.lat)*(b.lng-a.lng))/2/distance(a.lat, a.lng, c.lat, c.lng);
}

function cut_polyline(polyline) {
    var seuil = 0.0003;
    var liste = polyline.getLatLngs();
    var segments = [];
    liste.forEach(element => {
        var l = element.length;
        for(var i = 0; i < (l-1); i++) {
            if (Math.abs(element[i].lng - element[i+1].lng) < seuil) {// cas où le segment est vertical
                segments.push([element[i], element[i+1], "v"]);
            } else {// cas où le segment est horizontal
                segments.push([element[i], element[i+1], "h"]);
            }
            
        }
    })
    return segments;
}

function find_points(polyline, point) {
    var seuil = 0.00003;
    var liste = cut_polyline(polyline);
    var liste_index = [];
    var i = 0;
    liste.forEach(element => {
        var a = aire(element[0], point, element[1]);
        if (a < seuil) {
            liste_index.push(i);
        }
        i++;
    })
    return liste_index;
}

var vitesse_voleur = 0.00002;
var vitesse_voleur_2 = vitesse_voleur/80;

function run(evt) {
    var x = voleur.getLatLng().lat;
    var y = voleur.getLatLng().lng;

    var right_point = L.latLng(x+vitesse_voleur_2, y+vitesse_voleur);
    var left_point = L.latLng(x-vitesse_voleur_2, y-vitesse_voleur);
    var up_point = L.latLng(x+vitesse_voleur, y);
    var down_point = L.latLng(x-vitesse_voleur, y);

    var seuil = 0.0008/get_coeff_animation(zoom_level);
    var seuil_2 = 0.0001;

    var index_right = find_points(multiline, right_point);
    var index_left = find_points(multiline, left_point);
    var index_up = find_points(multiline, up_point);
    var index_down = find_points(multiline, down_point);

    var segment = cut_polyline(multiline);

    if (evt.keyCode == 39) {// move right
        index_right.forEach(index => {
            if (segment[index][2] == "h" && Math.max(segment[index][0].lng, segment[index][1].lng)+seuil_2>right_point.lng && right_point.lng>Math.min(segment[index][0].lng, segment[index][1].lng)-seuil_2){
                voleur.setLatLng([x+vitesse_voleur_2, y+vitesse_voleur]);
            }
        }) 
    } else if (evt.keyCode == 37) {// move left
        index_left.forEach(index => {
            if (segment[index][2] == "h" && Math.max(segment[index][0].lng, segment[index][1].lng)+seuil_2>left_point.lng && left_point.lng>Math.min(segment[index][0].lng, segment[index][1].lng)-seuil_2) { 
                voleur.setLatLng([x-vitesse_voleur_2, y-vitesse_voleur]);
            }
        })
    } else if (evt.keyCode == 38) {// move up
        index_up.forEach(index => {
            if (segment[index][2] == "v" && Math.max(segment[index][0].lat, segment[index][1].lat)+seuil_2>up_point.lat && up_point.lat>Math.min(segment[index][0].lat, segment[index][1].lat)-seuil_2) {
                voleur.setLatLng([x+vitesse_voleur, y]);
            }
        })
    } else if (evt.keyCode == 40) {// move down
        index_down.forEach(index => {
            if (segment[index][2] == "v" && Math.max(segment[index][0].lat, segment[index][1].lng)+seuil_2>down_point.lat && down_point.lat>Math.min(segment[index][0].lat, segment[index][1].lat)-seuil_2) {
                voleur.setLatLng([x-vitesse_voleur, y]);
            }
        })
    } else {
        console.log("Vous ne pouvez pas aller par la.");
    }
}

function catched(){
    var distance_catch = 0.000355/get_coeff_animation(zoom_level);
    if (distance(police_1_new_coords[0], police_1_new_coords[1], voleur.getLatLng().lat, voleur.getLatLng().lng) < distance_catch ||
    distance(police_2_new_coords[0], police_2_new_coords[1], voleur.getLatLng().lat, voleur.getLatLng().lng) < distance_catch ||
    distance(police_3_new_coords[0], police_3_new_coords[1], voleur.getLatLng().lat, voleur.getLatLng().lng) < distance_catch ||
    distance(police_4_new_coords[0], police_4_new_coords[1], voleur.getLatLng().lat, voleur.getLatLng().lng) < distance_catch) {
        var items_1 = document.querySelectorAll(".police_1");
        var items_2 = document.querySelectorAll(".police_2");
        var items_3 = document.querySelectorAll(".police_3");
        var items_4 = document.querySelectorAll(".police_4");
        items_1.forEach(element => {
            element.style.animationPlayState = 'paused';
        });
        items_2.forEach(element => {
            element.style.animationPlayState = 'paused';
        });
        items_3.forEach(element => {
            element.style.animationPlayState = 'paused';
        });
        items_4.forEach(element => {
            element.style.animationPlayState = 'paused';
        });
        clearInterval(interval);
        document.getElementById("text_map").innerHTML = "Vous vous êtes fait attraper...";
        setTimeout(function(){
            window.location.href="http://localhost";
        }, 4000);
    }
}

var iter_1 = 0;
var iter_2 = 0;
var iter_3 = 0;
var iter_4 = 0;
var interval = setInterval(move, 400);

function end() {
    var x = voleur.getLatLng().lat;
    var y = voleur.getLatLng().lng;
    var seuil = 0.0001;
    if (distance(x, y, 38.890048, -77.027979) < seuil) {
        clearInterval(interval);
        var items_1 = document.querySelectorAll(".police_1");
        var items_2 = document.querySelectorAll(".police_2");
        var items_3 = document.querySelectorAll(".police_3");
        var items_4 = document.querySelectorAll(".police_4");
        items_1.forEach(element => {
            element.style.animationPlayState = 'paused';
        });
        items_2.forEach(element => {
            element.style.animationPlayState = 'paused';
        });
        items_3.forEach(element => {
            element.style.animationPlayState = 'paused';
        });
        items_4.forEach(element => {
            element.style.animationPlayState = 'paused';
        });
        map.removeLayer(voleur);
        document.getElementById("text_map").innerHTML = "Vous passez par la bouche d'égout, les policiers ne vous ont pas vu.<p></p>Vous sortez quelques rues plus loin...";
        setTimeout(function() {
            let mapDiv = document.getElementById("mapid");
            mapDiv.parentNode.removeChild(mapDiv);
            let script = document.createElement("script");
            script.src = "../js/jeu2.js";
            room = document.getElementById("jeu_2");
            room.appendChild(script);
        }, 3000);
    }
}

var multiline = L.polyline([
    [[38.890440, -77.022958], [38.890330, -77.031943], [38.888720, -77.03197], [38.888770, -77.028], [38.890390, -77.02799]],
    [[38.889830, -77.03197], [38.889940, -77.022164], [38.889330, -77.022175], [38.88920, -77.031959]], 
    [[38.890350, -77.030007], [38.888740, -77.030007]], 
    [[38.890400, -77.025962], [38.889289, -77.025962]], 
    [[38.890450, -77.022947], [38.889925, -77.022936]], 
    [[38.889900, -77.023956], [38.889306, -77.023940]]
], {color:'red', opacity: 0.4, weight:3});
multiline.addTo(map);
//map.addLayer(line);

var taille_icone_barriere = 30/get_coeff_animation(zoom_level);

var barriere_icon = L.divIcon({
    html: '<img src="../img/bar.png" class="" alt="barriere" width='.concat(taille_icone_barriere.toString(), ' height=', taille_icone_barriere.toString(), '>'),
    iconSize: [0, 0], // c'est le width et le height de la div 'img' qui permet de modifier sa taille
    iconAnchor: [15/get_coeff_animation(zoom_level), 15/get_coeff_animation(zoom_level)] // permet de centrer l'icone de police dans son cercle
});
var barriere = L.marker([38.89022, -77.028], {icon: barriere_icon, autoPan:false}).addTo(map);

var taille_icone_egout = 65/get_coeff_animation(zoom_level);

var egout_icon = L.divIcon({
    html: '<img src="../img/egout.png" class="" alt="egout" width='.concat(taille_icone_egout.toString(), ' height=', taille_icone_egout.toString(), '>'),
    iconSize: [0, 0], // c'est le width et le height de la div 'img' qui permet de modifier sa taille
    iconAnchor: [15/get_coeff_animation(zoom_level), 15/get_coeff_animation(zoom_level)] // permet de centrer l'icone de police dans son cercle
});
var egout = L.marker([38.89019, -77.02825], {icon: egout_icon, autoPan:false}).addTo(map);

var temps = new Date().getTime()/1000;
sessionStorage.setItem("debut_temps", temps.toString());
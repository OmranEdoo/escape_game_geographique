var img_src = [["../img/black.jpg", 3000, false], ["../img/scen1_new.png", 4000, true, "img_zoom_right"], ["../img/tiroir_gun.png", 4000, false], ["../img/scen2_new.png", 4000, false], ["../img/scen3_new.png", 5000, true, "img_zoom_up"], ["../img/black.jpg", 12500, false],["../img/mallette.png", 7000, true, "img_zoom"]]

var coeff=1.3;//Coefficient de reduction
const larg=window.innerWidth;//largeur maxi de l'image
const haut=window.innerHeight;//hauteur maxi de l'image
const coeffinit=coeff;
const longueur_img_src = img_src.length;

var tiroir = document.createElement("audio");
tiroir.setAttribute("src", "../son/tiroir.mp3");
var jt = document.createElement("audio");
jt.setAttribute("src", "../son/jt.mp3");
var voiture = document.createElement("audio");
voiture.setAttribute("src", "../son/voiture.mp3");
var tirs1 = document.createElement("audio");
tirs1.setAttribute("src", "../son/tirs_45_2.mp3");
var tirs2 = document.createElement("audio");
tirs2.setAttribute("src", "../son/mittraillettes_2.mp3");


function defile() {
    if (img_src.length) {
        let img = img_src[0];

        // On traite la partie son
        if (img_src.length == 7) {
            jt.play();
        } else if (img_src.length == 5) {
            tiroir.play();//changer son tiroir
        } else if (img_src.length == 2) {
            jt.pause();
            voiture.play();
            setTimeout(function(){tirs1.play()},7000);
            setTimeout(function(){tirs2.play()},7000);
        }

        // On traite la partie image
        coeff=coeffinit;
        // mise à part lors de l'affichage de la première photo, on doit supprimer l'ancienne photo afin de faire de la place pour la nouvelle, un display=none ne permetterait pas de refaire un zoom (animation)
        if (img_src.length != longueur_img_src){
            if (document.getElementById("img_zoom_right")){
                let image_zoom = document.getElementById("img_zoom_right");
                image_zoom.parentNode.removeChild(img_zoom_right);
            } else if (document.getElementById("img_zoom_up")){
                let image_zoom = document.getElementById("img_zoom_up");
                image_zoom.parentNode.removeChild(img_zoom_up);
            } else if (document.getElementById("img_zoom")){
                let image_zoom = document.getElementById("img_zoom");
                image_zoom.parentNode.removeChild(img_zoom);
            } else {
                let image = document.getElementById("img");
                image.parentNode.removeChild(image);
            }
        }
        if (img[2]) {
            var image = document.createElement("img");
            image.id = img[3];
        } else {
            var image = document.createElement("img");
            image.id = "img";
        }
        image.src = img[0];

        var block = document.getElementById("animation");
        block.appendChild(image);
        img_src.shift(); //on supprime la première image de la liste
        image.width = Math.round(larg/coeffinit);
        image.height = Math.round(haut/coeffinit);
        timemout = setTimeout(defile,img[1]);
    } else {
        let image_zoom = document.getElementById("img_zoom");
        image_zoom.parentNode.removeChild(img_zoom);
        let mapScript = document.createElement("script");
        mapScript.src = "../js/map.js";
        mapDiv = document.getElementById("mapid");
        mapDiv.appendChild(mapScript);
    }
;}

defile();
var fin_temps = new Date().getTime()/1000;
var score = fin_temps - Number(sessionStorage.getItem("debut_temps"));
sessionStorage.removeItem("debut_temps");
if (!fin) {
    window.location.href="http://localhost";
} else {
    var img_src_2 = [["../img/black.jpg", 3000], ["../img/ciel_1.png", 3500], ["../img/ciel_2.png", 3500],["../img/ciel_3.png", 3500], ["../img/ciel_4.png", 4000], ["../img/black.jpg", 3000],["../img/fin.png", 7000]];
    
    var pilot = document.createElement("audio");
    pilot.setAttribute("src", "../son/avion_1.mp3");
    var eclair = document.createElement("audio");
    eclair.setAttribute("src", "../son/eclair.wav");
    var crash = document.createElement("audio");
    crash.setAttribute("src", "../son/crash.mp3");
    var alarme = document.createElement("audio");
    alarme.setAttribute("src", "../son/alarme.wav");

    
    function defile_2() {
        if (img_src_2.length) {
            let img = img_src_2[0];
            // On traite la partie son
            if (img_src_2.length == 7) {
                pilot.play();
                crash.play();
            } else if (img_src_2.length == 3) {
                eclair.play();//changer son tiroir
            } else if (img_src_2.length == 2) {
                alarme.play();
            }
    
            // On traite la partie image
            var ciel = document.getElementById("img_2");

            ciel.src = img[0];
            ciel.style.gridArea = "1/1/11/11"
            ciel.style.width  = "100%";
            ciel.style.height = "100%";
            img_src_2.shift(); //on supprime la première image de la liste
            timemout = setTimeout(defile_2,img[1]);//defile(img[1])
        } else {
            window.location.href="http://localhost/php/score.php?score=" + score.toString();
        }
    ;}
    
    defile_2();
}
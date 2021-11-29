<?php
    $servername = "localhost";
    $username = "root";
    $password = "root";

    $link = mysqli_connect($servername, $username, $password);
    $db_name = "braqo";
    mysqli_select_db($link, $db_name);

    if(isset($_GET['pseudo']) && !empty($_GET['pseudo'])){
        session_start();
        $_SESSION["pseudo"] = $_GET['pseudo'];
        $requete = "INSERT INTO utilisateurs(pseudo) VALUES('".$_GET['pseudo']."')";
        mysqli_query($link, $requete);
        mysqli_close($link);
        header('Location: '."../html/game.html");
    } else {
        header('Location: '."..");
    }
?>
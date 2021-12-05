<?php
    $servername = "localhost";
    $username = "root";
    $password = "root";

    $link = mysqli_connect($servername, $username, $password);
    $db_name = "braqo";
    mysqli_select_db($link, $db_name);

    $sql = "SELECT pseudo FROM utilisateurs ORDER BY id DESC LIMIT 1";
    $result = mysqli_query($link, $sql);
    $pseudo = mysqli_fetch_assoc($result)['pseudo'];
    $requete = "UPDATE utilisateurs SET score=".$_GET['score']." WHERE pseudo='".$pseudo."'";
    unset($_SESSION["pseudo"]);
    mysqli_query($link, $requete);
    mysqli_close($link);

    header('Location: '."..");
?>

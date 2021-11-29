<?php
$servername = "localhost";
$username = "root";
$password = "root";

$link = new mysqli($servername, $username, $password);
$tab = [];
$requete = "SELECT * FROM braqo.objets";
if ($result = mysqli_query($link, $requete)) {
    while ($ligne = mysqli_fetch_assoc($result)) {
        $tab[] = $ligne;
    }
}
echo json_encode($tab);
?>


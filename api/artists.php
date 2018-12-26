<?php
include('./includes/Database.php');
include('./Models/Artists.php');

use Models\Artists as Artists;

$Artists = new Artists();
$allArtists = $Artists->getAll();

header('Content-Type: application/json');
echo json_encode($allArtists);

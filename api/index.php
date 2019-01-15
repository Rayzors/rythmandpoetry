<?php
require_once '../vendor/autoload.php';
$klein = new \Klein\Klein();

$klein->respond('GET', '/era', [new Controllers\Sections(), index]);

$klein->respond('GET', '/era/[i:id]', [new Controllers\Sections(), getById]);
$klein->respond('GET', '/era/artists', [new Controllers\Sections(), getArtists]);
$klein->respond('GET', '/era/musics', [new Controllers\Sections(), getMusics]);
$klein->respond('GET', '/era/[i:id]/artists', [new Controllers\Sections(), getArtistBySection]);
$klein->respond('GET', '/era/[i:id]/content', [new Controllers\Sections(), getContentBySection]);
$klein->respond('GET', '/era/[i:id]/musics', [new Controllers\Sections(), getMusicBySection]);


$klein->dispatch();
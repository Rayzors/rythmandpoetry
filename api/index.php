<?php
require_once 'vendor/autoload.php';
$klein = new \Klein\Klein();

$klein->respond('GET', '/era', [new \Controllers\Sections(), 'index']);
$klein->respond('GET', '/era/[i:id]', [new Controllers\Sections(), 'getById']);

$klein->respond('GET', '/artists', [new Controllers\Sections(), 'getArtists']);

$klein->respond('GET', '/artist/[i:id]', [new Controllers\Sections(), 'getArtistsById']);

$klein->respond('GET', '/era/[i:id]/artists', [new Controllers\Sections(), 'getArtistBySection']);

$klein->respond('GET', '/era/musics', [new Controllers\Sections(), 'getMusics']);
$klein->respond('GET', '/era/[i:id]/musics', [new Controllers\Sections(), 'getMusicBySection']);

$klein->respond('GET', '/era/[i:id]/content', [new Controllers\Sections(), 'getContentBySection']);
$klein->respond('GET', '/era/[i:id]/content/[a:action]', [new Controllers\Sections(), 'getContentByType']);

$klein->respond('GET', '/era/[i:id]/playlist', [new Controllers\Sections(), 'getPlaylistBySection']);


$klein->dispatch();
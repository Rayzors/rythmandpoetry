<?php

namespace Controllers;

use Models\Artists as modelArtists;


class Artists
{

  public function index()
  {
    $Artists = new modelArtists();
    $allArtists = $Artists->getAll();

    header('Content-Type: application/json');
    return json_encode($allArtists);
  }

  public function getById($request)
  {
    $Artists = new modelArtists();
    $artist = $Artists->getById($request->id);

    header('Content-Type: application/json');
    return json_encode($artist);
  }



}

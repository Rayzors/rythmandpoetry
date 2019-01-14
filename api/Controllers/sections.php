<?php

namespace Controllers;

use Models\Sections as modelSections;


class Sections
{

  public function index()
  {
      $Sections = new modelSections();
      $allSections = $Sections->getAll();

    header('Content-Type: application/json');
    return json_encode($allSections);
  }
  
  public function getById($request)
  {
    $Sections = new modelSections();
    $section = $Sections->getById($request->id);
    
    header('Content-Type: application/json');
    return json_encode($section);
  }

  public function getArtists($request)
  {
      $Sections = new modelSections();
      $allArtist = $Sections->getArtists();

    header('Content-Type: application/json');
    return json_encode($allArtist);
  }
  
  public function getContentBySection($request)
  {
      $Sections = new modelSections();
      $Contents = $Sections->getContentBySection($request->id);

    header('Content-Type: application/json');
    return json_encode($Contents);
  }

  public function getArtistBySection($request)
  {
      $Sections = new modelSections();
      $Artist = $Sections->getArtistBySection($request->id);

    header('Content-Type: application/json');
    return json_encode($Artist);
  }

  public function getMusics($request)
  {
      $Sections = new modelSections();
      $Musics = $Sections->getMusics();

    header('Content-Type: application/json');
    return json_encode($Musics);
  }

  public function getMusicBySection($request)
  {
      $Sections = new modelSections();
      $Musics = $Sections->getMusicBySection($request->id);

    header('Content-Type: application/json');
    return json_encode($Musics);
  }
  
}

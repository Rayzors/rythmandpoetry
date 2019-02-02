<?php

namespace Controllers;

use Models\Sections as modelSections;

//
class Sections
{

  private function setHeadersAndReturnJson( $array )
  {
    header("Access-Control-Allow-Origin: *");
    header('Content-Type: application/json');
    return json_encode( $array );
  }
  public function index()
  {
    $Sections = new modelSections();
    $allSections = $Sections->getAll();
    
    return $this->setHeadersAndReturnJson($allSections);
  }
  
  public function getById($request)
  {
  $Sections = new modelSections();
  $section = $Sections->getById($request->id);
  return $this->setHeadersAndReturnJson($section);
  }

  public function getArtists($request)
  {
    $Sections = new modelSections();
    $allArtist = $Sections->getArtists();
    return $this->setHeadersAndReturnJson($allArtist);
  }
  
  public function getContentBySection($request)
  {
    $Sections = new modelSections();
    $Contents = $Sections->getContentBySection($request->id);
    return $this->setHeadersAndReturnJson($Contents);
  }
  
  public function getContentByType($request)
  {
    $Sections = new modelSections();
    $Contents = $Sections->getContentByType($request->id, $request->action);
    return $this->setHeadersAndReturnJson($Contents);
  }

  public function getArtistBySection($request)
  {
    $Sections = new modelSections();
    $Artist = $Sections->getArtistBySection($request->id);
    return $this->setHeadersAndReturnJson($Artist);
  }

  public function getMusics($request)
  {
    $Sections = new modelSections();
    $Musics = $Sections->getMusics();
    return $this->setHeadersAndReturnJson($Musics);
  }

  public function getMusicBySection($request)
  {
    $Sections = new modelSections();
    $Musics = $Sections->getMusicBySection($request->id);
    return $this->setHeadersAndReturnJson($Musics);
  }
  public function getPlaylistBySection($request)
  {
    $Sections = new modelSections();
    $Playlist = $Sections->getPlaylistBySection($request->id);
    return $this->setHeadersAndReturnJson($Playlist);
  }
  
}

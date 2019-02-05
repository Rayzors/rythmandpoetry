<?php

namespace Models;

use Helpers\Database;

class Sections
{

  private $pdo;

  public function __construct()
  {
    $this->pdo = Database::get();
  }

  private function executeSqlById(string $sql, int $id)
  {
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindValue(':id', $id, \PDO::PARAM_INT);
    $stmt->execute();
    if ($stmt->errorCode() !== '00000') {
      throw new \Exception("Error Processing Request", 1);
    }
    $row = $stmt->fetchAll(\PDO::FETCH_ASSOC);

    if ($row === false) {
      return null;
    }

    return $row;
  }

  private function executeSqlByIdAndAction(string $sql, int $id, string $action)
  {
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindValue(':id', $id, \PDO::PARAM_INT);
    $stmt->bindValue(':act', $action, \PDO::PARAM_STR);
    $stmt->execute();
    if ($stmt->errorCode() !== '00000') {
      throw new \Exception("Error Processing Request", 1);
    }
    $row = $stmt->fetchAll(\PDO::FETCH_ASSOC);

    if ($row === false) {
      return null;
    }

    return $row;
  }

  private function executeSql(string $sql)
  {
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute();
    if ($stmt->errorCode() !== '00000') {
      throw new \Exception("Error Processing Request", 1);
    }
    $rows = $stmt->fetchAll(\PDO::FETCH_ASSOC);

    return $rows;
  }

  public function getAll() : array
  {
    $sql = "SELECT
    section_id,
    section_title,
    section_subtitle,
    section_bgcolor,
    section_color,
    section_bgimage,
    section_slug
    FROM
    sections;";
    return $this->executeSql($sql);
  }

  public function getById(int $id) : ? array
  {
    $sql = "SELECT
    sections.section_id,
    sections.section_subtitle,
    sections.section_title,
    sections.section_bgcolor,
    sections.section_color,
    sections.section_bgimage,
    sections.section_slug,
    content.content_type,
    content.content_text
    FROM
    sections
    INNER JOIN content ON sections.section_id = content.fk_section_id
    WHERE
    sections.section_id = :id";
    return $this->executeSqlById($sql, $id);
  }

  public function getArtists() : ? array
  {
    $sql = " SELECT
      artist_id,
      artist_name,
      artist_content,
      artist_cover,
      fk_section_id
      FROM
      artists;
    ";
    return $this->executeSql($sql);
  }

  public function getMusics() : ? array
  {
    $sql = " SELECT
      music_id,
      music_title,
      music_cover,
      music_src,
      music_artist_id,
      music_content,
      music_content_color,
      music_bgcolor,
      fk_section_id
      FROM
      musics
      ";
    return $this->executeSql($sql);
  }

  public function getContentBySection(int $id) : ? array
  {
    $sql = " SELECT
      content_id,
      content_type,
      content_text,
      fk_section_id
      FROM
      content
      WHERE
      fk_section_id = : id
      ";
    return $this->executeSqlById($sql, $id);
  }

  public function getContentByType(int $id, string $act) : ? array
  {
    $sql = " SELECT
      content_id,
      content_type,
      content_text,
      fk_section_id
      FROM
      content
      WHERE
      fk_section_id = : id
      and
      content_type = : act
      ";
    return $this->executeSqlByIdAndAction($sql, $id, $act);
  }

  public function getArtistBySection(int $id) : ? array
  {
    $sql = " SELECT
      artist_id,
      artist_name,
      artist_content,
      artist_cover,
      fk_section_id
      FROM
      artists
      WHERE
      fk_section_id = : id
      ";
    return $this->executeSqlById($sql, $id);
  }

  public function getMusicBySection(int $id) : ? array
  {
    $sql = " SELECT
      music_id,
      music_title,
      music_cover,
      music_src,
      music_artist_id,
      music_content,
      music_content_color,
      music_bgcolor,
      fk_section_id
      FROM
      musics
      WHERE
      fk_section_id = : id
      ";
    return $this->executeSqlById($sql, $id);
  }
  public function getPlaylistBySection(int $id) : ? array
  {
    $sql = " SELECT
      playlist_id,
      playlist_spotify_id,
      fk_section_id
      FROM
      playlists
      WHERE
      fk_section_id = : id
      ";
    return $this->executeSqlById($sql, $id);
  }


}
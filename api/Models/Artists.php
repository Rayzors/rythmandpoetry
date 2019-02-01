<?php

namespace Models;

use Helpers\Database;

class Artists
{

  private $pdo;

  public function __construct()
  {
    $this->pdo = Database::get();
  }

  public function getAll() : array
  {
    $sql = "SELECT
    artist_id,
    artist_name,
    artist_content,
    artist_cover,
    artist_page_id
    FROM
    artists;";
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute();
    if ($stmt->errorCode() !== '00000') {
      throw new \Exception("Error Processing Request", 1);
    }
    $rows = $stmt->fetchAll(\PDO::FETCH_ASSOC);

    return $rows;
  }

  public function getById(int $id) : ? array
  {
    $sql = "SELECT
    artist_id,
    artist_name,
    artist_content,
    artist_cover,
    artist_page_id
    FROM
    artists
    WHERE
    id = :id;";
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindValue(':id', $id, \PDO::PARAM_INT);
    $stmt->execute();
    if ($stmt->errorCode() !== '00000') {
      throw new \Exception("Error Processing Request", 1);
    }
    $row = $stmt->fetch(\PDO::FETCH_ASSOC);

    if ($row === false) {
      return null;
    }

    return $row;
  }

}
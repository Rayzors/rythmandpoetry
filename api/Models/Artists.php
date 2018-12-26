<?php

namespace Models;

use dbConnexion\Database;

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
    id,
    name,
    description,
    imgLink
    FROM
    artistes;";
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute();
    $rows = $stmt->fetchAll(\PDO::FETCH_ASSOC);

    return $rows;
  }

  public function getById(int $id) : ? array
  {
    $sql = "SELECT
    id,
    name,
    description,
    imgLink
    FROM
    artistes
    WHERE
    id = :id;";
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindParams(':id', $id, \PDO::PARAM_INT);
    $stmt->execute();
    $row = $stmt->fetch(\PDO::FETCH_ASSOC);

    if ($row === false) {
      return [];
    }

    return $row;
  }

}
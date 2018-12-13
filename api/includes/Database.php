<?php

namespace dbConnexion;

class Database
{

  private static $pdo;



  public function __construct()
  {
  }

  /**
   * db getter
   * @return PDO
   */
  public static function get()
  {
    if (\is_null(self::$pdo)) {
        // instantiate PDO connexion
      try {
        self::$pdo = new \PDO('mysql:host=localhost;port=3306;dbname=rap', 'root', '');
        self::$pdo->exec("SET NAMES UTF8");
      } catch (\PDOException $exception) {
        die($exception->getMessage());
      }
    }
    return self::$pdo;
  }

}

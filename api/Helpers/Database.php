<?php

namespace Helpers;

class Database
{
  const DB_SGBD = 'mysql';
  const DB_HOST = 'localhost';
  const DB_PORT = 3306;
  const DB_NAME = 'rap';
  const DB_USER = 'root';
  const DB_PASSWORD = 'root';

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
        self::$pdo = new \PDO(
          self::DB_SGBD . ':host=' . self::DB_HOST . ';port=' . self::DB_PORT . ';dbname=' . self::DB_NAME,
          self::DB_USER,
          self::DB_PASSWORD,
          [
            \PDO::ATTR_ERRMODE => \PDO::ERRMODE_WARNING
          ]
        );
        self::$pdo->exec("SET NAMES UTF8");
      } catch (\PDOException $exception) {
        die($exception->getMessage());
      }
    }
    return self::$pdo;
  }

}

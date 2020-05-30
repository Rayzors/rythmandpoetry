<?php

namespace Helpers;

class Database
{

  private static $pdo;

  private static $DB_SGBD;
  private static $DB_HOST;
  private static $DB_PORT;
  private static $DB_NAME;
  private static $DB_USER;
  private static $DB_PASSWORD;


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
      self::$DB_SGBD     = 'mysql';
      self::$DB_HOST     = getenv('HOST') ?? 'localhost';
      self::$DB_PORT     = getenv('DBPORT') ?? 3306;
      self::$DB_NAME     = getenv('DBNAME') ?? 'rap';
      self::$DB_USER     = getenv('DBUSER') ?? 'root';
      self::$DB_PASSWORD = getenv('DBPWD') ?? 'root';

      // instantiate PDO connexion
      try {
        self::$pdo = new \PDO(
          self::$DB_SGBD . ':host=' . self::$DB_HOST . ';port=' . self::$DB_PORT . ';dbname=' . self::$DB_NAME,
          self::$DB_USER,
          self::$DB_PASSWORD,
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

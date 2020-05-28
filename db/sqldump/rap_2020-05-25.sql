# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Hôte: 51.68.230.73 (MySQL 5.5.5-10.1.44-MariaDB-0+deb9u1)
# Base de données: rap
# Temps de génération: 2020-05-25 16:36:13 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Affichage de la table artists
# ------------------------------------------------------------
DROP DATABASE IF EXISTS rap;

CREATE DATABASE rap;

USE rap;

DROP TABLE IF EXISTS `artists`;

CREATE TABLE `artists` (
  `artist_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `artist_name` varchar(50) DEFAULT NULL,
  `artist_cover` varchar(50) DEFAULT NULL,
  `artist_content` text,
  `artist_content_color` varchar(32) NOT NULL,
  `artist_bgcolor` varchar(32) NOT NULL,
  `fk_section_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`artist_id`),
  KEY `fk_section_id` (`fk_section_id`),
  CONSTRAINT `artists_ibfk_1` FOREIGN KEY (`fk_section_id`) REFERENCES `sections` (`section_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `artists` WRITE;
/*!40000 ALTER TABLE `artists` DISABLE KEYS */;

INSERT INTO `artists` (`artist_id`, `artist_name`, `artist_cover`, `artist_content`, `artist_content_color`, `artist_bgcolor`, `fk_section_id`)
VALUES
	(3,'DJ Kool Herc','/images/frameKoolHerc.png','his family first emigrated in the Bronx New York in the late 60’s.<br/><br/>\nCampbell studied at the Alfred E. Smith Career and Technical School Bronx High School, in which his size, his attitude and his attitude on the basketball courts, earned him the nickname \"Hercules ». He started hanging out with a graffiti crew called Ex-Vandals under the name of Kool Herc.<br/><br/>\nHerc and his sister throw big parties at theirs places. Herc’s first sound system was composed by two mix decks which was used to pass songs like Give It Up Or Turnit A Loose by James Brown.<br/><br/>\nKool DJ Herc had launch the birth of a movement called Hip Hop. \n','','',1),
	(4,'Afrika','/images/frameAfrika.png','Lance’s family where ardent activist of the black cause. \nHe grown up under the influence of different political ideologies all focused on the search for freedom of the black American people. <br/><br/>\nIn 1969, the Bronx was infested by crime and delinquency. Bambaataa joined the P.O.W.E.R (People\'s Organization for War and Energetic Revolutionaries ) gang. Then he quitted this gang to join the Black Spades. <br/><br/>\nHis charisma and his gift for speaking enable him to make himself known and quickly become influential within his gang but also with other groups bordering. Bambaataa thus becomes a \"warlord\" charged with increasing the influence of the Black Spades. On numerous occasions, he pushes his clan to confront other rival gangs for this purpose. The Spades become during this period the largest black criminal organization in the Bronx17. But during particularly violent brawls, Afrika begins to question himself.<br/><br/>\nIn 1971, a truce was signed between the gangs. This period of peace made bambaataa realize that he could use his gift of eloquence and charisma to bring peace to his neighborhood. <br/><br/>\n«  Bambaataa was always a musician , a record collector who has a DJ Jam. Now he saw a new idea to use stand and proud in his career. To put the bronx in a music trance and move from violence to Zulu dance » ','','',1),
	(5,'Grand Master','/images/frameGrandmaster.png','Une description','','',1);

/*!40000 ALTER TABLE `artists` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table content
# ------------------------------------------------------------

DROP TABLE IF EXISTS `content`;

CREATE TABLE `content` (
  `content_id` int(11) NOT NULL AUTO_INCREMENT,
  `content_type` varchar(128) NOT NULL,
  `content_text` text NOT NULL,
  `fk_section_id` int(11) NOT NULL,
  PRIMARY KEY (`content_id`),
  KEY `fk_section_id` (`fk_section_id`),
  CONSTRAINT `content_ibfk_1` FOREIGN KEY (`fk_section_id`) REFERENCES `sections` (`section_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `content` WRITE;
/*!40000 ALTER TABLE `content` DISABLE KEYS */;

INSERT INTO `content` (`content_id`, `content_type`, `content_text`, `fk_section_id`)
VALUES
	(1,'introduction','{\"intro\":\"Episode 1\",\"title\":\"At the dawn of a new culture\",\"desc\":\"When the times are difficult, people may need to bring joy in their lives again. And what is the best way to gather people when the times are bad ?\"}',1),
	(5,'Seconde','{}',1);

/*!40000 ALTER TABLE `content` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table musics
# ------------------------------------------------------------

DROP TABLE IF EXISTS `musics`;

CREATE TABLE `musics` (
  `music_id` int(11) NOT NULL AUTO_INCREMENT,
  `music_title` varchar(128) NOT NULL,
  `music_cover` varchar(512) NOT NULL,
  `music_src` varchar(512) NOT NULL,
  `music_artist_id` int(11) NOT NULL,
  `music_content` text NOT NULL,
  `music_content_color` varchar(32) NOT NULL,
  `music_bgcolor` varchar(32) NOT NULL,
  `fk_section_id` int(11) NOT NULL,
  PRIMARY KEY (`music_id`),
  KEY `fk_section_id` (`fk_section_id`),
  CONSTRAINT `musics_ibfk_1` FOREIGN KEY (`fk_section_id`) REFERENCES `sections` (`section_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `musics` WRITE;
/*!40000 ALTER TABLE `musics` DISABLE KEYS */;

INSERT INTO `musics` (`music_id`, `music_title`, `music_cover`, `music_src`, `music_artist_id`, `music_content`, `music_content_color`, `music_bgcolor`, `fk_section_id`)
VALUES
	(1,'DJ Kool Herc - Blue Jay Season','lol.jpg','https://rapapi.kevinmanssat.fr/musics/dj_koolherc_-_b-boy.mp3',0,'','','',0),
	(2,'Johnny Guitar Watson - Telephone Bill','','https://rapapi.kevinmanssat.fr/musics/Johnny_Guitar_Watson_-_Telephone_Bill.mp3',0,'','','',0),
	(3,'Grandmaster Flash & The Furious Five - The Message','','https://rapapi.kevinmanssat.fr/musics/Grandmaster_Flash_The_Furious_Five_-_The_Message.mp3',0,'','','',1),
	(4,'Afrika Bambaataa & Soul Sonic Force - Looking For The Perfect Beat','','https://rapapi.kevinmanssat.fr/musics/Afrika_Bambaataa_Soul_Sonic_Force_-_Looking_For_The_Perfect_Beat.mp3',0,'','','',1);

/*!40000 ALTER TABLE `musics` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table playlists
# ------------------------------------------------------------

DROP TABLE IF EXISTS `playlists`;

CREATE TABLE `playlists` (
  `playlist_id` int(11) NOT NULL AUTO_INCREMENT,
  `playlist_spotify_id` varchar(32) NOT NULL,
  `fk_section_id` int(11) NOT NULL,
  PRIMARY KEY (`playlist_id`),
  KEY `fk_section_id` (`fk_section_id`),
  CONSTRAINT `playlists_ibfk_1` FOREIGN KEY (`fk_section_id`) REFERENCES `sections` (`section_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `playlists` WRITE;
/*!40000 ALTER TABLE `playlists` DISABLE KEYS */;

INSERT INTO `playlists` (`playlist_id`, `playlist_spotify_id`, `fk_section_id`)
VALUES
	(1,'4NF9VUiwO6P1eZHcvh6vYg',1);

/*!40000 ALTER TABLE `playlists` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table sections
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sections`;

CREATE TABLE `sections` (
  `section_id` int(11) NOT NULL AUTO_INCREMENT,
  `section_title` varchar(128) NOT NULL,
  `section_subtitle` varchar(128) NOT NULL,
  `section_bgcolor` varchar(32) NOT NULL,
  `section_color` varchar(32) NOT NULL,
  `section_bgimage` varchar(512) NOT NULL,
  `section_slug` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`section_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;

INSERT INTO `sections` (`section_id`, `section_title`, `section_subtitle`, `section_bgcolor`, `section_color`, `section_bgimage`, `section_slug`)
VALUES
	(0,'home','','','','',NULL),
	(1,'At the dawn of a new culture','The beginning of rap and hip-hop. (70s)','#F8C918','#B21131','/images/slide-image-1.jpg','at-the-dawn-of-a-new-culture'),
	(2,'The rise of gangsta rap','The birth of Gangsta rap. (80s)','#B21131','#F8C918','/images/slide-image-2.jpg','the-rise-of-gangsta-rap'),
	(3,'New generations','A new type of rapper. (2K10)','#561222','#FFFFFF','/images/slide-image-3.jpg','new-generations');


UNLOCK TABLES;

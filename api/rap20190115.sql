-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jan 15, 2019 at 08:55 AM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `rap`
--

-- --------------------------------------------------------

--
-- Table structure for table `musics`
--

CREATE TABLE `musics` (
  `music_id` int(11) NOT NULL,
  `music_title` varchar(128) NOT NULL,
  `music_cover` varchar(512) NOT NULL,
  `music_src` varchar(512) NOT NULL,
  `music_artist_id` int(11) NOT NULL,
  `fk_section_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `musics`
--

INSERT INTO `musics` (`music_id`, `music_title`, `music_cover`, `music_src`, `music_artist_id`, `fk_section_id`) VALUES
(1, 'Okocha', 'lol.jpg', 'lol.mp3', 0, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `musics`
--
ALTER TABLE `musics`
  ADD PRIMARY KEY (`music_id`),
  ADD KEY `fk_section_id` (`fk_section_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `musics`
--
ALTER TABLE `musics`
  MODIFY `music_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `musics`
--
ALTER TABLE `musics`
  ADD CONSTRAINT `musics_ibfk_1` FOREIGN KEY (`fk_section_id`) REFERENCES `sections` (`section_id`);

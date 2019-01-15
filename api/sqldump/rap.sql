-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jan 15, 2019 at 12:30 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `rap`
--

-- --------------------------------------------------------

--
-- Table structure for table `artists`
--

CREATE TABLE `artists` (
  `artist_id` int(11) UNSIGNED NOT NULL,
  `artist_name` varchar(50) DEFAULT NULL,
  `artist_content` text,
  `artist_cover` varchar(50) DEFAULT NULL,
  `fk_section_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `artists`
--

INSERT INTO `artists` (`artist_id`, `artist_name`, `artist_content`, `artist_cover`, `fk_section_id`) VALUES
(3, 'Maxime OGER', 'Un grand rappeur francais', 'https://picsum.photos/200/200', 1),
(4, 'Yash PATEL', 'Sûrement le meilleur rappeur indien', 'https://picsum.photos/200/200', 2);

-- --------------------------------------------------------

--
-- Table structure for table `content`
--

CREATE TABLE `content` (
  `content_id` int(11) NOT NULL,
  `content_type` varchar(128) NOT NULL,
  `content_text` text NOT NULL,
  `fk_section_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `content`
--

INSERT INTO `content` (`content_id`, `content_type`, `content_text`, `fk_section_id`) VALUES
(1, 'introduction', 'The story of hip hop does not belong in NY, LA or London. That’s wrong. The true story begins in devastation, bad housing and gang war. In the Bronx getho. \r\n\r\nLong time ago in the bronx neighborhood, the crime and delinquency was making the rules. \r\nThis strange place was also known has «  planet rock » was the cradle of a divided community, where gangs, drugs and violence was dime a dozen. \r\n\r\nIn 1970, Robert Moses, an Urbanist begins the construction of the cross Bronx Highway, forcing the wealthiest population to move out due to the drop of the interest rate. there remained only poor people. \r\n\r\nhttps://pro.magnumphotos.com/CS.aspx?VP3=SearchResult&VBID=2K1HZO4F8Y43PL&SMLS=1&RW=1440&RH=790\r\n\r\nhttps://mediastore.magnumphotos.com/CoreXDoc/MAG/Media/TR2/2/6/8/1/NYC133900.jpg\r\n\r\nThis situation resulted in an incrementation of criminality and some people voluntary stetted fire to building to earn the insurance money this was the beginning of a mess.\r\n\r\nFrom this cold and sad atmosphere, the planet rock needed something to bring people together, something joyfull and warm.\r\n', 1);

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

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE `sections` (
  `section_id` int(11) NOT NULL,
  `section_title` varchar(128) NOT NULL,
  `section_subtitle` varchar(128) NOT NULL,
  `section_bgcolor` varchar(32) NOT NULL,
  `section_color` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sections`
--

INSERT INTO `sections` (`section_id`, `section_title`, `section_subtitle`, `section_bgcolor`, `section_color`) VALUES
(1, 'The begenning of a new era', 'The begenning of rap and hip-hop. (70s)', '', ''),
(2, 'The golden Era', 'Je sais pas frère', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`artist_id`),
  ADD KEY `fk_section_id` (`fk_section_id`);

--
-- Indexes for table `content`
--
ALTER TABLE `content`
  ADD PRIMARY KEY (`content_id`),
  ADD KEY `fk_section_id` (`fk_section_id`);

--
-- Indexes for table `musics`
--
ALTER TABLE `musics`
  ADD PRIMARY KEY (`music_id`),
  ADD KEY `fk_section_id` (`fk_section_id`);

--
-- Indexes for table `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`section_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `artists`
--
ALTER TABLE `artists`
  MODIFY `artist_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `content`
--
ALTER TABLE `content`
  MODIFY `content_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `musics`
--
ALTER TABLE `musics`
  MODIFY `music_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sections`
--
ALTER TABLE `sections`
  MODIFY `section_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `artists`
--
ALTER TABLE `artists`
  ADD CONSTRAINT `artists_ibfk_1` FOREIGN KEY (`fk_section_id`) REFERENCES `sections` (`section_id`);

--
-- Constraints for table `content`
--
ALTER TABLE `content`
  ADD CONSTRAINT `content_ibfk_1` FOREIGN KEY (`fk_section_id`) REFERENCES `sections` (`section_id`);

--
-- Constraints for table `musics`
--
ALTER TABLE `musics`
  ADD CONSTRAINT `musics_ibfk_1` FOREIGN KEY (`fk_section_id`) REFERENCES `sections` (`section_id`);

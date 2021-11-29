-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : lun. 29 nov. 2021 à 00:41
-- Version du serveur : 5.7.24
-- Version de PHP : 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `braqo`
--

-- --------------------------------------------------------

--
-- Structure de la table `objets`
--

CREATE TABLE `objets` (
  `id` int(11) NOT NULL,
  `nom` text NOT NULL,
  `lien_image` text NOT NULL,
  `on_map` tinyint(1) NOT NULL DEFAULT '0',
  `in_house` tinyint(1) DEFAULT NULL,
  `latitude` double DEFAULT NULL,
  `longitude` double DEFAULT NULL,
  `taille` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `objets`
--

INSERT INTO `objets` (`id`, `nom`, `lien_image`, `on_map`, `in_house`, `latitude`, `longitude`, `taille`) VALUES
(1, 'diamant', '../img/diamant.png', 0, 0, NULL, NULL, 0),
(2, 'flingue', '../img/flingue_2.png', 0, 0, NULL, NULL, 0),
(3, 'passeport', '../img/passeport.png', 0, 1, NULL, NULL, 0),
(4, 'car_key', '../img/car_key.png', 0, 1, NULL, NULL, 0),
(6, 'cagoule', '../img/cagoule_2.png', 0, 0, NULL, NULL, 0),
(7, 'plaque_egout', '../img/egout.png', 1, 0, 38.862808, -76.989987, 200),
(8, 'car', '../img/car.png', 1, 0, 38.85771, -76.986138, 200),
(9, 'porte', '../img/porte.png', 1, 0, 38.857771, -76.986106, 150),
(10, 'avion', '../img/avion.png', 1, 0, 38.93364, -77.456418, 500),
(11, 'key', '../img/key.png', 0, 0, NULL, NULL, 0),
(12, 'billet', '../img/billet.png', 0, 0, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `pseudo` text NOT NULL,
  `score` double DEFAULT NULL,
  `id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`pseudo`, `score`, `id`) VALUES
('test', NULL, 1),
('sztez', NULL, 2),
('', 36.253000020980835, 3),
('zumbalove974', NULL, 4),
('segzeg', NULL, 5),
('joueur1', NULL, 6),
('test2', NULL, 7),
('sdg', NULL, 8),
('vvv', NULL, 9),
('dsqg', NULL, 10),
('zeg', NULL, 11),
('sgsegs', NULL, 12),
('szf', NULL, 13),
('mmm', NULL, 14),
('aaa', NULL, 15),
('zzz', NULL, 16),
('ccc', NULL, 17),
('www', NULL, 18),
('rrr', NULL, 19),
('ttt', NULL, 20),
('ttt', NULL, 21),
('ooo', 46.25399994850159, 22),
('dsq', NULL, 23),
('fff', NULL, 24),
('dfqdggqsdfg', NULL, 25),
('', 36.253000020980835, 26),
('azerty', NULL, 27),
('ggggg', 40.5770001411438, 28),
('jetest', NULL, 29);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `objets`
--
ALTER TABLE `objets`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `objets`
--
ALTER TABLE `objets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 21 mars 2023 à 15:43
-- Version du serveur : 10.4.25-MariaDB
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `quai_antique`
--

-- --------------------------------------------------------

--
-- Structure de la table `booking`
--

CREATE TABLE `booking` (
  `id_reservation` int(11) UNSIGNED NOT NULL,
  `nom` varchar(100) DEFAULT NULL,
  `couverts` int(11) DEFAULT NULL,
  `dateReservation` date DEFAULT NULL,
  `heureReservation` time DEFAULT NULL,
  `fruitsCoques` tinyint(1) NOT NULL,
  `arachide` tinyint(1) NOT NULL,
  `oeuf` tinyint(1) NOT NULL,
  `lait` tinyint(1) NOT NULL,
  `autre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `booking`
--

INSERT INTO `booking` (`id_reservation`, `nom`, `couverts`, `dateReservation`, `heureReservation`, `fruitsCoques`, `arachide`, `oeuf`, `lait`, `autre`) VALUES
(1, 'admin', 1, '2023-03-22', '12:15:00', 0, 1, 0, 0, NULL),
(6, 'jean', 4, '2023-03-22', '12:15:00', 1, 1, 0, 1, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `fiche_user`
--

CREATE TABLE `fiche_user` (
  `id_fiche_user` int(10) UNSIGNED NOT NULL,
  `fiche_user_userId` int(10) UNSIGNED NOT NULL,
  `fiche_user_nom` varchar(100) NOT NULL,
  `fiche_user_couverts` int(11) NOT NULL CHECK (`fiche_user_couverts` >= 1 and `fiche_user_couverts` <= 20),
  `fiche_user_fruitsCoques` tinyint(1) NOT NULL,
  `fiche_user_arachide` tinyint(1) NOT NULL,
  `fiche_user_oeuf` tinyint(1) NOT NULL,
  `fiche_user_lait` tinyint(1) NOT NULL,
  `fiche_user_autre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `fiche_user`
--

INSERT INTO `fiche_user` (`id_fiche_user`, `fiche_user_userId`, `fiche_user_nom`, `fiche_user_couverts`, `fiche_user_fruitsCoques`, `fiche_user_arachide`, `fiche_user_oeuf`, `fiche_user_lait`, `fiche_user_autre`) VALUES
(23, 56, 'admin', 1, 0, 0, 0, 1, ''),
(74, 116, 'test', 5, 0, 1, 0, 0, ''),
(96, 134, 'Jean', 5, 0, 0, 1, 0, ''),
(97, 134, 'a modif', 1, 0, 0, 0, 0, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `plats`
--

CREATE TABLE `plats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nom` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `prix` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `plats`
--

INSERT INTO `plats` (`id`, `nom`, `description`, `prix`) VALUES
(1, 'Tartiflette nature', 'Pommes de terre, crème, oignons, reblochon, accompagnée de salade verte', '17.00'),
(2, 'Tartiflette au bleu', 'Pommes de terre, crème, oignons, bleu, accompagnée de salade verte', '17.50'),
(3, 'Tartiflette lardons', 'Pommes de terre, crème, oignons, reblochon, lardons, accompagnée de salade verte', '18.00'),
(4, 'Tartiflette à la viande de grison', 'Pommes de terre, crème, oignons, reblochon, viande de grison, accompagnée de salade verte', '19.50'),
(5, 'Tartiflette au saumon fumé', 'Pommes de terre, crème, oignons, reblochon, saumon fumé, accompagnée de salade verte', '20.00'),
(6, 'Tartiflette aux cèpes', 'Pommes de terre, crème, reblochon, cèpes, accompagnée de salade verte', '21.50'),
(7, 'Croziflette lardons', 'Pommes de terre, crème, reblochon, cèpes, accompagnée de salade verte', '18.50'),
(8, 'Gratiné au brezain', 'Crêpes de sarrasin, pommes de terre, crème, oignons, viande de grison, raclette fumée, accompagné de salade verte', '20.50'),
(9, 'Diots au vin blanc*', 'Saucisses de Savoie fumées cuites au vin blanc', '20.50'),
(10, 'Escalope savoyarde*', 'Filet de poulet, jambon cru de Savoie, oignons, crème, reblochon', '20.50');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `nom` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `admin` tinyint(3) UNSIGNED DEFAULT NULL,
  `couverts` int(11) NOT NULL CHECK (`couverts` >= 1 and `couverts` <= 20),
  `timestamp` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='nouvelle table user';

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `nom`, `email`, `password`, `admin`, `couverts`, `timestamp`) VALUES
(56, 'admin', 'a26d685ef51ddb4a66f9901f8ebebc4647e25c821602cb0d8abae48956d8d9d8', '$2b$10$fUbLUAWHWedI27zQV/eSTubPX4cnPI9mteK1eBWVCoflWEEofZaPG', 1, 1, '2023-03-17 22:59:06'),
(116, 'test', 'd4923a834563e9419fedffc27b7074b804876102ce808c17301893fce281db1a', '$2b$10$8EW3LHFfum5HVjFHewbEMuMyIpbK8sMtMSzxQj3YEdklGNBvyAwEO', NULL, 5, '2023-03-19 23:45:19'),
(134, 'jean', '6df21e89af0df05ed8f37cd686c1d448c60dfc527cc20c948080308ca45609c7', '$2b$10$ixd9gozXy3868bhFygAbHeZx7OQOiKRpDZt6H3rf/HfcNEHxCB.DS', NULL, 5, '2023-03-21 15:39:26');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id_reservation`);

--
-- Index pour la table `fiche_user`
--
ALTER TABLE `fiche_user`
  ADD PRIMARY KEY (`id_fiche_user`),
  ADD KEY `fiche_user_userId` (`fiche_user_userId`);

--
-- Index pour la table `plats`
--
ALTER TABLE `plats`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nom` (`nom`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `booking`
--
ALTER TABLE `booking`
  MODIFY `id_reservation` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `fiche_user`
--
ALTER TABLE `fiche_user`
  MODIFY `id_fiche_user` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT pour la table `plats`
--
ALTER TABLE `plats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=135;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `fiche_user`
--
ALTER TABLE `fiche_user`
  ADD CONSTRAINT `fiche_user_ibfk_1` FOREIGN KEY (`fiche_user_userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

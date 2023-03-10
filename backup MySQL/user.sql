-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 10 mars 2023 à 11:24
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
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `nom` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `couverts` int(11) NOT NULL CHECK (`couverts` >= 1 and `couverts` <= 20),
  `timestamp` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='nouvelle table user';

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `nom`, `email`, `password`, `couverts`, `timestamp`) VALUES
(10, 'test', 'd4923a834563e9419fedffc27b7074b804876102ce808c17301893fce281db1a', '$2b$10$Cl3oz20QNStKrwOCz8qAluAL32E6ynM1Nqc0.a92t.Bd8v3VKpl52', 5, '2023-03-09 18:22:56'),
(11, 'test2', 'a27a1bb14846b635f15dd7f2c026a06089fb7b690713b475b4db6194de89c4ed', '$2b$10$gLRluubCMo3RzccuJ/NFzueqGySDn4bIN/9SnhBssBGErqqQnCoQi', 15, '2023-03-09 20:48:36'),
(12, 'test3', '8648a5bc972730c9c10c07f24a3ae2c0590a7b7d3ee18d8003dced87c1727d9b', '$2b$10$ZMhDkmZOCFt2BvuFQVpLbOk1FXrws5sH7GlIdUMyxeV3CC2PQqT9G', 2, '2023-03-09 20:48:59'),
(13, 'test4', '043e3ad02b47fe2c7c25d9b7a186e1a1f1c55eb9e8615c29b9c350285af9c6df', '$2b$10$BYEqNjnbcv7wLvkfAbWB2.6NkQe4NFUBu70IaMoEeuu2VsjomYtf2', 7, '2023-03-09 20:58:19'),
(31, 'test5', 'dd325bfe8406dd6ab030132e62be9de9aafb0bdadf0dac73859da81686e6cab5', '$2b$10$Vg06QBnojgexa1pkhpPBE.zUPqjbEj3H80NIvbEtHuLKLI5o58f1C', 12, '2023-03-10 10:42:51');

--
-- Index pour les tables déchargées
--

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
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

CREATE TABLE `fiche_user` (
  `id_fiche_user` int(10) UNSIGNED NOT NULL,
  `fiche_user_userid` int(10) UNSIGNED NOT NULL,
  `fiche_user_nom` varchar(100) NOT NULL,
  `fiche_user_couverts` int(11) NOT NULL CHECK (`fiche_user_couverts` >= 1 and `fiche_user_couverts` <= 20),
  `fiche_user_allergies` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
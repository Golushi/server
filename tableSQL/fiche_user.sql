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
);

ALTER TABLE `fiche_user`
  ADD PRIMARY KEY (`id_fiche_user`),
  ADD KEY `fiche_user_userId` (`fiche_user_userId`);

ALTER TABLE `fiche_user`
  MODIFY `id_fiche_user` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `fiche_user`
  ADD CONSTRAINT `fiche_user_ibfk_1` FOREIGN KEY (`fiche_user_userid`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;
CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `nom` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `couverts` int(11) NOT NULL CHECK (`couverts` >= 1 and `couverts` <= 20),
  `timestamp` datetime DEFAULT current_timestamp()
);

ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nom` (`nom`),
  ADD UNIQUE KEY `email` (`email`);

ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;
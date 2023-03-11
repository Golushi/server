CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `nom` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `couverts` int(11) NOT NULL CHECK (`couverts` >= 1 and `couverts` <= 20),
  `timestamp` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='nouvelle table user';


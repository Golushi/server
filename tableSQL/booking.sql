CREATE TABLE booking (
  `id_reservation` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nom` VARCHAR(100) DEFAULT NULL,
  `couverts` INT DEFAULT NULL,
  `dateReservation` DATE DEFAULT NULL,
  `heureReservation` TIME DEFAULT NULL,
  `fruitsCoques` tinyint(1) NOT NULL,
  `arachide` tinyint(1) NOT NULL,
  `oeuf` tinyint(1) NOT NULL,
  `lait` tinyint(1) NOT NULL,
  `autre` varchar(255) DEFAULT NULL
);
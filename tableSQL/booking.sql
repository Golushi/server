CREATE TABLE reservations (
  id_reservation INT PRIMARY KEY,
  nom VARCHAR(255),
  nb_couverts INT,
  date_reservation DATE,
  heure_reservation TIME,
  allergies VARCHAR(255)
);
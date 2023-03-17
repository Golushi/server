CREATE TABLE reservations (
  id_reservation INT PRIMARY KEY,
  nb_couverts INT,
  date_reservation DATE,
  heure_reservation TIME,
  allergies VARCHAR(255)
);
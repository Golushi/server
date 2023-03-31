//"INSERT INTO `booking`( `nom`, `couverts`, `dateReservation`, `heureReservation`, `fruitsCoques`, `arachide`, `oeuf`, `lait`, `autre`) VALUES ('admin', '1','2023-03-22','12:15','0','1','0','0', NULL)";
// Import model
const booking = require("../models/Booking");

// Import connection mysql
const connection = require("../db/db.mysql");

exports.bookingController = async (req, res) => {
  console.log(req.body);

  const useBooking = req.body;
  console.log("____booking");
  console.log(useBooking);

  const {
    nom,
    couverts,
    dateReservation,
    heureReservation,
    fruitsCoques,
    arachide,
    oeuf,
    lait,
    autre,
  } = useBooking;

  const bookingNew = new booking(
    nom,
    couverts,
    dateReservation,
    heureReservation,
    fruitsCoques,
    arachide,
    oeuf,
    lait,
    autre
  );

  try {
    const querySql = `INSERT INTO booking( nom, couverts, dateReservation, heureReservation, fruitsCoques, arachide, oeuf, lait, autre)
    VALUES (?)`;

    //('jean', '1','2023-03-22','12:15','0','1','0','0', NULL);
    const values = [
      nom,
      couverts,
      dateReservation,
      heureReservation,
      fruitsCoques,
      arachide,
      oeuf,
      lait,
      autre,
    ];
    const bookingNew = await connection
      .promise()
      .query(querySql, [values], (error, results) => {
        if (error) {
          res.json({ error });
        } else {
          res.status(200).json({ results });
        }
      });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

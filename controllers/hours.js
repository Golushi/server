// Import model
const opening_hours = require("../models/Hours");

// Import connection mysql
const connection = require("../db/db.mysql");

exports.openingHoursControllerGet = async (req, res) => {
  try {
    const dayOfWeek = req.originalUrl.split("=")[1];

    const sql = "SELECT * FROM opening_hours WHERE day = ?";
    await connection.query(sql, dayOfWeek, (error, results) => {
      if (error) {
        res.json({ error });
      } else {
        console.log("--------------------> Selection objet a modif");
        res.status(200).json({ results });
      }
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.openingHoursController = async (req, res) => {
  try {
    const dayOfWeek = req.originalUrl.split("=")[1];
    console.log("5555555555555req.body.day");
    console.log(req.originalUrl.split("=")[1]);
    console.log(req.body);

    const sql = "SELECT * FROM opening_hours WHERE day = ?";
    const { lunch_start, lunch_end, dinner_start, dinner_end, day } = req.body;

    const querySql = `
              UPDATE opening_hours SET
              lunch_start = ?,
              lunch_end = ?,
              dinner_start = ?,
              dinner_end = ?
              WHERE day = ?
              `;

    const values = [lunch_start, lunch_end, dinner_start, dinner_end, day];

    console.log("__________________values");

    connection.query(querySql, values, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "Opening hours not found." });
      }
      console.log("result__________");
      return res.status(201).json({ message: "mise a jour OK", results });
    });
  } catch (error) {
    console.log(error);
    return res.status(403).json({ error: "Something went wrong." });
  }
};

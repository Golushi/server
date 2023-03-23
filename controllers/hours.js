// Import model
const opening_hours = require("../models/Hours");

// Import connection mysql
const mysqlconnection = require("../db/db.mysql");

exports.openingHoursController = async (req, res) => {
  try {
    // const dayOfWeek = req.body.day;
    // console.log("req.body.day");
    // console.log(req.body.day);

    // const querySql = "SELECT * FROM opening_hours WHERE day = ?";
    // mysqlconnection.query(querySql, dayOfWeek, (error, results) => {
    //   if (error) {
    //     res.json({ error });
    //   } else {
    //     console.log("--------------------> Selection objet a modif");
    //     console.log(results);

    const { lunch_start, lunch_end, dinner_start, dinner_end, day } = req.body;

    console.log("req.body_____");
    console.log(req.body);

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
    console.log(values);
    await mysqlconnection.query(querySql, values, (error, results) => {
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

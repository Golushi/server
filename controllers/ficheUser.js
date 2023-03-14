// Import models
const fiche_user = require("../models/FicheUser");
console.log("--------> FicheUser");
console.log(fiche_user);

// Import connection mysql
const mysqlconnection = require("../db/db.mysql");

exports.createFicheUser = async (req, res) => {
  console.log(req.body);
  console.log(req.body.fiche_user);
  console.log(req.file);

  const userFicheObject = req.body.fiche_user;

  console.log("--------> userFicheObject");
  console.log(userFicheObject);

  const { userId, nom, couverts, fruitsCoques, arachide, oeuf, lait, autre } =
    userFicheObject;
  //   console.log(userId);

  const ficheUser = new fiche_user(
    userId,
    nom,
    couverts,
    fruitsCoques,
    arachide,
    oeuf,
    lait,
    autre
  );

  try {
    const querySql = `INSERT INTO fiche_user (fiche_user_userId, fiche_user_nom, fiche_user_couverts, fiche_user_fruitsCoques, fiche_user_arachide, fiche_user_oeuf, fiche_user_lait, fiche_user_autre) 
        VALUES (?)`;

    const values = [
      userId,
      nom,
      couverts,
      fruitsCoques,
      arachide,
      oeuf,
      lait,
      autre,
    ];
    const ficheUser = await mysqlconnection.query(
      querySql,
      [values],
      (error, results) => {
        if (error) {
          res.json({ error });
        } else {
          res.status(200).json({ results });
        }
      }
    );
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.readAllFicheUser = async (req, res) => {
  try {
    const ficheUser = await mysqlconnection.query(
      "SELECT * FROM `fiche_user` WHERE ?",
      ["1"],
      (error, results) => {
        if (error) {
          res.json({ error });
        } else {
          res.status(200).json({ results });
        }
      }
    );
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.readOneFicheUser = async (req, res) => {
  try {
    const id = req.params.id;
    const querySql = "SELECT * FROM `fiche_user` WHERE `id_fiche_user`= ?";

    const ficheUser = await mysqlconnection.query(
      querySql,
      [id],
      (error, results) => {
        if (error) {
          res.json({ error });
        } else {
          res.status(200).json({ results });
        }
      }
    );
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.updateOneFicheUser = (req, res, next) => {};

exports.deleteOneFicheUser = (req, res, next) => {};

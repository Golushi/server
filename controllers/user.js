// Import bcrypt
const bcrypt = require("bcrypt");

// Import cryptoJS
const cryptojs = require("crypto-js");

// Import jsonwebtoken
const jwt = require("jsonwebtoken");

// Import variables d'env
const dotenv = require("dotenv");
const result = dotenv.config();

// Import connection mysql
const mysqlconnection = require("../db/db.mysql");

// Import models bdd user
const User = require("../models/User");
const fiche_user = require("../models/FicheUser");

// Signup pour enregistrer nouvel user
exports.signup = (req, res) => {
  const { nom, email, password, couverts } = req.body;

  // Instance classe User
  const user = new User(nom, email, password, couverts);

  // Chiffrer email
  const emailChiffre = user.emailChiffrement();

  // Hasher password
  user
    .hashPassword()
    .then((hash) => {
      // Donnée à envoyer
      const data = {
        nom: nom,
        email: emailChiffre,
        password: hash,
        couverts: couverts,
      };
      // Requete SQL
      mysqlconnection.query("INSERT INTO user SET ?", data, (error) => {
        if (error) {
          res.json({ error });
        } else {
          res.json({ message: "Utilisateur enregisté" });

          exports.createFicheUser = (req, res) => {
            const userFicheObject = req.body.fiche_user;

            console.log("--------> userFicheObject");
            console.log(userFicheObject);

            const {
              userId,
              nom,
              couverts,
              fruitsCoques,
              arachide,
              oeuf,
              lait,
              autre,
            } = userFicheObject;

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
              const ficheUser = mysqlconnection.query(
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
        }
      });
    })
    .catch((error) => res.status(500).json({ error }).send(console.log(error)));
};

// Login
exports.login = (req, res) => {
  const { nom, email, password, couverts } = req.body;
  // Instance classe User
  const user = new User(nom, email, password, couverts);
  // Chiffrer l'email
  const emailChiffre = user.emailChiffrement();
  // Chercher dans la bdd
  mysqlconnection.query(
    "SELECT * FROM user WHERE email = ?",
    emailChiffre,
    (error, results) => {
      if (error) {
        res.json({ error });
      } else {
        if (results == 0) {
          return res.status(404).json({ error: "utilisateur inexistant" });
        }
        // Validité password
        bcrypt
          .compare(req.body.password, results[0].password)
          .then((controlPassword) => {
            if (!controlPassword) {
              return res.status(401).json({ error: "mot de passe incorrect" });
            }
            // Generer Token
            const token = jwt.sign(
              { userId: results[0].id },
              `${process.env.JWT_KEY_TOKEN}`,
              { expiresIn: "12h" }
            );
            // Res server userId et token
            res.status(201).json({
              userId: results[0].id,
              token,
            });
          })
          .catch((error) => res.status(500).json({ error }));
      }
    }
  );
};

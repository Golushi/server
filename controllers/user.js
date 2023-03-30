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
const connection = require("../db/db.mysql");

// Import models bdd user
const User = require("../models/User");
// const fiche_user = require("../models/FicheUser");

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
      connection.promise().query("INSERT INTO user SET ?", data, (error) => {
        if (error) {
          res.json({ error });
        } else {
          res.json({ message: "Utilisateur enregisté" });
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
  connection.query(
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

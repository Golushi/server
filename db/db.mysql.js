// Import package variables env
const dotenv = require("dotenv");
dotenv.config();

// Import mysql
const mysql = require("mysql2");

// Param connexion bdd
const urlDB = `mysql://${process.env.DB_USER}:jKTJaBTY5nE6O9hxU6N4@containers-us-west-113.railway.app:7027/railway`;

// Connection à la base de données
const connection = mysql.createConnection(urlDB);

// Connecion bdd
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to database: ", error);
  } else {
    console.log("Connected to database!");
  }
});

module.exports = connection;

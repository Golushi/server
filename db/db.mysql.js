// Import package variables env
const dotenv = require("dotenv");
dotenv.config();

// Import mysql
const mysql = require("mysql2");

// Param connexion bdd
const urlDB = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.PORT}/${process.env.DB_DATABASE}`;

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

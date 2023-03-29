// Import package variables env
const dotenv = require("dotenv");
const { createConnection } = require("mysql2");
dotenv.config();

// Import mysql
const mysql = require("mysql2/promise");

// Param connexion bdd
const urlDB = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT}/${process.env.MYSQLDATABASE}`;

// Connection à la base de données
const connection = mysql.createConnection(urlDB);

console.log(createConnection);

module.exports = connection;

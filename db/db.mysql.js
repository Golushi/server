// Import package variables env
const dotenv = require("dotenv");
dotenv.config();

// Import mysql
const mysql = require("mysql2/promise");

// Param connexion bdd
const urlDB = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT}/${process.env.MYSQLDATABASE}`;

// Connection à la base de données
const mysqlconnection = mysql.createConnection(urlDB);

// PORT=7027
// DB_HOST=containers-us-west-113.railway.app
// DB_USER=root
// DB_PASSWORD=jKTJaBTY5nE6O9hxU6N4
// DB_DATABASE=railway
// DB_NAME=quai_antique

// const mysqlconnection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
// });

// const mysqlconnection = mysql.createConnection({
//   host: "localhost",
//   database: "quai_antique",
//   user: "root",
//   password: "",
// });

// Connecion bdd
// mysqlconnection.connect((err) => {
//   if (err) {
//     console.log(`error connecting: ${err.stack}`);
//   } else {
//     console.log("connecté a la bdd quai_antique");
//     console.log(`connected as id ${mysqlconnection.threadId}`);
//   }
// });

module.exports = mysqlconnection;

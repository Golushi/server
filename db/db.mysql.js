// Import package variables env
const dotenv = require("dotenv");
dotenv.config();

// Import mysql
const mysql = require("mysql2/promise");

// Param connexion bdd
const urlDB = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT}/${process.env.MYSQLDATABASE}`;

// Connection à la base de données
const connection = mysql.createConnection(urlDB);

// Connecion bdd
// connection.connect((err) => {
//   if (err) {
//     console.log(`error connecting: ${err.stack}`);
//   } else {
//     console.log("connecté a la bdd quai_antique");
//     console.log(`connected as id ${connection.threadId}`);
//   }
// });

module.exports = connection;

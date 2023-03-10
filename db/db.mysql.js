// Import package variables env
const dotenv = require("dotenv");
dotenv.config();

// Import mysql
const mysql = require("mysql");
console.log(mysql);

// Param connexion bdd
const mysqlconnection = mysql.createConnection({
  host: "localhost",
  database: "quai_antique",
  user: "root",
  password: "",
});

// Connecion bdd
mysqlconnection.connect((err) => {
  if (err) {
    console.log(`error connecting: ${err}`);
  } else {
    console.log("connecté a la bdd quai_antique");
    console.log(`connected as id ${mysqlconnection.threadId}`);
  }
});

module.exports = mysqlconnection;

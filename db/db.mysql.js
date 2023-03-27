// Import package variables env
const dotenv = require("dotenv");
dotenv.config();

// Import mysql
const mysql = require("mysql");
console.log(mysql);

// Param connexion bdd
const mysqlconnection = mysql.createConnection({
  host: "localhost",
  database: "id20467199_quai_antique	",
  user: "id20467199_admin",
  password: "tmY3bAWpW86W_O>1",
});
// const mysqlconnection = mysql.createConnection({
//   host: "localhost",
//   database: "quai_antique",
//   user: "root",
//   password: "",
// });

// Connecion bdd
mysqlconnection.connect((err) => {
  if (err) {
    console.log(`error connecting: ${err.stack}`);
  } else {
    console.log("connecté a la bdd quai_antique");
    console.log(`connected as id ${mysqlconnection.threadId}`);
  }
});

module.exports = mysqlconnection;

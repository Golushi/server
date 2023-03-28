// Import package variables env
const dotenv = require("dotenv");
dotenv.config();

// Import mysql
const mysql = require("mysql");
console.log(mysql);

// Param connexion bdd
// const mysqlconnection = mysql.createConnection({
//   host: "localhost",
//   database: "id20467199_quai_antique	",
//   user: "id20467199_admin",
//   password: "tmY3bAWpW86W_O>1",
// });

const urlsDB = `mysql://root:jKTJaBTY5nE6O9hxU6N4@containers-us-west-113.railway.app:7027/railway`;
const mysqlconnection = mysql.createConnection(urlsDB);
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
mysqlconnection.connect((err) => {
  if (err) {
    console.log(`error connecting: ${err.stack}`);
  } else {
    console.log("connecté a la bdd quai_antique");
    console.log(`connected as id ${mysqlconnection.threadId}`);
  }
});

module.exports = mysqlconnection;

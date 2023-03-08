// Import express
const express = require("express");

// Import morgan(logger http)
const morgan = require("morgan");

// Import connection bdd mysql
const mysql = require("./db/db.mysql");

// Creer app express
const app = express();

// logger req,res
app.use(morgan("dev"));

// Gestion CORS

// Route generale

// app.use((req, res, next) => {
//   console.log("premiere requete");
//   next();
// });

// app.use((req, res) => {
//   res.status(200);
//   res.json({ message: "ça fonctionne" });
// });

// Export app.js
module.exports = app;

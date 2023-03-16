// Import express
const express = require("express");

// Import morgan(logger http)
const morgan = require("morgan");

// Import connection bdd mysql
const mysql = require("./db/db.mysql");

// Import routes
const userRoutes = require("./routes/user");
const ficheUserRoutes = require("./routes/ficheUser");

// Creer app express
const app = express();

// Import body-parser
//const bodyParser = require("body-parser");

// logger req,res
app.use(morgan("dev"));

// Gestion CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Transform corps en json
app.use(express.json());

// Route d'auth
app.use("/api/authentification", userRoutes);

// Route fiche user
app.use("/api/fiche_user", ficheUserRoutes);

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

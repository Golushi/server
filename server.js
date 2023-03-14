// Import package HTTP
const http = require("http");

// Import Appli
const app = require("./app");

// Import variables env
const dotenv = require("dotenv");
const result = dotenv.config();

// Param port
app.set("port", process.env.PORT);

// Create server
const server = http.createServer(app);

// Serveur ecoute
server.listen(
  process.env.PORT,
  console.log(`ecoute du port : ${process.env.PORT}`)
);

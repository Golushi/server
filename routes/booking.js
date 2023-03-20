// import express from "express";
const express = require("express");

// Import controllers booking
const { bookingController } = require("../controllers/booking");

// Import middleware auth
//const auth = require("../middleware/authentification");

// const router = express.Router();
const router = express.Router();

//CREATE Visiteur

// Route Visiteur
router.post("/", bookingController);

// // Route user
// router.post("/booking", auth, bookingController);

module.exports = router;

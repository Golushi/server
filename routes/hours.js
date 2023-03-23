// import express from "express";
const express = require("express");

// Import controllers booking
const { openingHoursController } = require("../controllers/hours");

// Import middleware auth
const auth = require("../middleware/authentification");

// const router = express.Router();
const router = express.Router();

// Route admin
router.put("/", openingHoursController);

// // Route user
// router.post("/booking", auth, bookingController);

module.exports = router;

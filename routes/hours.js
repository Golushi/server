// import express from "express";
const express = require("express");

// Import controllers booking
const { openingHoursController } = require("../controllers/hours");
const { openingHoursControllerGet } = require("../controllers/hours");

// Import middleware auth
const auth = require("../middleware/authentification");

// const router = express.Router();
const router = express.Router();

// Route admin
router.put("/opening_hours", openingHoursController);
router.get("/opening_hours", openingHoursControllerGet);

module.exports = router;

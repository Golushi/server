// import express from "express";
const express = require("express");

// Importation middleware password
const password = require("../middleware/password");

// Import controllers user
const userController = require("../controllers/user");

// const router = express.Router();
const router = express.Router();

// Route signup
router.post("/signup", password, userController.signup);

// Route login
router.post("/login", userController.login);

// export default router;
module.exports = router;

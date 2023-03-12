// import express from "express";
const express = require("express");

// Import controllers ficheUser
const ficheUser = require("../controllers/ficheUser");
console.log(ficheUser);

// Import middleware auth
const auth = require("../middleware/auth");

// const router = express.Router();
const router = express.Router();

// Routes
router.post("/", auth, ficheUser.createFicheUser);

router.get("/", auth, ficheUser.readAllFicheUser);

router.get("/:id", auth, ficheUser.readOneFicheUser);

router.put("/:id", auth, ficheUser.updateOneFicheUser);

router.delete("/:id", auth, ficheUser.deleteOneFicheUser);

// Export
module.exports = router;

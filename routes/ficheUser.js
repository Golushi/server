// import express from "express";
const express = require("express");

// Import controllers ficheUser
const {
  createFicheUser,
  readAllFicheUser,
  readOneFicheUser,
  updateOneFicheUser,
  deleteOneFicheUser,
} = require("../controllers/ficheUser");

// Import middleware auth
const auth = require("../middleware/authentification");

// const router = express.Router();
const router = express.Router();

// Routes
router.post("/", auth, createFicheUser);

router.get("/", auth, readAllFicheUser);

router.get("/:id", auth, readOneFicheUser);

router.put("/:id", auth, updateOneFicheUser);

router.delete("/:id", auth, deleteOneFicheUser);

// Export
module.exports = router;

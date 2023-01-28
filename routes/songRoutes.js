const express = require("express");
const { createSong, getSong } = require("../controllers/songController");

const router = express.Router();

router
  .get("/songs", getSong)
  .get("/song/:id", getSong)
  .post("/songs", createSong)
  .put("/songs/:id", () => {})
  .delete("/songs/:id", () => {});

exports.songsRoutes = router;

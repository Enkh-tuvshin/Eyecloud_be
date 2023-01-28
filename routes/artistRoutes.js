const express = require("express");
const { createArtist, getArtist, getArtists } = require("../controllers/artistController");

const router = express.Router();

router
  .get("/artists", getArtists)
  .get("/artists", getArtist)
  .post("/artists", createArtist)
  .put("/artists/:id", () => {})
  .delete("/artists/:id", () => {});

exports.songsRoutes = router;

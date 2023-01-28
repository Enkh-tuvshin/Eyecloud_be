const express = require("express");
const { createPlaylist, getPlaylist, deletePlaylists } = require("../controllers/playlistController");

const router = express.Router();

router
  .get("/playlists", getPlaylist)
  .get("/playlist/:id", getPlaylist)
  .post("/playlists", createPlaylist)
  .put("/plalylists/:id", () => {})
  .delete("/playlists/:id", deletePlaylists);

exports.playlistsRoutes = router;

const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const { playlistsRoutes } = require("./routes");
const { songsRoutes } = require("./routes/songRoutes");
require("dotenv").config();
  
console.log(process.env.PORT);

const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

connect()

app.use(playlistsRoutes);
app.use(songsRoutes);

app.get("/", (req, res) => {
  res.send("Well");
});

app.listen(port, () => {
  console.log("Server running at :", port);
});
const { Song } = require("../models/songModel");

exports.createSong = async (req, res) => {
  const body = req.body;

  const result = await Song(body).save();
  res.send(result);
};

exports.getSong = async (req, res) => {
  const playlistId = req.query.playlistId;

  if (playlistId) {
    const result = await Song.find({ playlistId });
    res.send(result);
  }
  const result = await Song.find({});
  res.send(result);
};  

const { Artist } = require("../models/playlistModel");

exports.createArtist = async (req, res) => {
  const body = req.body;

  const result = await new Artist(body).save();
  res.send(result);
};

exports.getArtists = async (_req, res) => {
  const result = await Artists.find();
  res.send(result);
};

exports.getArtist = async (req, res) => {
    const result = await Artist.findById;
    res.send(result)
}

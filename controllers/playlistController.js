const { Playlist } = require("../models/playlistModel");

exports.createPlaylist = async (req, res) => {
  const body = req.body;
console.log(req.body)
  const result = await new Playlist(body).save();
  console.log(res)
  res.send(result);
};

exports.getPlaylist = async (req, res) => {
  const result = await Playlist.find();
  res.send(result);
};

exports.deletePlaylists = async (req, res) => {
  const _id = req.params.id;
  try {
    const deletedData = await Post.findByIdAndDelete({ _id });
    res.send(deletedData);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

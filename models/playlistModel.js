const { Schema, Types, model } = require("mongoose");

const playlistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
    required:true,
  },
  id: {
    type: String,
    default: "",

  },
  // creator: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  isPrivate: {
    type: Boolean,
    default: false,
  },
  // songs: [{ type: Schema.Types.ObjectId }],
  songs: Array,
});

const Playlist = model("Playlists", playlistSchema);
exports.Playlist = Playlist;

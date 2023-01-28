const { Schema, Types, model } = require("mongoose");

const artistSchema = new Schema({
  name: String,
  creatorId: Types.ObjectId,
  createdAt: { type: Date, default: Dat.now()},
  
});

const Artist = model("Artist", artistSchema);
exports.Artist = Artist;

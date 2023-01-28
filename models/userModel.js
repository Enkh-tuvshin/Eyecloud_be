const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema);
exports.User = User;

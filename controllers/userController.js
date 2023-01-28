const { User } = require("../models/playlistModel");

exports.createUser = async (req, res) => {
  const body = req.body;

  const result = await new User(body).save();
  res.send(result);
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.find({ username });

  if (user.password === password) {
    res.send(user);
  } else {
    res.status(401).json({ message: "Username or password is invalid" });
  }
};

exports.getUsers = async (_req, res) => {
  const result = await User.find();
  res.send(result);
};

exports.getUser = async (req, res) => {
  const result = await User.findById(req.params.id);
  res.send(result);
};

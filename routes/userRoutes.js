const express = require("express");
const { createUser, getUser, getUsers } = require("../controllers/userController");

const router = express.Router();

router
  .get("/users", getUsers)
  .get("/user/:id", getUser)
  .post("/users", createUser)
  .put("/users/:id", () => {})
  .delete("/users/:id", () => {});

exports.usersRoutes = router;

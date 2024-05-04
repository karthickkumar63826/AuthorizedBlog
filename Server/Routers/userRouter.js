const express = require("express");
const userRoutes = express.Router();
const { register, login } = require("../Controllers/userController");

userRoutes.post("/register", register);
userRoutes.post("/login", login);

module.exports = userRoutes;

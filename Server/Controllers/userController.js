const CustomeError = require("../Error/customeError");
const User = require("../Models/user");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const hashPassword = require("../Middlewares/hashPassword");

const register = async (req, res, next) => {
  try {
    req.body.role = "user";
    req.body.password = await hashPassword(req.body.password);
    const userDetails = await User.create(req.body);
    res.status(200).json({ msg: "User registered successfully" });
  } catch (err) {
    next(new CustomeError(err.message, 500));
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) res.status(401).json({ msg: "User is not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) res.status(400).json({ msg: "Invalid email /password" });
    else {
      const { email, username, role } = user;
      const token = JWT.sign(
        { email, username, role },
        process.env.JWT_SECRETKEY,
        { expiresIn: "300s" }
      );
      res.status(201).json(token);
    }
  } catch (err) {
    next(new CustomeError(err.message, 500));
  }
};

module.exports = { register, login };

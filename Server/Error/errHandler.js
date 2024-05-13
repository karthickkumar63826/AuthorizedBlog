const CustomeError = require("./customeError");

const ErrorHandler = (err, req, res, next) => {
  if (err instanceof CustomeError) {
    res.status(err.statusCode).json({ message: err.message });
  } else res.status(500).json({ msg: "Internal server error" });
};

module.exports = ErrorHandler;

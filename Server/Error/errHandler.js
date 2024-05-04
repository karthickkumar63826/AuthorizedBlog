const CustomeError = require("./customeError");

const ErrorHandler = (err, req, res, next) => {
  if (err instanceof CustomeError) {
    req.status(err.statusCode).json({ msg: err.message });
  }
  req.status(500).json(err.message);
};

module.exports = ErrorHandler;

const JWT = require("jsonwebtoken");
const CustomeError = require("../Error/customeError");

const AuthMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ Error: " Authorization is not done " });
  }

  try {
    const token = authHeader.split(" ")[1];
    console.log(token);
    const decoded = JWT.verify(token, process.env.JWT_SECRETKEY);
    console.log(decoded);
    const { email, username, role } = decoded;
    req.user = { email, username, role };
    next();
  } catch (error) {
    console.log(error);
    next(new CustomeError(error.message, 500));
  }
};

module.exports = AuthMiddleware;

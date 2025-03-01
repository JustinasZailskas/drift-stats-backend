const jwt = require("jsonwebtoken");
const User = require("../models/user");
const AppError = require("../utils/AppError");
const ErrorTypes = require("../utils/errorTypes");

const authenticateUser = (req, res, next) => {
  try {
    const authorizationHeader = req.header("Authorization");
    if (!authorizationHeader) {
      throw new AppError(
        "Missing authorization header",
        401,
        ErrorTypes.AUTHENTICATION_ERROR
      );
    }
    const token = authorizationHeader.split(" ")[1];
    if (!token) {
      throw new AppError("Missing token", 401, ErrorTypes.AUTHENTICATION_ERROR);
    }
    const decoded = jwt.verify(token, "your-secret-key");
    req.userID = decoded.userID;
    User.findById(decoded.userID).then((user) => {
      if (!user) {
        throw new AppError(
          "Prieiga negalima. Prašome prisijungti",
          401,
          ErrorTypes.AUTHENTICATION_ERROR
        );
      }
      req.user = user;
      next();
    });
  } catch (error) {
    next(error);
  }
};

module.exports = authenticateUser;

const userRepository = require("../repositories/userRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/AppError");

class AuthService {
  async login(username, password) {
    const user = await userRepository.findByUsername(username);
    if (!user) {
      throw new AppError("Invalid credentials", 401);
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new AppError("Invalid credentials", 401);
    }

    const token = jwt.sign({ userID: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });

    await userRepository.updateToken(user, token);
    return token;
  }

  async register(username, password, role) {
    const existingUser = await userRepository.findByUsername(username);
    if (existingUser) {
      throw new AppError("Username already in use", 400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return await userRepository.create({
      username,
      password: hashedPassword,
      role,
    });
  }
}

module.exports = new AuthService();

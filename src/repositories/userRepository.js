const User = require("../models/user");

class UserRepository {
  async findByUsername(username) {
    return await User.findOne({ username });
  }

  async create(userData) {
    const user = new User(userData);
    return await user.save();
  }

  async updateToken(user, token) {
    user.token = token;
    return await user.save();
  }

  async findById(id) {
    return await User.findById(id);
  }
}

module.exports = new UserRepository();

const League = require("../models/league");

class LeagueRepository {
  async findAll() {
    const data = await League.find({});

    return data;
  }
}

module.exports = new LeagueRepository();

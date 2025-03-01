const League = require("../models/league");

class LeagueRepository {
  async findAll() {
    const data = await League.find({});
    console.log("Repositorija");

    return data;
  }
}

module.exports = new LeagueRepository();

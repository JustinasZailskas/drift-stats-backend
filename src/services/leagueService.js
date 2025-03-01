const leagueRepository = require("../repositories/leagueRepository");

class LeagueService {
  async getAllLeagues() {
    return await leagueRepository.findAll();
  }
}

module.exports = new LeagueService();

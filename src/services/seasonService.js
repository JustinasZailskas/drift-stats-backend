const seasonRepository = require("../repositories/seasonRepository");

class SeasonService {
  async getAllSeasons() {
    return await seasonRepository.getAllSeasons();
  }

  async getSeasonByYear(year) {
    return await seasonRepository.getSeasonByYear(year);
  }

  async createSeason(seasonData) {
    return await seasonRepository.createSeason(seasonData);
  }
}

module.exports = new SeasonService();

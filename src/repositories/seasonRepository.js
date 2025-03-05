const Season = require("../models/season");

class SeasonRepository {
  async getAllSeasons() {
    return await Season.find({});
  }

  async getSeasonByYear(year) {
    return await Season.find({ year });
  }

  async createSeason(seasonData) {
    const season = new Season(seasonData);
    return await season.save();
  }
}

module.exports = new SeasonRepository();

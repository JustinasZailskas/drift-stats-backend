const League = require("../models/league");
const leagueService = require("../services/leagueService");
const AppError = require("../utils/AppError");

exports.getAllLeagues = async (req, res) => {
  try {
    leagueService.getAllLeagues().then((leagueItems) => {
      if (!leagueItems) {
        const error = new AppError("Elementai nerasti", 404);
        return res.status(error.statusCode).json({
          status: error.status,
          message: error.message,
        });
      }
      res.json(leagueItems);
    });
  } catch (error) {
    console.log("Klaida: ", error.message);
    throw error;
  }
};

const League = require("../models/league");
const leagueService = require("../services/leagueService");
const AppError = require("../utils/AppError");

exports.getAllLeagues = async (req, res) => {
  // try {
  //   const leagueItems = await leagueService.getAllLeagues();
  //   console.log("Items", leagueItems);
  //   if (!leagueItems || leagueItems.length === 0) {
  //     const error = new AppError("Elementai nerasti", 404);
  //     return res.status(error.statusCode).json({
  //       status: error.status,
  //       message: error.message,
  //     });
  //   }
  //   res.json(leagueItems);
  // } catch (error) {
  //   const internalError = new AppError("Vidinė serverio klaida", 500);
  //   res.status(internalError.statusCode).json({
  //     status: internalError.status,
  //     message: internalError.message,
  //   });
  // }
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

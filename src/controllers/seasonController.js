const seasonService = require("../services/seasonService");
const AppError = require("../utils/AppError");

exports.getAllSeasons = async (req, res) => {
  try {
    const seasons = await seasonService.getAllSeasons();
    if (!seasons || seasons.length === 0) {
      const error = new AppError("Sezonai nerasti", 404);
      return res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
      });
    }
    res.json(seasons);
  } catch (error) {
    const internalError = new AppError("Vidinė serverio klaida", 500);
    res.status(internalError.statusCode).json({
      status: internalError.status,
      message: internalError.message,
    });
  }
};

exports.createSeason = async (req, res) => {
  try {
    const seasonData = req.body;
    const newSeason = await seasonService.createSeason(seasonData);
    res.status(201).json(newSeason);
  } catch (error) {
    const internalError = new AppError("Vidinė serverio klaida", 500);
    res.status(internalError.statusCode).json({
      status: internalError.status,
      message: internalError.message,
    });
  }
};

exports.getSeasonByYear = async (req, res, next) => {
  const { year } = req.params;
  try {
    const season = await seasonService.getSeasonByYear(year);
    if (!season) {
      return next(new AppError("Sezonas nerastas", 404));
    }
    res.json(season);
  } catch (error) {
    next(new AppError("Vidinė serverio klaida", 500));
  }
};

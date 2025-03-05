const express = require("express");
const seasonController = require("../controllers/seasonController");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", seasonController.getAllSeasons);
router.post("/", authMiddleware, seasonController.createSeason);
router.get("/:year", seasonController.getSeasonByYear);

module.exports = router;

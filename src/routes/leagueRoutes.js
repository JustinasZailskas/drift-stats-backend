const express = require("express");
const router = express.Router();
const leagueController = require("../controllers/leagueController");

router.get("/", leagueController.getAllLeagues);

module.exports = router;

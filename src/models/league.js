const mongoose = require("mongoose");

const leagueSchema = new mongoose.Schema({
  leagueTitle: { type: "string", required: true },
});

const league = mongoose.model("League", leagueSchema, "league");

module.exports = league;

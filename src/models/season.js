const mongoose = require("mongoose");

const seasonSchema = new mongoose.Schema({
  seasonTitle: { type: String, required: true },
  year: { type: Number, required: true },
  leagueID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "League",
    required: true,
  },
});

const season = mongoose.model("Season", seasonSchema, "season");

module.exports = season;

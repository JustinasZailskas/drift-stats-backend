const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const connectToDatabase = require("./services/database");
const leagueRouter = require("./routes/leagueRoutes");
const authRouter = require("./routes/authRoutes");
const auth = require("./middlewares/authMiddleware");

connectToDatabase();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to root URL of Server");
});
app.use("/", authRouter);
app.use("/league", leagueRouter);
app.use((req, res) => {
  res.status(404).json({ error: "Puslapis nerastas" });
});
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const port = process.env.PORT || 3000;
// Paleiskite serverį po sėkmingo prisijungimo prie duomenų bazės
mongoose.connection.once("open", () => {
  app.listen(port, () => {
    console.log(`Serveris veikia ant ${port} porto`);
  });
});

module.exports = app;

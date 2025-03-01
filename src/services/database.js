const mongoose = require("mongoose");
const AppError = require("../utils/AppError");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Prisijungta prie duomenu bazes");
  } catch (error) {
    console.error("Klaida jungianties prie MongoDB", error.message);
    throw new AppError("Nepavyko prisijungti prie duomenų bazės", 500);
  }
};

module.exports = connectToDatabase;

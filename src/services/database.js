const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Prisijungta prie duomenu bazes");
  } catch (error) {
    console.error("Klaida jungianties prie MongoDB", error.message);
    process.exit(1);
  }
};

module.exports = connectToDatabase;

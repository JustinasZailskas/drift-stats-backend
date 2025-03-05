const ErrorTypes = require("../utils/errorTypes");

const errorHandler = (error, req, res, next) => {
  // Nustatome numatytas reikšmes
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";
  error.message = error.message || "Something went wrong";

  console.error("Error:", {
    message: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString(),
  });

  if (process.env.NODE_ENV === "development") {
    return res.status(error.statusCode).json({
      status: error.status,
      error: error.message,
      message: error.message,
      stack: error.stack,
    });
  }

  if (error.isOperational) {
    return res.status(error.statusCode).json({
      status: error.status,
      message: error.message,
    });
  }

  // Jei tai sisteminė klaida
  return res.status(500).json({
    status: "error",
    message: "Something went wrong",
  });
};

process.on("unhandledRejection", (err) => {
  console.error("NEAPDOROTAS PROMISE 💥 Sistema bus išjungta...");
  console.error(err.name, err.message);
  process.exit(1);
});

process.on("uncaughtException", (err) => {
  console.error("NEAPDOROTA IŠIMTIS! 💥 Sistema bus išjungta...");
  console.error(err.name, err.message);
  process.exit(1);
});

module.exports = errorHandler;

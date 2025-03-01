class AppError extends Error {
  constructor(message, statusCode, errorType = "AppError") {
    super(message);
    this.statusCode = statusCode;
    this.errorType = errorType;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;

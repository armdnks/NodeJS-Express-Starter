const ErrorResponse = require("../utils/error-response");

const errorHandlerMiddleware = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log to console for dev
  console.log(err.stack.red);

  // OTHER ERROR GOES HERE
  // ...

  return res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

module.exports = errorHandlerMiddleware;

require("colors");
require("dotenv").config();
require("express-async-errors");

// __EXPRESS__
const express = require("express");
const app = express();
app.use(express.json());

// __DATABASE__
// ...

// __MIDDLEWARE & SUPPORT PACKAGES__
// ... Set Static Folder
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
// ... Cross-Origin Resource Sharing
const cors = require("cors");
app.use(cors());

// __ROUTES__
const ItemRoutes = require("./routes/item-routes");
app.use("/api/v1/items", ItemRoutes);

// __ERROR MIDDLEWARE__
const notFoundMiddleware = require("./middleware/not-found");
app.use(notFoundMiddleware);
const errorHandlerMiddleware = require("./middleware/error-handler");
app.use(errorHandlerMiddleware);

// __CONNECTION__
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log(`Server listening in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
// handle unhandled promise rejections
process.on("unhandledRejection", (error, promise) => {
  console.log(`Error: ${error.message}`.red);
  // close server & exit process
  server.close(() => process.exit(1));
});

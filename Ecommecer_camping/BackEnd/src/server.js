const express = require("express");
const bodyParser = require("body-parser");
const initWebRoutes = require("./api/routes/index.js");
const cookieParser = require("cookie-parser");
const configCors = require("./config/cors");

// const morgan =z require("morgan");

require("./config/redis.js"); // Call function
require("dotenv").config();

const app = express();
//config cors
configCors(app);

// Middleware
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

//file retrieve
// declare PORT
let PORT = process.env.PORT || 5000;
// start server
app.listen(PORT, () => {
  //callback
  console.log(`Service is running at PORT: ${PORT}`);
  // console.log(`Service is running at http://localhost:${PORT}/api`);
});

// Connect to database

// Start api
initWebRoutes(app);

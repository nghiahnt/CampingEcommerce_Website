"use strict";
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../../config/config.js").config[env];

const db = {};
let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
  // No existing environment variable.
} else {
  const {
    username,
    password,
    database,
    host,
    dialect,
    dialectModule,
    logging,
    port,
  } = config;
  sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: dialect,
    port: 3306,
  });
}

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
  config.password = "";
  console.log(config);
}

console.log("process.env.DB_SYNC: ", process.env.DB_SYNC);
if (process.env.DB_SYNC == "true") {
  console.log("DB is being synced...");
  sequelize
    .sync({
      alter: true,
      // force: true,
      logging: console.log,
    })
    .then((data) => {
      console.log("DB is successfully synced.");
    })
    .catch((e) => {
      console.log("Error when syncing: ", e);
    });
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });
  console.log("Load models successfully");

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
console.log('Estalished the relationship successfully!');

db.sequelize = sequelize;
db.Sequelize = Sequelize;
console.log("Add sequelize successfully!");

module.exports = db;

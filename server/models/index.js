const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const db = require('../config/mongoConfig.json');

const CONFIG = db[process.env.NODE_ENV || "development"];

const url = `mongodb://${CONFIG.host}:${CONFIG.port}/${CONFIG.database}`

mongoose.connect(url)
  .catch((err) => {
    console.log('connection failed');
    process.exit(1);
  })
const models = {};
const basename = path.basename(__filename);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file));
    models[model.modelName] = model;
  });

module.exports = models;

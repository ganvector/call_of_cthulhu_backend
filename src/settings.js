const Path = require('path');

module.exports.settings = {
  LOG_PATH: process.env.LOG_PATH || Path.resolve(__dirname, '../log'),
  PORT: process.env.PORT || 3000,
  PUBLIC_PATH: process.env.PUBLIC_PATH || Path.resolve(__dirname, '../public'),
  MONGO_ADDRESS: process.env.MONGO_ADDRESS || 'mongodb://localhost:8190',
};

const { Server } = require('./server');
const { Mongo } = require('./mongo');

const app = new Server();
const database = new Mongo();

database.connect();
app.start();
const log = app.log;

module.exports = { app, log };

const { Server } = require('./server');

const app = new Server();
app.start();
const log = app.log;

module.exports = { app, log };

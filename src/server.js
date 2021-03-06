const Path = require('path');

const BodyParser = require('body-parser');
const Express = require('express'); // das server
const Morgan = require('morgan'); // logs da chamada http
const Winston = require('winston'); // logs em arquivos e no console

const { settings } = require('./settings');
const { initRoutes } = require('./api');

class Server {
  constructor() {
    this.app = Express();
  }

  start() {
    this._setConfig();
    this._setLogger();
    this._setRoutes();
    this.app.listen(settings.PORT);
    this.log.info(`Server iniciado na porta ${settings.PORT}`);
  }

  _setConfig() {
    this.app.use('/', Express.static(settings.PUBLIC_PATH));
    this.app.use(BodyParser.json());
  }

  _setRoutes() {
    initRoutes(this.app);
  }

  _setLogger() {
    this.log = new Winston.createLogger({
      format: new Winston.format.simple(),
      transports: [
        new Winston.transports.File({
          level: 'info',
          filename: Path.resolve(settings.LOG_PATH, 'server.log'),
          handleExceptions: true,
          json: true,
          maxsize: 5242880, // 5MB
          maxFiles: 5,
          colorize: false,
        }),
        new Winston.transports.Console({
          level: 'debug',
          handleExceptions: true,
          json: false,
          colorize: true,
        }),
      ],
    });
    const morganOptions = {
      stream: {
        write: (message) => {
          // console.log(message);
          this.log.info(message);
        },
      },
    };

    this.app.use(Morgan('combined', morganOptions));
  }
}

module.exports.Server = Server;

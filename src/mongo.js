const mongoose = require('mongoose');

const { settings } = require('./settings');

class Mongo {
  connect() {
    mongoose.connect(settings.MONGO_ADDRESS, { useNewUrlParser: true, useUnifiedTopology: true }).then((con, err) => {
      if (err) {
        console.log(err);
        process.exit();
      }
      console.log('Mongo conectado!');
    });
    // this.connection = mongoose.connection;

    // this.connection.on('error', console.log.bind(console, 'connection error:'));
    // this.connection.once('open', () => {
    //   console.log('Mongo conectado!');
    // });
  }

  disconnect() {
    return this.connection.close();
  }
}

module.exports.Mongo = Mongo;

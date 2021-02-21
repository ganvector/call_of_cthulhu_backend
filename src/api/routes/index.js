const { getPersonagem } = require('../controllers/personagens');

module.exports.initRoutes = (app) => {
  app.get('/getPersonagem', getPersonagem);
};

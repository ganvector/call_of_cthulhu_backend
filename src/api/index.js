const { getPersonagem } = require('../controllers/personagens');
const personagemRoutes = require('./personagem');

module.exports.initRoutes = (app) => {
  app.get('/personagem', personagemRoutes);
  app.get('/getPersonagem', getPersonagem);
};

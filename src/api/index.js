module.exports.initRoutes = (app) => {
  app.use('/api/personagem', require('./routes/personagem'));
};

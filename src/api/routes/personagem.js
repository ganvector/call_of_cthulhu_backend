const PersonagemController = require('../controllers/personagens');

const router = require('express').Router();

router.get('/getPersonagem', PersonagemController.getPersonagem);

module.exports = router;

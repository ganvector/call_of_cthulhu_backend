const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PersonagemSchema = new Schema({
  nome: { type: String, required: true },
  jogador: { type: String, required: true },
});

const Personagem = mongoose.model(
  'Personagem',
  PersonagemSchema,
  'personagens'
);

module.exports.Personagem = Personagem;

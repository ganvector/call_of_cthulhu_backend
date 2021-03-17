const { Personagem } = require('../../models');

class PersonagemController {
  static getPersonagem(req, res) {
    const personagemBase = {
      nome: `Merrik d'Milliard`,
      jogador: 'V',
      nacionalidade: 'Canadense',
      ocupacao: 'Instrutor de esgrima',
      residencia: 'Estados Unidos',
      genero: 'Masculino',
      idade: '32',
      backstory: 'Instrutor',
    };
    const personagem = new Personagem(personagemBase);
    res.send({ sucesso: true, personagem });
  }
}

module.exports = PersonagemController;

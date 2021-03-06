const { Personagem } = require('../../models');

class PersonagemController {
  static getPersonagem(req, res) {
    const personagemBase = {
      nome: `Merrik d'Milliard`,
      jogador: 'V',
      nacionalidade: 'Canadense',
      ocupacao: 'instrutor de esgrima',
      residencia: 'Estados Unidos',
    };
    const personagem = new Personagem(personagemBase);

    res.send({ sucesso: true, personagem });
  }
}

module.exports = PersonagemController;

module.exports = {
  getPersonagem: (req, res) => {
    const personagemBase = {
      nome: `Merrik d'Milliard`,
      jogador: 'V',
      nacionalidade: 'Canadense',
      ocupacao: 'instrutor de esgrima',
      residencia: 'Estados Unidos',
    };
    const personagem = new Personagem(personagemBase);

    res.send({ sucesso: true, personagem });
  },
};

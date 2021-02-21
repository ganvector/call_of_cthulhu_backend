module.exports = {
  getPersonagem: (req, res) => {
    const personagem = { nome: `Merrik d'Milliard`, jogador: 'V' };

    res.send({ sucesso: true, personagem });
  },
};

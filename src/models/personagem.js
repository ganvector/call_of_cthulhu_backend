const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AtributosSchema = new Schema(
  {
    aparencia: { type: Number, required: true, default: 30 },
    destreza: { type: Number, required: true, default: 30 },
    constituicao: { type: Number, required: true, default: 30 },
    educacao: { type: Number, required: true, default: 40 },
    forca: { type: Number, required: true, default: 30 },
    inteligencia: { type: Number, required: true, default: 40 },
    poder: { type: Number, required: true, default: 30 },
    tamanho: { type: Number, required: true, default: 40 },
  },
  {
    _id: false,
    _v: false,
  }
);

const PericiaItemSchema = new Schema(
  {
    nome: { type: String, required: true, default: '' },
    valor: { type: Number, required: true },
    novoNivel: { type: Boolean, required: true, default: false },
  },
  { _id: false, _v: false }
);

const PericiaSchema = new Schema(
  {
    valor: { type: Number, required: true },
    novoNivel: { type: Boolean, required: true, default: false },
  },
  { _id: false, _v: false }
);

const PericiasOcupacionaisSchema = new Schema(
  {
    antropologia: { type: PericiaSchema, required: true, default: { valor: 1 } },
    armasDeFogoPistolas: { type: PericiaSchema, required: true, default: { valor: 20 } },
    armasDeFogoRifles: { type: PericiaSchema, required: true, default: { valor: 25 } },
    arqueologia: { type: PericiaSchema, required: true, default: { valor: 1 } },
    arremessar: { type: PericiaSchema, required: true, default: { valor: 20 } },
    arteOficio: [{ type: PericiaItemSchema, required: true, default: { valor: 5 } }],
    avaliacao: { type: PericiaSchema, required: true, default: { valor: 5 } },
    cavalgar: { type: PericiaSchema, required: true, default: { valor: 5 } },
    charme: { type: PericiaSchema, required: true, default: { valor: 15 } },
    chaveiro: { type: PericiaSchema, required: true, default: { valor: 1 } },
    ciencia: [{ type: PericiaItemSchema, required: true, default: { valor: 1 } }],
    consertosEletricos: { type: PericiaSchema, required: true, default: { valor: 10 } },
    consertosMecanicos: { type: PericiaSchema, required: true, default: { valor: 5 } },
    contabilidade: { type: PericiaSchema, required: true, default: { valor: 5 } },
    direito: { type: PericiaSchema, required: true, default: { valor: 5 } },
    dirigirAuto: { type: PericiaSchema, required: true, default: { valor: 1 } },
    disfarce: { type: PericiaSchema, required: true, default: { valor: 5 } },
    encontrar: { type: PericiaSchema, required: true, default: { valor: 25 } },
    escutar: { type: PericiaSchema, required: true, default: { valor: 20 } },
    escalar: { type: PericiaSchema, required: true, default: { valor: 20 } },
    //TODO transferir depois para validador, default metade da destreza
    esquivar: { type: PericiaSchema, required: true, default: { valor: 1 } },
    labia: { type: PericiaSchema, required: true, default: { valor: 5 } },
    intimidacao: { type: PericiaSchema, required: true, default: { valor: 15 } },
    historia: { type: PericiaSchema, required: true, default: { valor: 5 } },
    furtividade: { type: PericiaSchema, required: true, default: { valor: 20 } },
    //TODO transferir para validador, default educacao
    linguaNativa: { type: PericiaSchema, required: true, default: { valor: 1 } },
    linguaOutra: [{ type: PericiaItemSchema, required: true, default: { valor: 1 } }],
    lutar: [{ type: PericiaItemSchema, required: true, default: { valor: 1 } }],
    medicina: { type: PericiaSchema, required: true, default: { valor: 1 } },
    cthulhuMythos: { type: PericiaSchema, required: true, default: { valor: 0 } },
    mundoNatural: { type: PericiaSchema, required: true, default: { valor: 10 } },
    natacao: { type: PericiaSchema, required: true, default: { valor: 20 } },
    navegacao: { type: PericiaSchema, required: true, default: { valor: 10 } },
    nivelDeCredito: { type: PericiaSchema, required: true, default: { valor: 1 } },
    ocultismo: { type: PericiaSchema, required: true, default: { valor: 5 } },
    operarMaquinario: { type: PericiaSchema, required: true, default: { valor: 1 } },
    persuasao: { type: PericiaSchema, required: true, default: { valor: 10 } },
    pilotar: [{ type: PericiaItemSchema, required: true, default: { valor: 1 } }],
    prestidigitacao: { type: PericiaSchema, required: true, default: { valor: 10 } },
    primeirosSocorros: { type: PericiaSchema, required: true, default: { valor: 30 } },
    psicanalise: { type: PericiaSchema, required: true, default: { valor: 1 } },
    psicologia: { type: PericiaSchema, required: true, default: { valor: 5 } },
    saltar: { type: PericiaSchema, required: true, default: { valor: 20 } },
    rastrear: { type: PericiaSchema, required: true, default: { valor: 10 } },
    sobrevivencia: { type: PericiaSchema, required: true, default: { valor: 10 } },
    usarBiblioteca: [{ type: PericiaItemSchema, required: true, default: { valor: 1 } }],
  },
  { _id: false, _v: false }
);

const PersonagemSchema = new Schema({
  nome: { type: String, required: true },
  jogador: { type: String, required: true },
  ocupacao: { type: String, required: true, default: '' },
  idade: { type: Number, required: true },
  genero: { type: String, required: true },
  residencia: { type: String, required: true, default: '' },
  nacionalidade: { type: String, required: true, default: '' },
  atributos: { type: AtributosSchema, required: true, default: {} },
  sanidade: { type: Number, required: true, default: 30 },
  sorte: { type: Number, required: true, default: 40 },
  pontosDeMagia: { type: Number, required: true, default: 7 },
  morrendo: { type: Boolean, required: true, default: false },
  inconsciente: { type: Boolean, required: true, default: false },
  lesaoGrave: { type: Boolean, required: true, default: false },
  insanidadeIndefinida: { type: Boolean, required: true, default: false },
  insanidadeTemporaria: { type: Boolean, required: true, default: false },
  movimento: { type: Number, required: true, default: 7 },
  periciasOcupacionais: { type: PericiasOcupacionaisSchema, required: true, default: {} },
  //TODO limitar esse campo a 280 caracteres
  backstory: { type: String, required: true, default: '' },
  armas: [],
});

const Personagem = mongoose.model('Personagem', PersonagemSchema, 'personagens');

module.exports.Personagem = Personagem;

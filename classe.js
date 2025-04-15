class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'um ataque desconhecido';
          break;
      }
  
      console.log('O ${this.tipo} atacou usando ${ataque}');
    }
  }
  
  // Exemplos de uso:
  const heroi1 = new Heroi('Arthus', 30, 'guerreiro');
  const heroi2 = new Heroi('Merlin', 150, 'mago');
  const heroi3 = new Heroi('Lee', 160, 'monge');
  const heroi4 = new Heroi('Hanzo', 25, 'ninja');
  
  heroi1.atacar(); // O guerreiro atacou usando espada
  heroi2.atacar(); // O mago atacou usando magia
  heroi3.atacar(); // O monge atacou usando artes marciais
  heroi4.atacar(); // O ninja atacou usando shuriken
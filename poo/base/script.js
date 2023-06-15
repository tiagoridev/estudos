class Carroceria{
  tipo = 'urbano'; // variavel com valor comum a todos os objetos.
  constructor(montadora, modelo, chassi){
    this.montadora = montadora;
    this.model = modelo;
    this.chassi = chassi
  }
}

let empresas = [
        {progresso: new Carroceria('Marcopolo', 'torino', 'OF-1724L')}, //instância
        {epa: new Carroceria('Marcarello', 'Gran Via', 'OF-1721L')}, //instância
        {aparecida: new Carroceria('Caio', 'Apache Vip V', 'OF-1726L')} //instância
]

console.log(empresas)
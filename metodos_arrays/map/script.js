
// MAP, mapeia, percorre TODO o ARRAY e faz algo que determinamos com TODOS os ITENS/OBJETOS, atende nossa condição.
// MAP não modifica o ARRAY original, ele MAPEIA O ARRAY, atende a condição e o MAP devolve um NOVO ARRAY

const datas = [
	{empresa: 'Progresso', linha: 'MP11', frota: 4, ativa: true},
	{empresa: 'Progresso', linha: 'MP18', frota: 5, ativa: false},
	{empresa: 'Util', linha: 'RJ226', frota: 4, ativa: true},
	{empresa: 'Barrinha', linha: 'P434', frota: 1, ativa: false},
	{empresa: 'Fênix', linha: 01, frota: 6, ativa: true} 
]

//Quero que RETORNE o nome de CADA empresa/prestadora.
const nomePrestadoras = datas.map( (prestadora) => {
  return 'Prestadora: ' + prestadora.empresa  // condição = Retornar o PRESTADORA + nome da empresa.
})
console.log(nomePrestadoras)
//Vai retornar o nome de todas as empresas, um ARRAY com 5 itens. 


// QUERO que MAPEIA os ITENS e aqueles que possuiem FROTA menor que 5, tenha ACRÉSCIMO DE 2 VEÍCULOS
const qtdFrota = datas.map((prestadora) => {
  if(prestadora.frota < 5) { //condição = verifica se o objeto tem frota menor que 5
    prestadora.frota += 2 // se tiver frota menor que 5, vai acrescentar o valor atual + 2
  } // Se o item/objeto não atender a condição anterior, ele passará direto para o RETURN abaixo.

  return { // retorna um novo array
    empresa: prestadora.empresa, // esse novo array terá, empresa: nome da prestadora
    novaFrota: prestadora.frota // esse novo array terá q quantidade da nova frota.
  }
})
console.log(qtdFrota) // exibe o novo array no console.


//Quero add uma nova propriedade em cada OBJETO.
const novoItem = datas.map((prestadora) => { 
  return {...prestadora, cidade: 'Mendes'} //Propriedade a ser add.
})
console.log(novoItem)

// REDUCE, reduz nosso ARRAY, fazemos alguma coisa e devolvemos um ARRAY, por exemplo a soma de itens, valores.
// REDUZ algo.
// PARAMETROS diferentes, o primeiro é o indice/contador, o segundo é cada item/objeto.



const datas = [
	{empresa: 'Progresso', linha: 'MP11', frota: 4, ativa: true},
	{empresa: 'Progresso', linha: 'MP18', frota: 5, ativa: false},
	{empresa: 'Util', linha: 'RJ226', frota: 4, ativa: true},
	{empresa: 'Barrinha', linha: 'P434', frota: 1, ativa: false},
	{empresa: 'Fênix', linha: 01, frota: 6, ativa: true} 
]


// Quero saber o total da FROTA informada ACIMA
const somarFrota = datas.reduce((total, prestadora) => { // Parametros diferentes, o primeiro é indice/contador, o segundo o item.
  return total += prestadora.frota
}, 0) // 0 é o valor inicial da contagem.
console.log(somarFrota)
// Retorna valor 20.
// SOME verifica se tem ALGUM item dentro do nosso ARRAY que atende nossa condição.
// SOME retorna valor BOOLEAN (TRUE ou FALSE)


const datas = [
	{empresa: 'Progresso', linha: 'MP11', frota: 4, ativa: true},
	{empresa: 'Progresso', linha: 'MP18', frota: 5, ativa: false},
	{empresa: 'Util', linha: 'RJ226', frota: 4, ativa: true},
	{empresa: 'Barrinha', linha: 'P434', frota: 1, ativa: false},
	{empresa: 'Fênix', linha: 01, frota: 6, ativa: true} 
]

const frotaMaior = datas.some((prestadora) => {
  return prestadora.frota >= 5
})
console.log(frotaMaior)
//retorna TRUE.

// EVERY verifica se TODOS os itens do ARRAY atendem a condição.
// EVERY  retorna valor BOOLEAN (TRUE ou FALSE).

const datas = [
	{empresa: 'Progresso', linha: 'MP11', frota: 4, ativa: true},
	{empresa: 'Progresso', linha: 'MP18', frota: 5, ativa: false},
	{empresa: 'Util', linha: 'RJ226', frota: 4, ativa: true},
	{empresa: 'Barrinha', linha: 'P434', frota: 1, ativa: false},
	{empresa: 'Fênix', linha: 01, frota: 6, ativa: true} 
]

const todasEmpresas = datas.every((prestadora) => {
  return prestadora.empresa === '' // Vai verificar se todos os ITENS do ARRAY estão VAZIOS
})
console.log(todasEmpresas)
//Retorna FALSE pois, todos estão preenchidos.
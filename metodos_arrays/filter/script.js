//FILTER recebe uma FUNÇÃO ANONIMA ou uma ARROW FUNCTION.
// Faz um FILTRO em TODOS os itens do ARRAY, diferente do FIND.
// Ele retorna TODOS os itens que ATENDEM minha condição.


const datas = [
	{empresa: 'Progresso', linha: 'MP11', frota: 4, ativa: true},
	{empresa: 'Progresso', linha: 'MP18', frota: 5, ativa: false},
	{empresa: 'Util', linha: 'RJ226', frota: 4, ativa: true},
	{empresa: 'Barrinha', linha: 'P434', frota: 1, ativa: false},
	{empresa: 'Fênix', linha: 01, frota: 6, ativa: true} 
]


//QUero que RETORNE FILTRANDO somente as prestadoras ATIVAS.
const prestadoras = datas.filter((prestadora) => {
	return prestadora.ativa 
	// condição = retornar prestadoras com linhas ATIVAS, não preciso colocar === true, pois ja esta implicito, 
	// deveria colocar somente se fosse false.
})
console.log(prestadoras)
//Vai retornar o primeiro item, o terceiro item e o ultimo item.
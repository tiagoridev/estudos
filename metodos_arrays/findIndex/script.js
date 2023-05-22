//FINDINDEX RETORNA a posição do ITEM/OBJETO que atende a CODIÇÃO PASSADA.
// Pode ser usado function anonima ou ARROW FUNCTION
//Identificamos a POSIÇÃO DO ITEM no ARRAY e apartir dae, com esta informação podemos manipular,modificar outros itens do objto do array


const datas = [
	{empresa: 'Progresso', linha: 'MP11', frota: 4, ativa: true},
	{empresa: 'Progresso', linha: 'MP18', frota: 5, ativa: false},
	{empresa: 'Util', linha: 'RJ226', frota: 4, ativa: true},
	{empresa: 'Barrinha', linha: 'P434', frota: 1, ativa: false},
	{empresa: 'Fênix', linha: 01, frota: 6, ativa: true} 
]

//Quero que RETORNE a posição da PRESTADORA que opera a linha P434.
let indexPrestadora = datas.findIndex( (prestadora) => {
	return prestadora.linha === 'P434'
})
console.log(indexPrestadora) //Vai retornar posição 3, onde esta localizado a prestadora da linha P434

console.log(datas[indexPrestadora].empresa = 'EPA') // Com o indice/posição ja localizada no ARRAY (posição 3) no objeto, Barrinha será substituida por EPA

console.log(datas[indexPrestadora]) // Exibe o objeto ja com a troca da Barrinha pela EPA.
// {empresa: 'EPA', linha: 'P434', frota: 1, ativa: false}
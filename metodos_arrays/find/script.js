//Vai encontrar o PRIMEIRO ITEM/OBJETO (dentro do array) que satisfaça a condição passada.
// FIND vai retornar o PRIMEIRO OBJETO/ITEM que satisfação minha condição.
// A condição será passada de acordo com o parametro.
// Em métodos ARRAYS podemos passar parametros: Cada item, posição, Array Completo.

const datas = [
	{empresa: 'Progresso', linha: 'MP11', frota: 4, ativa: true},
	{empresa: 'Progresso', linha: 'MP18', frota: 5, ativa: false},
	{empresa: 'Util', linha: 'RJ226', frota: 4, ativa: true},
	{empresa: 'Barrinha', linha: 'P434', frota: 1, ativa: false},
	{empresa: 'Fênix', linha: 01, frota: 6, ativa: true} 
]

// Quero que ele RETORNE uma linha que esta INATIVA no array DATAS.
let prestadoras = datas.find((prestadora) => {
	return prestadora.ativa === false // condição = retornar linha inativa (false).
})
console.log(prestadoras) // vai retornar somente o segundo objeto, pois foi o primeiro que atendeu minha condição.


// Quero que RETORNE a prestadora coma frota maior ou igual a 5
//LEMBRANDO que: FIND RETORNA o primeiro item que satisfação minha condição.
let maiorFrota = datas.find((prestadora) => {
	return prestadora.frota >= 5 && prestadora.ativa === true// condição = retornar a linha com frota maior ou igual a 5 e que esteja ativa.
})
console.log(maiorFrota) // vai retornar o ultimo item, pois atende a condição com frota 6 e permanece ativa.
function sortear(){ // Math.floor tira a dizima
  return Math.floor(Math.random() * 10) // Math.random ativa o método, * 10 será sorteado número entre 0 e 10
}
var numero = sortear()



// console.log(sortearIntervalo(5, 10));
// console.log(sortearIntervalo(100, 101))
// console.log(sortearIntervalo(40, 50))

// EXPLICAÇAO 2
// var numerosDigitados = [15, 10, 4, 1, 5, 9]
// const menorNum = Math.min(...numerosDigitados)
// const maiorNum = Math.max(...numerosDigitados)
// console.log(`O menor número é ${menorNum} e o maior é ${maiorNum}`)
// console.log(sortearIntervalo(menorNum, maiorNum))


// EXPLICAÇÃO 1
function sortearIntervalo(a, b){ // função do sorteio
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

var numerosDigitados = [15, 10, 4, 1, 5, 9]  // Recebo os numeros digitados
const menorNum = Math.min(...numerosDigitados) // extraio o menor numero
const maiorNum = Math.max(...numerosDigitados)  // extraio o maior numero
var arraySorteados = [] // crio um array vazio p receber os numeros sorteados

for (var i = 0; i < numerosDigitados.length; i++){ // crio meu loop do sorteio
    var sorteados = sortearIntervalo(menorNum, maiorNum) // cria a variavel que recebe os numeros sorteados

    if (!arraySorteados.includes(sorteados)) { // verifica se o num sorteado ja existe dentro do array.
      arraySorteados.push(sorteados); // se não existir, add o numero no array
    } else { // se ele existir
     sorteados = sortearIntervalo(menorNum, maiorNum) // a variavel receberá um novo sorteio
     arraySorteados.push(sorteados); // e add na variavel num sorteados.
    }
}
console.log(`${arraySorteados}`) // exibe os numeros sorteados.

// numerosDigitados.forEach((numero) => {
//   if(arraySorteados.includes(numero)){
//     console.log(`${numero} está presente no array`)
//   } else {
//     console.log(`${numero} NÃO está presente no array`)
//   }
// })


// function compararNumeros(numerosDigitados, arraySorteados){

// }




let numeroLinha = '001';
const consultar = document.querySelector('button')
let etapaAtual = 0;


function procurar(){
let etapa = linhas[etapaAtual];
let linhaCandidato = etapa.prestadoras.filter((prestadora) => {
    if(prestadora.linha === numeroLinha){
        return true;
    } else {
        return false;
    }
})
    // console.log (`A linha é ${linhaCandidato}`)
    linhaCandidato.forEach((candidato) => {
        console.log(`Linha ${candidato.linha} / Prestadora ${candidato.empresa} / Trajeto ${candidato.trajeto}`);
    });
}



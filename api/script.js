const cep = document.querySelector('#cep')
let btn = document.querySelector('#btn');

cep.addEventListener('blur', (event) => {
    event.preventDefault();
    let Cep = document.querySelector('#cep');
    let cepValor = Cep.value.replace("-",""); // cep tem q ser sem o -, substitui ele por vazio

    fetch(`http://viacep.com.br/ws/${cepValor}/json/`) // end da API que será feito a busca
    .then((response) => { // response é a resposta da API
        response.json().then((data) => { //.json transforma a resposta em um arquivo .json(necessário)
        // data é como se estivesse acessando o array dos dados retornados pelos correios 

           console.log(data.localidade) // .localidade, entra dentro do array, imprimindo somente a localidade.
           console.log(data) // .localidade, entra dentro do array, imprimindo somente a localidade
          
           document.querySelector('#bairro').value = data.bairro; // exibe na tela o bairro
           document.querySelector('#ddd').value = data.ddd; // exibe na tela o ddd
           document.querySelector('#localidade').value = data.localidade; // exibe na tela a localidade
           document.querySelector('#logradouro').value = data.logradouro; // exibe na tela logradouro
        })
    })
})


// https://newsapi.org/v2/everything?domains=wsj.com&apiKey=56505a13f8014b549e4eb806b575c4a9

async function addPost(){

  const postArea = document.querySelector('.post') // seleciona a área


  try{ // try catch  caso de algum erro na requisição da API
    let response = await fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=56505a13f8014b549e4eb806b575c4a9') // url da api
    let news = await response.json(); // converte o retorno da API para JSON
    

    if(news.articles.length > 0){ // Verifica se qtd de artigos é maior q 0
      postArea.innerHTML = ''; // caso seja, limpa a tela

      for (let indice in news.articles){ // e inicia o loop em cada item do array
        let title = document.createElement('h2') // cria o elemento subtitulo do post
        title.innerText = news.articles[indice].title; // preenche o subtitulo com a inf da API
        postArea.appendChild(title) // o subtitulo e add como filho na área de postagem

        let text = document.createElement('p')
        text.innerText = news.articles[indice].description;
        postArea.appendChild(text)
      }

    } else { // caso a qtd de artigos for menor ou igual a 0
      postArea.innerHTML = 'Nenhum post para exibir' // informar q não a post a ser exibido
    }
  } catch(error){ // ligado ao TRY, informa caso haja erro na API.
    postArea.innerHTML = 'Erro na API'; // Exibe a msg na tela.
    console.error(error); // exibi no console.
  } 
}
addPost()

// API https://jsonplaceholder.typicode.com/posts

async function readPost(){ // ASYNC  - Ativa o await na função 
  
  let postArea = document.querySelector('.post')
  postArea.innerHTML = 'Carregando...'

  let response = await fetch('https://jsonplaceholder.typicode.com/posts')
  let json = await response.json();

  if(json.length > 0){
    postArea.innerHTML = '';

    for( let i in json){ // vai dar um Loop em cada um dos POST
      let title = document.createElement('h1') // cria o elemento
      title.innerText = json[i].title; // define o q estará escrito no elemento
      postArea.appendChild(title) // informe onde ele será add, será filho de quem.

      let text = document.createElement('p') // cria o elemento
      text.innerText = json[i].body;  // define o q estará escrito no elemento
      postArea.appendChild(text) // informe onde ele será add, será filho de quem.
    }

  } else {
    postArea.innerHTML = 'Nenhum post para exibir'
  }

}

readPost()
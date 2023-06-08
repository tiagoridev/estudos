let totalSlides = document.querySelectorAll('.slider-item').length;
let currentSlide = 0 // slide atual, começa pelo slide 0.


document.querySelector('.slider-width').style.width = `calc(100vw * ${totalSlides})`
document.querySelector('.slider-controls').style.height = 
  `${document.querySelector('.slider').clientHeight}px`;

  function goPrev(){
    currentSlide--; // vai pegar o slide atual e voltar 1 (ou seja, menos 1)
    if(currentSlide < 0){ // se o slide atual for menor q 0
      currentSlide = totalSlides - 1; // ele vai voltar para o ultimo
    }
  updateMargin(); // atualiza a margin, p o slide rodar, lembre-se o slide se movimento pela margin da div pai.
  }

  function goNext(){
    currentSlide++; // vai pegar o slide atual somar 1 (ou seja, próximo slide)
    if(currentSlide > (totalSlides - 1)){ // se o slide atual for maior que a qtd de slides, lembre-se a contage começa em 0.
      currentSlide = 0
  }
  updateMargin(); // atualiza a margin, p o slide rodar, lembre-se o slide se movimento pela margin da div pai.
}

//FUNÇÃO PARA FAZER A DIV SE MOVIMENTAR, COM BASE NAS CONDIÇÕES de goPrev e goNext
 function updateMargin(){
  let sliderItemWidth = document.querySelector('.slider-item').clientWidth
  let novaMargem = (currentSlide * sliderItemWidth); //o slide se movimento de acordo com o tamanho de cada item.
  document.querySelector('.slider-width').style.marginLeft = `-${novaMargem}px`;// aqui add o novo tamanho de tela com base no calculo anterior, lemnbrando que é valor negativo mesmo, pois o slides desliza p a esquerda.
  }

 setInterval(goNext, 2000) //faz slide rodar automático, 1° nome da função a ser invocada, 2° tempo em milsegundos que vai ser executada
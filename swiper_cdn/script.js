const swiper = new Swiper('.swiper-hero', {
  // Optional parameters
  // slidesPerView: 1.2, //qts slides aparecem na tela
  // spaceBetween: 100, // espaço entre os slides
  direction: 'horizontal', 
  speed: 1000,
  // spaceBetween: 100, 
  loop: true,
  effect: 'slide', // é o padrão  
  autoplay:{
    delay: 2000,
    disableOnInteraction: false, //mantém autoplay mesmo com interação manual
  },

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   // clickable: true // ativa nav pelas bolinhas, padrão false
  // },

 // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  
});
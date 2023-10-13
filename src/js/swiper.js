const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    },
  
  autoplay: {
   delay: 1000,
    },
  
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});
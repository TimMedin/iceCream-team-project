const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  

  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    

    fadeEffect: {
        crossFade: true
      },



      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
  });
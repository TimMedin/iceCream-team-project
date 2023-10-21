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
   delay: 2000,
    },
  
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('toggleButton');
  var container = document.getElementById('container');
  var closeBtn = document.getElementById('closeBtn');
  var isOpen = false;

  button.addEventListener('click', function() {
    if (isOpen) {
      container.classList.add('hidden');
      isOpen = false;
    } else {
      container.classList.remove('hidden');
      isOpen = true;
    }
  });
  closeBtn.addEventListener('click', function() {
    if (isOpen) {
      container.classList.add('hidden');
      isOpen = false;
    } else {
      container.classList.remove('hidden');
      isOpen = true;
    }
  });
});

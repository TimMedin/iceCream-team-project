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

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.1] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

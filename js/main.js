const swiper = new Swiper('.hero__swiper', {
  loop: true,

  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  },

});

const swiper2 = new Swiper('.spacial__swiper', {
  breakpoints: {
    120: {
      slidesPerView: 1,
    },
    684: {
      slidesPerView: 2,
    },
    951: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  speed: 300,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 32,
});

const swiper3 = new Swiper('.useful__swiper', {
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    684: {
      slidesPerView: 2,
    },
    951: {
      slidesPerView: 3,
    },
    1208: {
      slidesPerView: 2,
    },
  },
  speed: 300,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 32,
});


// btn more

// const btnMore = document.querySelector('.rating__btn');
// const ratingItems = document.querySelectorAll('.rating__grid__item');

// btnMore.addEventListener('click', () => {
//   ratingItems.forEach(el => {el.classList.add('rating__grid__item--visible') });
//   btnMore.closest('.raiting-bottom').classList.add('.raiting-bottom--hidden');
// });

const btnMore = document.querySelector('.rating__btn');
const ratingItems = document.querySelectorAll('.rating__grid__item');

console.log('btnMore', btnMore);
btnMore.addEventListener('click', () => {
  ratingItems.forEach(el => { el.classList.add('rating__grid__item--visible')});
    btnMore.classList.add('raiting-bottom--hidden');
})




// burger

var tw = gsap.timeline();


let burger = document.querySelector('.burger');
let menu = document.getElementById('burger-menu');
let menuLinks = menu.querySelectorAll('.bottom-1-nav-item');
let burgerClose = document.querySelector('.burger-close');

burger.addEventListener('click',
  function () {
    var tw = gsap.timeline();

    menu.classList.toggle('bottom-1-nav--active');
    burgerClose.classList.toggle('burger-close-none');
    document.body.classList.toggle('stop-scroll');

    tw.from(".bottom-1-nav--active", {
      duration: 2,
      opacity: 0,
    }, ".bottom-1-nav--active");

    tw.from(".burger-close", {
      duration: 2,
      opacity: 0,
    }, ".bottom-1-nav--active");
  });


menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    menu.classList.remove('bottom-1-nav--active');

    document.body.classList.remove('stop-scroll');
    burgerClose.classList.add('burger-close-none');
  });
});

burgerClose.addEventListener("click", function () {
  menu.classList.remove("bottom-1-nav--active");
  burgerClose.classList.add('burger-close-none');
  document.body.classList.remove('stop-scroll');
})

// select

const element = document.querySelector('.top-1-select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  position: 'bottom'
});

const el = document.querySelector('.bottom-2-select');
const choice = new Choices(el, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  position: 'bottom'
});

// tooltip


tippy('.question', {
  content: "Реплицированные с зарубежных источников, исследования формируют глобальную сеть.",
});

// form

let phone = document.querySelector("input[type='tel']")
var im = new Inputmask("+7 (999) 999-99-99")
im.mask(phone);
new window.JustValidate('.js-form', {
  colorWrong: '#FF6972',
  rules: {
    name: {
      required: true
    },
    email: {
      required: true,
      email: true
    },
    phone: {
      required: true,
      function: (name, value) => {
        const ph = phone.inputmask.unmaskedvalue();
        return Number(ph) && ph.length === 10;
      }
    },
  },
  messages: {
    name: {
      required: "Вы не ввели имя"
    },
    phone: {
      required: "Вы не ввели телефон",
      function: "Не достаточно количество символов"
    },
    email: {
      required: "Вы не ввели e-mail"
    },
  }
});




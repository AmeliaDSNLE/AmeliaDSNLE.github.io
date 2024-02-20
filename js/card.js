const btnBuy = document.getElementById('buy-click');
const windowBuy = document.getElementById('window-buy');
const btnCall = document.getElementById('call-click');
const windowCall = document.getElementById('window-call');
const btnPicture = document.getElementById('picture-click');
const windowPicture = document.getElementById('window-picture');

const swiper3 = new Swiper('.useful-swiper', {
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    684: {
      slidesPerView: 2,
    },
    951: {
      slidesPerView: 3,
    },
    1208: {
      slidesPerView: 4,
    },
  },
  speed: 300,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 32,
});


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

const modalContainers = document.querySelectorAll('.modal-container');
for (let i = 0; i < modalContainers.length; i++) {
  modalContainers[i].addEventListener('click', (event) => {
    event.modalContainer = true;
  })
}

const modalCovers = document.querySelectorAll('.modal-cover');
for (let i = 0; i < modalCovers.length; i++) {
  modalCovers[i].addEventListener('click', (event) => {
    if (event.modalContainer) {
      return;
    }
    modalCovers[i].classList.add('display-none');
  })
}

// modal 1

btnBuy.addEventListener('click', (event) => {
  windowBuy.classList.remove('display-none');
});

// windowBuy.addEventListener('click', (event) => {
//   });

document.getElementById('close-buy').addEventListener('click', () => {
  windowBuy.classList.add('display-none');
});

// modal 2

btnCall.addEventListener('click', (event) => {
  event.preventDefault();
  windowBuy.classList.add('display-none');
  windowCall.classList.remove('display-none');
});

document.getElementById('close-buy').addEventListener('click', () => {
  windowCall.classList.add('display-none');
});

document.getElementById('close-buy').addEventListener('click', () => {
  windowPicture.classList.add('display-none');
});

document.getElementById('close-buy-2').addEventListener('click', () => {
  windowCall.classList.add('display-none');
})

// modal 3

btnPicture.addEventListener('click', (event) => {
  windowPicture.classList.remove('display-none');
});

document.getElementById('close-buy-3').addEventListener('click', () => {
  windowPicture.classList.add('display-none');
})


// swiper

const swiper4 = new Swiper('.modal-swiper', {
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

  },
  speed: 300,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 32,
});

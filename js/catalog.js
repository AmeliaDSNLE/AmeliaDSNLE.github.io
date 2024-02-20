// tabs

let tabsBtn = document.querySelectorAll('.tabs-btn-item')
let tabsItem = document.querySelectorAll('.catalog-grid');

console.log('tabsBtn', tabsBtn);
if (tabsBtn) {
  tabsBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-btn-item--active') });

      e.currentTarget.classList.add('tabs-btn-item--active');

      tabsItem.forEach(function (element) {
        if (element.dataset.target == path) {
          element.classList.add('catalog-grid--active');
        } else {
          element.classList.remove('catalog-grid--active');
        }
      });

      element.classList.add('tabs-btn-item--active');
    });
  });
}

let tabsBtnMedia = document.querySelectorAll('.tabs-btn-item')
let tabsItemMedia = document.querySelectorAll('.catalog-grid-media');

if (tabsBtnMedia) {
  tabsBtnMedia.forEach(function (element) {
    element.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;

      tabsBtnMedia.forEach(function (btn) { btn.classList.remove('tabs-btn-item--active') });

      e.currentTarget.classList.add('tabs-btn-item--active');

      tabsItemMedia.forEach(function (element) {
        if (element.dataset.target == path) {
          element.classList.add('catalog-grid--active');
        } else {
          element.classList.remove('catalog-grid--active');
        }
      });

      element.classList.add('tabs-btn-item--active');
    });
  });
}

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

const elem1 = document.querySelector('.media-filter-select-1');
const ch1 = new Choices(elem1, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  position: 'bottom'
});

const elem2 = document.querySelector('.media-filter-select-2');
const ch2 = new Choices(elem2, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  position: 'bottom'
});

const elem3 = document.querySelector('.media-filter-select-3');
const ch3 = new Choices(elem3, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  position: 'bottom'
});

const elem4 = document.querySelector('.media-filter-select-4');
const ch4 = new Choices(elem4, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
  position: 'bottom'
});


//

const rangeSlider = document.querySelector(".wrapper__slider");
const fieldNumberFirst = document.querySelector(".range-wrapper__field_first");
const fieldNumberSecond = document.querySelector(".range-wrapper__field_second");
const allFields = [fieldNumberFirst, fieldNumberSecond];

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [30000, 120000],
    connect: true,
    step: 1,
    range: {
      min: 0,
      max: 150000
    }
  });

  rangeSlider.noUiSlider.on("update", (values, handle) => {
    allFields[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let array = [null, null];
    array[i] = value;
    rangeSlider.noUiSlider.set(array);
  };

  allFields.forEach((el, index) => {
    el.addEventListener("change", (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}


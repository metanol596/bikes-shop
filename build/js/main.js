"use strict";

let myMap;
ymaps.ready(init);

function init() {
  myMap = new ymaps.Map('map', {
    center: [59.938635, 30.323118],
    zoom: 17
  });
  const myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
    hintContent: 'ул. Большая Конюшенная, д. 19/8'
  });
  myMap.geoObjects.add(myPlacemark);
}
"use strict";

const phoneInput = document.querySelector('#phone');
const maskOptions = {
  mask: '+7(000)000-00-00'
};
const mask = new IMask(phoneInput, maskOptions);
"use strict";

const openMenuButton = document.querySelector('.page-header__open-menu-button');
const closeMenuButton = document.querySelector('.main-nav__close-menu-button');
const menu = document.querySelector('.main-nav');
const headerBlock = document.querySelector('.page-header--no-js');
const logo = document.querySelector('.page-header__logo-wrap--no-js');
openMenuButton.addEventListener('click', () => {
  menu.classList.add('active');
});
closeMenuButton.addEventListener('click', () => {
  menu.classList.remove('active');
});

const removeNojsClass = () => {
  openMenuButton.classList.remove('page-header__open-menu-button--no-js');
  closeMenuButton.classList.remove('main-nav__close-menu-button--no-js');
  headerBlock.classList.remove('page-header--no-js');
  logo.classList.remove('page-header__logo-wrap--no-js');
  menu.classList.remove('page-header__main-nav--no-js');
  menu.classList.remove('main-nav--no-js');
};

removeNojsClass();
"use strict";

const menuAnchors = document.querySelectorAll('.main-nav a');
menuAnchors.forEach(anchor => {
  anchor.addEventListener('click', evt => {
    evt.preventDefault();
    const blockId = anchor.getAttribute('href');
    document.querySelector(blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
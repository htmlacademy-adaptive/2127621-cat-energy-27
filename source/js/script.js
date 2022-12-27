let nav = document.querySelector('.nav');
let navToggle = document.querySelector('.nav-toggle');

nav.classList.remove('nav--nojs');

navToggle.addEventListener('click', function () {
  if (nav.classList.contains('nav__list--closed')) {
    nav.classList.remove('nav__list--closed');
    nav.classList.add('nav__list--opened');
  } else {
    nav.classList.add('nav__list--closed');
    nav.classList.remove('nav__list--opened');
  }
  if (navToggle.classList.contains('nav-toggle--closed')) {
    navToggle.classList.remove('nav-toggle--closed');
    navToggle.classList.add('nav-toggle--opened');
  } else {
    navToggle.classList.add('nav-toggle--closed');
    navToggle.classList.remove('nav-toggle--opened');
  }
});

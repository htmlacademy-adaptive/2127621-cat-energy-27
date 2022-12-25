/*function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/

let nav = document.querySelector('.nav__list');
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
});

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('nav-toggle--closed')) {
    navToggle.classList.remove('nav-toggle--closed');
    navToggle.classList.add('nav-toggle--opened');
  } else {
    navToggle.classList.add('nav-toggle--closed');
    navToggle.classList.remove('nav-toggle--opened');
  }
});

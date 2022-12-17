function myFunction() {
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

let navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('nav-toggle--close')) {
    navToggle.classList.remove('nav-toggle--close');
    navToggle.classList.add('nav-toggle--opened');
  } else {
    navToggle.classList.add('nav-toggle--close');
    navToggle.classList.remove('nav-toggle--opened');
  }
});

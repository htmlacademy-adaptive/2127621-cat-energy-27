let container = document.querySelector(".example__slider");
document.querySelector(".example__slider-range").addEventListener("input", (e) => {
  container.style.setProperty("--position", `${e.target.value}%`);
});

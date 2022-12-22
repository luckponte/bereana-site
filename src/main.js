import '../node_modules/tw-elements/dist/js/index.min.js';

// control mobile menu functions
let menuOpen = false;
const mobileMenu = document.querySelector("#navbar-default");

document.querySelector("#burger-menu").addEventListener("click", (e) => {
  menuOpen = !menuOpen;

  if (menuOpen) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("block");
  } else {
    mobileMenu.classList.remove("block");
    mobileMenu.classList.add("hidden");
  }
});

document.querySelectorAll(".menu-option").forEach((el) => {
  el.addEventListener("click", (e) => {
    menuOpen = false;
    mobileMenu.classList.remove("block");
    mobileMenu.classList.add("hidden");
  });
});

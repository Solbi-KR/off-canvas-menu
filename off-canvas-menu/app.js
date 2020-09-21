const hamburgerEl = document.querySelector(".hamburger");
const navEl = document.querySelector("nav");
const contentEl = document.querySelector(".content");
const hamburgerBarEl = document.getElementsByTagName("span");
console.log(hamburgerBarEl);

function toggleNav() { 
  hamburgerEl.addEventListener("click", function () {
    navEl.classList.toggle("open");
    contentEl.classList.toggle("shift");
    animateHamburger();

  })
}

function animateHamburger() {
  for (let bar of hamburgerBarEl) {
    bar.classList.toggle("change");
  }
}
toggleNav();
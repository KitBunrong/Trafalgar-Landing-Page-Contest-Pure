// *==== Menu Navigation
const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");

menuBtn.addEventListener("click", () => {
  toggle();
});

function toggle() {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
}

// *==== onClick a-link, hide it
const aLink = document.querySelectorAll(".a-link");
aLink.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    toggle();
  });
});

// *==== Scroll to show shadow
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

// *==== Card Slider Manual/Auto.
var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".slide-btn");
var profile = document.querySelector(".customer-profile");

let currentSlide = 0;

// *== Manual Slider Navigation
var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

document.addEventListener("DOMContentLoaded", manualNav(currentSlide));

const next = () => {
  currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
  manualNav(currentSlide);
};
const pre = () => {
  currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
  manualNav(currentSlide);
};

document.querySelector(".next").addEventListener("click", next);
document.querySelector(".pre").addEventListener("click", pre);

// *== Auto Slider per 10s.
setInterval(() => {
  next();
}, 6000);

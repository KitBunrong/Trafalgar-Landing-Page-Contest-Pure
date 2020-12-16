const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
// const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  toggle();
});
// navbar.addEventListener("scroll", () => {
//   navbar.classList.toggle("sticky", window.scrollY > 0);
// });

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

function toggle() {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
}

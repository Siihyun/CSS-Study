const menu_btn = document.querySelector(".bar_button");
const navbar__menu = document.querySelector(".navbar__menu");
const navbar__icons = document.querySelector(".navbar__icons");

console.log(navbar__menu);
menu_btn.addEventListener("click", (e) => {
  // toggle 없으면 넣고! 있으면 빼고!
  navbar__menu.classList.toggle("active");
  navbar__icons.classList.toggle("active");
});

const button = document.querySelector(".info .metadata .moreBtn");
const title = document.querySelector(".info .metadata .title");

button.addEventListener("click", () => {
  button.classList.toggle("clicked");
  title.classList.toggle("clamp");
});

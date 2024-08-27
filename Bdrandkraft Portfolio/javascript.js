let ham = document.querySelector(".hamburger");
let ul = document.querySelector(".list-item");

ham.addEventListener("click", () => {
    ul.classList.toggle("active");
});

let back = document.querySelector(".back-to-top");

back.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (scrollY > 500) {
    back.style.display = "block";
  } else {
    back.style.display = "none";
  }
});
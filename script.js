const left = document.getElementById("left");
const right = document.getElementById("right");
const container = document.querySelector(".container");

left.addEventListener("click", () => {
  container.classList.remove("expand-right");
  container.classList.add("expand-left");
});

right.addEventListener("click", () => {
  container.classList.remove("expand-left");
  container.classList.add("expand-right");
});

const left = document.getElementById("left");
const right = document.getElementById("right");
const container = document.querySelector(".container");

let activePanel = null;

left.addEventListener("click", () => {
  if (activePanel === "left") {
    container.classList.remove("expand-left");
    activePanel = null;
  } else {
    container.classList.remove("expand-right");
    container.classList.add("expand-left");
    activePanel = "left";
  }
});

right.addEventListener("click", () => {
  if (activePanel === "right") {
    container.classList.remove("expand-right");
    activePanel = null;
  } else {
    container.classList.remove("expand-left");
    container.classList.add("expand-right");
    activePanel = "right";
  }
});

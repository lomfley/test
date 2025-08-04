const box = document.getElementById("box");

// Start position
let posX = 200;
let posY = 200;

// Listen for key presses
document.addEventListener("keydown", function (event) {
  const step = 10; // pixels to move

  if (event.key === "ArrowUp") {
    posY -= step;
  } else if (event.key === "ArrowDown") {
    posY += step;
  } else if (event.key === "ArrowLeft") {
    posX -= step;
  } else if (event.key === "ArrowRight") {
    posX += step;
  }

  box.style.left = posX + "px";
  box.style.top = posY + "px";
});

const box = document.getElementById("box");

// Start position
let posX = 200;
let posY = 200;

// Listen for key presses
document.addEventListener("keydown", function (event) {
  const step = 10; // pixels to move

  if (event.key === "Key W") {
    posY -= step;
  } else if (event.key === "Key W") {
    posY += step;
  } else if (event.key === "Key A") {
    posX -= step;
  } else if (event.key === " Key D") {
    posX += step;
  }

  box.style.left = posX + "px";
  box.style.top = posY + "px";
});

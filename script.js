const box = document.getElementById("box");

// Start position
let posX = 200;
let posY = 200;

// Listen for key presses
document.addEventListener("keydown", function (event) {
  const step = 10; // pixels to move

  const key = event.key.toLowerCase();

  if (event.key === "w") {
    posY -= step;
  } else if (event.key === "s") {
    posY += step;
  } else if (event.key === "a") {
    posX -= step;
  } else if (event.key === "d") {
    posX += step;
  } else if (event.key === "Space"){
    posX = 200;
    posY = 200;
    box.style.left = posX + "px";
    pox.style.left = posY + "px";
  }

  box.style.left = posX + "px";
  box.style.top = posY + "px";
});

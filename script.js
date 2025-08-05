const box = document.getElementById("box");

// Start position
let posX = 200;
let posY = 200;

// Listen for key presses
document.addEventListener("keydown", function (event) {
  const step = 10; // pixels to move

  const key = event.key.toLowerCase();

  if (key === "w") {
    posY -= step;
  } else if (key === "s") {
    posY += step;
  } else if (key === "a") {
    posX -= step;
  } else if (key === "d") {
    posX += step;
  } else if (key === " "){
    posX = 200;
    posY = 200;
    box.style.left = posX + "px";
    box.style.top = posY + "px";
    return;
  }

  box.style.left = posX + "px";
  box.style.top = posY + "px";
});

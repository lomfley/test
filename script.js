const box = document.getElementById("box");

let posX = 200;
let posY = 200;

const keysPressed = {};

document.addEventListener("keydown", (event) => {
  keysPressed[event.key.toLowerCase()] = true;
});

document.addEventListener("keyup", (event) => {
  keysPressed[event.key.toLowerCase()] = false;
});

function updateBoxPosition() {
  const step = 5;

  if (keysPressed["w"]) posY -= step;
  if (keysPressed["s"]) posY += step;
  if (keysPressed["a"]) posX -= step;
  if (keysPressed["d"]) posX += step;
  if (keysPressed[" "]) {
    posX = 200;
    posY = 200;
  }

  box.style.left = posX + "px";
  box.style.top = posY + "px";

  requestAnimationFrame(updateBoxPosition); // keep checking
}

updateBoxPosition(); // start the loop

const box = document.getElementById("box");
const target = document.getElementById("target");

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

  // Check collision with target
  if (isColliding(box, target)) {
    moveTargetRandomly();
  }

  requestAnimationFrame(updateBoxPosition);
}

function isColliding(elem1, elem2) {
  const rect1 = elem1.getBoundingClientRect();
  const rect2 = elem2.getBoundingClientRect();

  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

function moveTargetRandomly() {
  // Get viewport dimensions minus box size (to keep it visible)
  const maxX = window.innerWidth - target.offsetWidth;
  const maxY = window.innerHeight - target.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  target.style.left = randomX + "px";
  target.style.top = randomY + "px";
}

updateBoxPosition();

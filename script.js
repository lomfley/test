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

  if (isColliding()) {
    moveTargetRandomly();
  }

  requestAnimationFrame(updateBoxPosition);
}

function isColliding() {
  const boxSize = 50;

  const targetX = parseInt(target.style.left);
  const targetY = parseInt(target.style.top);

  return !(
    posX + boxSize < targetX ||
    posX > targetX + boxSize ||
    posY + boxSize < targetY ||
    posY > targetY + boxSize
  );
}

function moveTargetRandomly() {
  const maxX = window.innerWidth - target.offsetWidth;
  const maxY = window.innerHeight - target.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  target.style.left = randomX + "px";
  target.style.top = randomY + "px";
}

updateBoxPosition();

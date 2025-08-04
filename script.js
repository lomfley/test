let score = 0;
const scoreDisplay = document.getElementById('touched-times');
const button = document.getElementById('touch');

button.addEventListener('touch', () => {
  touch++;
  scoreDisplay.textContent = touch;
});

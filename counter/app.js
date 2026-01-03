// COUNTER PROGRAM

const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const counterLabel = document.getElementById('counterLabel');

let count = 0;

increaseBtn.addEventListener('click', () => {
  count++;
  counterLabel.textContent = count;
});

decreaseBtn.addEventListener('click', () => {
  count--;
  counterLabel.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  counterLabel.textContent = count;
});

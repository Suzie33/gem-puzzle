import './css/scss.scss';

// Create main elements
const main = document.createElement('div');
const field = document.createElement('div');

// Setup main elements
main.classList.add('main');
field.classList.add('field');

// Add to DOM
main.appendChild(field);
document.body.appendChild(main);

//
const cellSize = 100;
const fieldSize = 4;

const empty = {
  value: fieldSize * fieldSize,
  top: fieldSize - 1,
  left: fieldSize - 1,
};

const cells = [];

const move = (index) => {
  const cell = cells[index];

  // return if we cant move cell
  const leftDiff = Math.abs(empty.left - cell.left);
  const topDiff = Math.abs(empty.top - cell.top);
  if (leftDiff + topDiff > 1) return;

  // move cell to empty place
  cell.element.style.left = `${empty.left * cellSize}px`;
  cell.element.style.top = `${empty.top * cellSize}px`;

  // change positions in js
  const { left, top } = empty;

  empty.left = cell.left;
  empty.top = cell.top;
  cell.left = left;
  cell.top = top;

  // check if we win
  const isFinished = cells.every((cell) => cell.value === cell.top * 4 + cell.left + 1);

  if (isFinished) {
    setTimeout(() => alert('You won!'), 300);
  }
};

// random array
const numbers = [...Array(15).keys()].map((x) => x + 1);
let randomArr = [];

const generateRandomNumbers = (arr) => randomArr = arr.sort(() => Math.random() - 0.5);
const randomNumbers = numbers.sort(() => Math.random() - 0.5);

// check if the random sequence has solution
const checkSequence = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let counter = 0;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        counter++;
      }
    }
    sum += counter;
  }
  sum += 4;
  if (sum % 2 === 0) {
    return true;
  }
  return false;
};

let isSequenceSolvable = false;

while (!isSequenceSolvable) {
  generateRandomNumbers(numbers);
  console.log(randomArr, checkSequence(randomArr));
  isSequenceSolvable = checkSequence(randomArr);
}

for (let i = 0; i <= 14; i++) {
  const cell = document.createElement('div');
  const value = randomNumbers[i];
  cell.classList.add('cell');
  cell.textContent = value;

  const left = i % fieldSize;
  const top = (i - left) / fieldSize;

  cells.push({
    value,
    left,
    top,
    element: cell,
  });

  cell.style.left = `${left * cellSize}px`;
  cell.style.top = `${top * cellSize}px`;

  field.appendChild(cell);

  cell.addEventListener('click', () => {
    move(i);
  });
}

cells.push(empty);

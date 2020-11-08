import './css/scss.scss';

// Create main elements
const main = document.createElement("div");
const field = document.createElement("div");

// Setup main elements
main.classList.add("main");
field.classList.add("field");

// Add to DOM
main.appendChild(field);
document.body.appendChild(main);

//
const empty = {
  value: 0,
  top: 0,
  left: 0
}
const cellSize = 100;

const cells = [];
cells.push(empty);

const move = (index) => {
  const cell = cells[index];

  //return if we cant move cell
  const leftDiff = Math.abs(empty.left - cell.left);
  const topDiff = Math.abs(empty.top - cell.top);
  if (leftDiff + topDiff > 1) return;

  //move cell to empty place
  cell.element.style.left = `${empty.left * cellSize}px`;
  cell.element.style.top = `${empty.top * cellSize}px`;

  //change positions in js
  const {left, top} = empty;

  empty.left = cell.left;
  empty.top = cell.top;
  cell.left = left;
  cell.top = top;

  //check if we win
  const isFinished = cells.every(cell => {
    return cell.value === cell.top * 4 + cell.left;
  });

  if (isFinished) {
    setTimeout(() => alert("You won!"), 300);
  }
}

//random array
const numbers = [...Array(15).keys()].sort(() => Math.random() - 0.5);

for (let i = 1; i <= 15; i++) {
  const cell = document.createElement('div');
  const value = numbers[i - 1] + 1;
  cell.classList.add("cell");
  cell.textContent = value;

  const cellsInRow = 4;
  const left = i % cellsInRow;
  const top = (i - left) / 4;

  cells.push({
    value: value,
    left: left,
    top: top,
    element: cell
  })

  cell.style.left = `${left * cellSize}px`;
  cell.style.top = `${top * cellSize}px`;

  field.appendChild(cell);

  cell.addEventListener('click', () => {
    move(i);
  })
}

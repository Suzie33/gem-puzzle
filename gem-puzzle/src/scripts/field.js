import Cell from './cell.js';

export default class Field {
  constructor (fieldSize, numbers, menuDom) {
    this.fieldSize = fieldSize;
    this._lastCellIndex = this.fieldSize * this.fieldSize - 1;
    this.emptyCell = new Cell(this._lastCellIndex, this.fieldSize * this.fieldSize, this.fieldSize - 1, this.fieldSize - 1);
    this.numbers = numbers;
    this.element = this.getElement();
    this.cells = this.getCells();

    this.element.appendChild(menuDom);
  }

  getElement () {
    const fieldDom = document.createElement("div");
    fieldDom.classList.add("field");
    fieldDom.addEventListener('clickCell', (event) => {
      this.moveCells(event.detail);
    });
    return fieldDom;
  }

  getCells () {
    const cellsArr = [];

    for (let i = 0; i < this._lastCellIndex; i++) {
      const left = i % this.fieldSize;
      const top = (i - left) / this.fieldSize;

      const cell = new Cell(i, this.numbers[i], left, top);

      cellsArr.push(cell);

      this.element.appendChild(cell.element);
    }

    cellsArr.push(this.emptyCell);

    return cellsArr;
  }

  moveCells (cell) {
    //return if we cant move cell
    const leftDiff = Math.abs(this.emptyCell.left - cell.left);
    const topDiff = Math.abs(this.emptyCell.top - cell.top);

    if (leftDiff + topDiff > 1) 
      return;

    //move cell to empty place
    cell.element.style.left = `${this.emptyCell.left * cell.cellSize}px`;
    cell.element.style.top = `${this.emptyCell.top * cell.cellSize}px`;

    //change positions in js
    const {left, top} = this.emptyCell;

    this.emptyCell.left = cell.left;
    this.emptyCell.top = cell.top;
    cell.left = left;
    cell.top = top;

    const event = new Event('moveDone', {bubbles: true});
    this.element.dispatchEvent(event);
  }
}
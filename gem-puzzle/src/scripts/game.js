import Field from './field.js';
import GameNumbersGenerator from './gameNumbersGenerator.js'

export default class Game {
  constructor () {
    const fieldSize = 4;
    this._gameNumbersGenerator = new GameNumbersGenerator();
    const numbers = this._gameNumbersGenerator.getNumbers(fieldSize);
    this.field = new Field(fieldSize, numbers);
    this.element = this.getElement();
    this.element.appendChild(this.field.element);
  }

  getElement () {
    const gameDom = document.createElement("div");
    gameDom.classList.add("game");

    gameDom.addEventListener('moveDone', () => {
      this.isGameFinished();
    })
    return gameDom;
  }

  isGameFinished() {
    const isFinished = this.field.cells.every(cell => {
      return cell.value === cell.top * 4 + cell.left + 1;
    });
  
    if (isFinished) {
      setTimeout(() => alert("You won!"), 300);
    }
  }
}
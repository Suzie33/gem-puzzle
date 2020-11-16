export default class Moves {
  constructor() {
    this.moves = 0;
    this.movesCounter = null;
    this.element = this.getElement();
  }

  getElement() {
    const movesDom = document.createElement('div');
    movesDom.classList.add('moves');

    const movesTitle = document.createElement('span');
    movesTitle.classList.add('moves_title');
    movesTitle.textContent = 'Moves: ';
    const movesCounter = document.createElement('span');
    movesCounter.classList.add('moves__counter');
    movesCounter.textContent = `${this.moves}`;
    this.movesCounter = movesCounter;

    movesDom.appendChild(movesTitle);
    movesDom.appendChild(movesCounter);

    return movesDom;
  }

  updateMoves() {
    this.moves++;
    this.movesCounter.textContent = `${this.moves}`;
  }

  getWinMoves() {
    return this.movesCounter.textContent;
  }
}

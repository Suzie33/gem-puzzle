export default class Moves {
  constructor () {
    this.element = this.getElement();
  }

  getElement () {
    const movesDom = document.createElement("div");
    movesDom.classList.add("moves");

    const moves_title = document.createElement("span");
    moves_title.classList.add('moves_title');
    moves_title.textContent = 'Moves: ';
    const moves__counter = document.createElement("span");
    moves__counter.classList.add('moves__counter');
    moves__counter.textContent = '15';

    movesDom.appendChild(moves_title);
    movesDom.appendChild(moves__counter);

    return movesDom;
  }
}
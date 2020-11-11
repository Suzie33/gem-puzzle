import Time from './time';
import Moves from './moves';
import MenuBtn from './menuBtn';

export default class Statusbar {
  constructor () {
    this.element = this.getElement();
    this.time = new Time();
    this.moves = new Moves();
    this.menuBtn = new MenuBtn();

    this.element.appendChild(this.time.element);
    this.element.appendChild(this.moves.element);
    this.element.appendChild(this.menuBtn.element);
  }

  getElement () {
    const statusbarDom = document.createElement("div");
    statusbarDom.classList.add("statusbar");

    return statusbarDom;
  }

  destroy () {
    this.time.clearTimer();
  }

  makeMove () {
    this.moves.updateMoves();
  }
}
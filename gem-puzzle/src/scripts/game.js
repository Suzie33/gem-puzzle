import Field from './field.js';
import Statusbar from './statusbar/statusbar.js';
import Menu from './menu/menu';
import GameNumbersGenerator from './gameNumbersGenerator.js';
import Sound from '../assets/button5.wav';

export default class Game {
  constructor (fieldSize, cellSize) {
    this.sound = Sound;
    this.soundDom = null;

    this._gameNumbersGenerator = new GameNumbersGenerator();
    const numbers = this._gameNumbersGenerator.getNumbers(fieldSize);
    this.menu = new Menu();
    this.field = new Field(fieldSize, numbers, this.menu.element, cellSize);
    this.statusbar = new Statusbar();
    this.element = this.getElement();
    this.element.appendChild(this.statusbar.element);
    this.element.appendChild(this.field.element);

  }

  getElement () {
    const gameDom = document.createElement("div");
    gameDom.classList.add("game");

    const soundDom = document.createElement('audio');
    soundDom.classList.add("sound");
    soundDom.setAttribute('src', `${Sound}`);
    this.soundDom = soundDom;

    gameDom.append(soundDom);

    gameDom.addEventListener('moveDone', () => {
      this.statusbar.makeMove();
      this.soundDom.play();
      this.isGameFinished();
    })
    gameDom.addEventListener('menuBtnClick', () => {
      this.menu.element.classList.toggle('menu--visible');
    });
    
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

  destroy () {
    this.statusbar.destroy();
  }
}
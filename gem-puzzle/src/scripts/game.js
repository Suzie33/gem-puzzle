import Field from './field';
import Statusbar from './statusbar/statusbar';
import Menu from './menu/menu';
import GameNumbersGenerator from './gameNumbersGenerator';
import Sound from '../assets/button5.wav';

export default class Game {
  constructor(fieldSize, cellSize) {
    this.sound = Sound;
    this.soundDom = null;
    this.fieldSize = fieldSize;

    this.gameNumbersGenerator = new GameNumbersGenerator();
    const numbers = this.gameNumbersGenerator.getNumbers(fieldSize);
    this.menu = new Menu();
    this.field = new Field(fieldSize, numbers, this.menu.element, cellSize);
    this.statusbar = new Statusbar();
    this.element = this.getElement();
    this.element.appendChild(this.statusbar.element);
    this.element.appendChild(this.field.element);
  }

  getElement() {
    const gameDom = document.createElement('div');
    gameDom.classList.add('game');

    const soundDom = document.createElement('audio');
    soundDom.classList.add('sound');
    soundDom.setAttribute('src', `${Sound}`);
    this.soundDom = soundDom;

    gameDom.append(soundDom);

    gameDom.addEventListener('moveDone', () => {
      this.statusbar.makeMove();
      this.soundDom.play();
      this.isGameFinished();
    });
    gameDom.addEventListener('menuBtnClick', () => {
      this.menu.element.classList.toggle('menu--visible');
    });

    return gameDom;
  }

  isGameFinished() {
    let winMessage = 'Ура! Вы решили головоломку за ##:## и N ходов';

    const isFinished = this.field.cells.every(
      (cell) => cell.value === cell.top * this.fieldSize + cell.left + 1,
    );

    if (isFinished) {
      const winTime = this.statusbar.getWinTime();
      const winMoves = this.statusbar.getWinMoves();

      winMessage = `Great! You've sold the puzzle in ${winTime} and ${winMoves} moves!`;
      setTimeout(() => alert(winMessage), 300);
    }
  }

  destroy() {
    this.statusbar.destroy();
  }
}

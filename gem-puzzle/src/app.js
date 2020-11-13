import Game from './scripts/game.js';
import Icon from './assets/favicon.ico';

export default class App{
  constructor () {
    this.fieldSize = 4;
    this.cellSize = 100;
  }
  init () {
    const appIcon = document.createElement('link');
    appIcon.rel = 'icon';
    appIcon.href = Icon;
    document.querySelector('head').append(appIcon);

    this.game = new Game(this.fieldSize, this.cellSize);
    this.element = this.game.element;
    document.body.append(this.element);
    this.handler = this.handleNewGame.bind(this);

    this.element.addEventListener('newGame', this.handler);

    this.element.addEventListener('fieldSizeChanged', (e) => {
      this.fieldSize = e.detail.target;
      switch (this.fieldSize) {
      case '3':
        this.cellSize = 133.33;
        break;
      case '4':
        this.cellSize = 100;
        break;
      case '5':
        this.cellSize = 80;
        break;
      case '6':
        this.cellSize = 66.66;
        break;
      case '7':
        this.cellSize = 57.14;
        break;
      case '8':
        this.cellSize = 50;
        break;
      }
      console.log(this.fieldSize);
    })
  }
  handleNewGame () {
    this.element.removeEventListener('newGame', this.handler)
    this.element.remove();
    this.game.destroy();
    this.game = null;
    
    this.init(this.fieldSize);
  }
}
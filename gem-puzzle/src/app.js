import Game from './scripts/game.js';

export default class App{
  init () {
    this.game = new Game();
    this.element = this.game.element;
    document.body.append(this.element);
    this.handler = this.handleNewGame.bind(this);

    this.element.addEventListener('newGame', this.handler);
  }
  handleNewGame () {
    this.element.removeEventListener('newGame', this.handler)
    this.element.remove();
    this.game = null;
    
    this.init();
  }
}
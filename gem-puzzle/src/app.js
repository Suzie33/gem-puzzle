import Game from './scripts/game.js';
// import Icon from './assets/favicon.ico';

export default class App{
  constructor () {
    this.fieldSize = 4;
  }
  init () {
    // const appIcon = document.createElement('link');
    // appIcon.rel = 'favicon';
    // appIcon.type = 'image/png';
    // appIcon.href = `${Icon}`;
    // document.querySelector('head').append(appIcon);

    this.game = new Game(this.fieldSize);
    this.element = this.game.element;
    document.body.append(this.element);
    this.handler = this.handleNewGame.bind(this);

    this.element.addEventListener('newGame', this.handler);

    this.element.addEventListener('fieldSizeChanged', (e) => {
      console.log('changed', e.detail.target);
      this.fieldSize = e.detail.target;
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
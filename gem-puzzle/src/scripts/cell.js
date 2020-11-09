export default class Cell {
  constructor (index, value, left, top) {
    this.index = index;
    this.value = value;
    this.left = left;
    this.top = top;
    this.cellSize = 100;
    this.element = this.getElement();
  }

  getElement() {
    const cellDom = document.createElement('div');
    cellDom.classList.add("cell");
    cellDom.textContent = this.value;

    cellDom.style.left = `${this.left * this.cellSize}px`;
    cellDom.style.top = `${this.top * this.cellSize}px`;

    cellDom.addEventListener('click', () => this._onclick());

    return cellDom;
  }

  _onclick() {
    const event = new CustomEvent('clickCell', {
      bubbles: true, 
      detail: this 
    });
    this.element.dispatchEvent(event);
  }
}
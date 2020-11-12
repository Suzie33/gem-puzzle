export default class Cell {
  constructor (index, value, left, top, cellSize) {
    this.index = index;
    this.value = value;
    this.left = left;
    this.top = top;
    this.cellSize = cellSize;
    this.element = this.getElement();
  }

  getElement() {
    const cellDom = document.createElement('div');
    cellDom.classList.add("cell");
    cellDom.textContent = this.value;

    cellDom.style.width = `${this.cellSize}px`;
    cellDom.style.height = `${this.cellSize}px`;
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
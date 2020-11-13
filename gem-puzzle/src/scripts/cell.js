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


    cellDom.onmousedown = (event) => {
      const cellLeft = cellDom.style.left;
      const cellTop = cellDom.style.top;

      const shiftX = event.clientX - cellDom.getBoundingClientRect().left;
      const shiftY = event.clientY - cellDom.getBoundingClientRect().top;

      cellDom.style.transitionProperty = 'none';
      cellDom.style.zIndex = 100;
      document.body.append(cellDom);
      
      function moveAt(pageX, pageY) {
        cellDom.style.left = pageX - shiftX + 'px';
        cellDom.style.top = pageY - shiftY + 'px';
      }

      moveAt(event.pageX, event.pageY);
      
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      document.addEventListener('mousemove', onMouseMove);

      cellDom.onmouseup = (event) => {
        cellDom.style.display = 'none';
        const elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        cellDom.style.display = 'flex';

        if (!elemBelow) return;

        if (elemBelow.className === 'field') {
          cellDom.style.left = cellLeft;
          cellDom.style.top = cellTop;
          cellDom.style.zIndex = 'auto';
          document.querySelector('.field').append(cellDom);

          this._onclick();
        } else {
          cellDom.style.left = cellLeft;
          cellDom.style.top = cellTop;
          cellDom.style.zIndex = 'auto';
          document.querySelector('.field').append(cellDom);
        }

        document.removeEventListener('mousemove', onMouseMove);
        cellDom.onmouseup = null;
        cellDom.style.transitionProperty = 'all';
      };
    }
    cellDom.ondragstart = function() {
      return false;
    };
    cellDom.addEventListener('click', () => this._onclick());

    return cellDom;
  }

  _onclick() {
    console.log('click');
    const event = new CustomEvent('clickCell', {
      bubbles: true, 
      detail: this 
    });
    this.element.dispatchEvent(event);
  }
}
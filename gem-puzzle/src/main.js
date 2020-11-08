import './css/scss.scss';

import './scripts/role.js';

const gameField = {
  elements: {
    main: null,
    board: null,
    chips: [],

    info: null,
    time: null,
    moves: null,
    pause_btn: null
  },
  init() {
    // Create main elements
    this.elements.main = document.createElement("div");
    this.elements.board = document.createElement("div");

    // Setup main elements
    this.elements.main.classList.add("main");
    this.elements.board.classList.add("board");
    this.elements.board.appendChild(this._createChips());
    this.elements.chips = this.elements.board.querySelectorAll(".chips");

    //Create info elements
    this.elements.info = document.createElement("div");
    this.elements.time = document.createElement("div");
    this.elements.moves = document.createElement("div");
    this.elements.pause_btn = document.createElement("button");

    this.elements.info.classList.add("info");
    this.elements.time.classList.add("time");

    const time_title = document.createElement("span");
    time_title.classList.add('time_title');
    time_title.textContent = 'Time: ';
    const time_timer = document.createElement("span");
    time_timer.classList.add('time_timer');
    time_timer.textContent = '00 : 53';
    this.elements.time.appendChild(time_title);
    this.elements.time.appendChild(time_timer);
    
    this.elements.moves.classList.add("moves");

    const moves__title = document.createElement("span");
    moves__title.classList.add('moves__title');
    moves__title.textContent = 'Moves: ';
    const moves__counter = document.createElement("span");
    moves__counter.classList.add('moves__counter');
    moves__counter.textContent = '15';
    this.elements.moves.appendChild(moves__title);
    this.elements.moves.appendChild(moves__counter);

    this.elements.pause_btn = document.createElement("button");
    this.elements.pause_btn.classList.add('pause_btn');
    this.elements.pause_btn.textContent = 'Pause game';

    // Add to DOM
    this.elements.info.appendChild(this.elements.time);
    this.elements.info.appendChild(this.elements.moves);
    this.elements.info.appendChild(this.elements.pause_btn);

    this.elements.main.appendChild(this.elements.info);
    this.elements.main.appendChild(this.elements.board);
    document.body.appendChild(this.elements.main);

  },
  _createChips() {
    const fragment = document.createDocumentFragment();

    const chipsList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const shuffledChips = this._shuffleChips(chipsList);

    shuffledChips.forEach((chip) => {
      const chipElement = document.createElement("div");

      if (`${chip}` === '0') {
        chipElement.classList.add("empty");
      } else {
        chipElement.classList.add("chip");
        chipElement.textContent = `${chip}`;
      }
      
      chipElement.setAttribute("data-id", `${chip}`);

      fragment.appendChild(chipElement);
    })

    return fragment;
  },
  _shuffleChips(array) {
    for (let currentInd = array.length - 1; currentInd > 0; currentInd--) {
      const randomInd = Math.floor(Math.random() * (currentInd + 1));
      [array[currentInd], array[randomInd]] = [array[randomInd], array[currentInd]];
    }
    return array;
  }
}

gameField.init();
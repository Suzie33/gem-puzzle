export default class Time {
  constructor() {
    this.min = Number('00');
    this.sec = Number('00');
    this.timerSec = 0;
    this.timerText = '';
    this.timer = null;
    this.element = this.getElement();
    this.startTime();
  }

  getElement() {
    const timeDom = document.createElement('div');
    timeDom.classList.add('time');

    const timeTitle = document.createElement('span');
    timeTitle.classList.add('time_title');
    timeTitle.textContent = 'Time: ';
    const timeTimer = document.createElement('span');
    timeTimer.classList.add('time_timer');
    timeTimer.textContent = `${this.min} : ${this.sec}`;
    this.timerText = timeTimer;

    timeDom.appendChild(timeTitle);
    timeDom.appendChild(timeTimer);

    return timeDom;
  }

  startTime() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.timerSec++;

    this.updateTimer();
  }

  updateTimer() {
    if (this.timerSec >= 60) {
      this.min = Math.floor(this.timerSec / 60);
      this.sec = this.timerSec - this.min * 60;
    } else {
      this.sec = this.timerSec;
    }

    this.timerText.textContent = `${this.addZero(this.min)}:${this.addZero(this.sec)}`;
  }

  addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
  }

  clearTimer() {
    clearTimeout(this.timer);
  }

  getWinTime() {
    return this.timerText.textContent;
  }
}

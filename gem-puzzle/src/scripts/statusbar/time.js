export default class Time {
  constructor () {
    this.min = '00';
    this.sec = '00';
    this.timerText = '';
    this.timer = null;
    this.element = this.getElement();
    this.startTime();
  }

  getElement () {
    const timeDom = document.createElement("div");
    timeDom.classList.add("time");

    const time_title = document.createElement("span");
    time_title.classList.add('time_title');
    time_title.textContent = 'Time: ';
    const time_timer = document.createElement("span");
    time_timer.classList.add('time_timer');
    time_timer.textContent = `${this.min} : ${this.sec}`;
    this.timerText = time_timer;

    timeDom.appendChild(time_title);
    timeDom.appendChild(time_timer);

    return timeDom;
  }

  startTime () {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  tick () {
    this.sec = +this.sec;
    this.min = +this.min;

    this.sec++;
    console.log(this.sec);

    this.updateTimer();
  }

  updateTimer () {
    if (this.sec >= 60) {
      this.min = Math.floor(this.sec / 60);
      this.sec = this.sec - this.min * 60;
    }

    this.timerText.textContent = `${this.addZero(this.min)} : ${this.addZero(this.sec)}`;
  }

  addZero (n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
  }

  clearTimer () {
    clearTimeout(this.timer);
  }
}
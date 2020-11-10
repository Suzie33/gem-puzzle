export default class Time {
  constructor () {
    this.element = this.getElement();
  }

  getElement () {
    const timeDom = document.createElement("div");
    timeDom.classList.add("time");

    const time_title = document.createElement("span");
    time_title.classList.add('time_title');
    time_title.textContent = 'Time: ';
    const time_timer = document.createElement("span");
    time_timer.classList.add('time_timer');
    time_timer.textContent = '00 : 53';

    timeDom.appendChild(time_title);
    timeDom.appendChild(time_timer);

    return timeDom;
  }
}
export default class MenuBtn {
  constructor () {
    this.element = this.getElement();
  }

  getElement () {
    const menuBtnDom = document.createElement("button");
    menuBtnDom.classList.add("menuBtn");
    menuBtnDom.textContent = 'Menu';

    return menuBtnDom;
  }
}
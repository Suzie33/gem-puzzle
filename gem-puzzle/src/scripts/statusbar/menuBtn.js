export default class MenuBtn {
  constructor () {
    this.element = this.getElement();
  }

  getElement () {
    const menuBtnDom = document.createElement("button");
    menuBtnDom.classList.add("menuBtn");
    menuBtnDom.textContent = 'Menu';

    menuBtnDom.addEventListener('click', () => {
      menuBtnDom.classList.toggle('menuBtn--active');
      
      const event = new Event('menuBtnClick', { bubbles: true });
      this.element.dispatchEvent(event);
    })

    return menuBtnDom;
  }
}
import MenuFieldSize from './menuFieldSize';

export default class Menu {
  constructor() {
    this.menuFieldsizeContainer = new MenuFieldSize().getContainer();
    this.menuMainContainer = this.getContainer();
    this.element = this.getElement();
  }

  getElement() {
    const menuDom = document.createElement('div');
    menuDom.classList.add('menu');

    menuDom.appendChild(this.menuMainContainer);
    menuDom.appendChild(this.menuFieldsizeContainer);

    menuDom.addEventListener('fieldSizeClose', () => {
      this.menuFieldsizeContainer.classList.add('hidden');
      this.menuMainContainer.classList.remove('hidden');
    });

    return menuDom;
  }

  getContainer() {
    const menuContainer = document.createElement('ul');
    menuContainer.classList.add('menu__container');

    const menuItems = [{
      text: 'New Game',
      handler: () => {
        const event = new CustomEvent('newGame', {
          bubbles: true,
          detail: this,
        });
        this.element.dispatchEvent(event);
      },
    },
    {
      text: 'Field size',
      handler: () => {
        this.menuMainContainer.classList.add('hidden');
        this.menuFieldsizeContainer.classList.remove('hidden');
      },
    }];

    menuItems.forEach((item) => {
      const menuItem = document.createElement('li');
      menuItem.classList.add('menu__item');
      menuItem.textContent = `${item.text}`;
      menuItem.addEventListener('click', item.handler);

      menuContainer.appendChild(menuItem);
    });

    return menuContainer;
  }
}

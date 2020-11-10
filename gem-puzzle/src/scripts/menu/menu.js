export default class Menu {
  constructor () {
    this.element = this.getElement();
  }

  getElement () {
    const menuDom = document.createElement('div');
    menuDom.classList.add('menu');

    menuDom.appendChild(this.getContainer());

    menuDom.addEventListener('menuBtnClick', () => {
      console.log('click chai');
    });

    return menuDom;
  }

  getContainer () {
    const menuContainer = document.createElement('ul');
    menuContainer.classList.add('menu__container');

    const menuItems = [{
      text: 'New Game',
      handler: () => {
        const event = new CustomEvent('newGame', {
          bubbles: true, 
          detail: this 
        });
        this.element.dispatchEvent(event);
      }
    },
    {
      text: 'Save game',
      handler: () => {
        console.log('save game');
      }
    },
    {
      text: 'Best scores',
      handler: () => {
        console.log('best');
      }
    },
    {
      text: 'Settings',
      handler: () => {
        console.log('settings');
      }
    }];

    menuItems.forEach((item) => {
      const menuItem = document.createElement('li');
      menuItem.classList.add('menu__item');
      menuItem.textContent = `${item.text}`;
      menuItem.addEventListener('click', item.handler);

      menuContainer.appendChild(menuItem);
    })

    return menuContainer;
  }
}
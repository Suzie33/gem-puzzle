export default class MenuFieldSize {
  getContainer() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu__container', 'menu__container--fieldsize', 'hidden');

    const menuTitle = document.createElement('h2');
    menuTitle.classList.add('menu__title');
    menuTitle.textContent = 'Field size';
    menuContainer.append(menuTitle);

    const fieldInfo = document.createElement('div');
    fieldInfo.classList.add('field_info');
    fieldInfo.textContent = 'Changes saved! \n Start new game to get new field size.';

    const fieldsizeSelect = document.createElement('select');
    fieldsizeSelect.classList.add('fieldsize_select');
    fieldsizeSelect.innerHTML = `<option value="0" selected disabled>--</option>
    <option value="3">3x3</option>
    <option value="4">4x4</option>
    <option value="5">5x5</option>
    <option value="6">6x6</option>
    <option value="7">7x7</option>
    <option value="8">8x8</option>`;

    fieldsizeSelect.addEventListener('change', (e) => {
      const fieldSize = e.target.value;
      fieldInfo.style.display = 'block';
      const event = new CustomEvent('fieldSizeChanged', { bubbles: true, detail: { target: fieldSize } });
      menuContainer.dispatchEvent(event);
    });
    menuContainer.append(fieldsizeSelect);
    menuContainer.append(fieldInfo);

    const backButton = document.createElement('button');
    backButton.classList.add('backBtn');
    backButton.textContent = 'Go back';
    backButton.addEventListener('click', () => {
      const event = new Event('fieldSizeClose', { bubbles: true });
      menuContainer.dispatchEvent(event);
    });
    menuContainer.append(backButton);

    return menuContainer;
  }
}

export default class Section {
    // Первым параметром конструктор принимает объект с двумя свойствами: items и renderer, второй параметр — селектор контейнера
    constructor({ items, renderer }, cardContainer) {
      this._renderedItems = items;
      this._renderer = renderer;
      this._cardContainer = cardContainer;
    }
    // Метод отрисовки всех элементов
    renderedItems() {
      this._renderedItems.forEach((item) => {
        this._renderer(item);
      });
    }
    // Метод принимает DOM-элемент и добавляет его в контейнер
    addItem(cardElement) {
      this._cardContainer.prepend(cardElement);
    }
  }
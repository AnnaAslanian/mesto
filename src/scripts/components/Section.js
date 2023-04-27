export default class Section {
  constructor({ renderer }, selectorContainer) {
    this._renderer = renderer;
    this._selectorContainer = selectorContainer;
  }

  renderedItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }
  
  addItem(element) {
    this._selectorContainer.prepend(element);
  }
}
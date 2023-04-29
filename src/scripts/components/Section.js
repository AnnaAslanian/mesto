export default class Section {
  constructor({ renderer }, selectorContainer) {
    this._renderer = renderer;
    this._selectorContainer = selectorContainer;
  }

  addItem(element) {
    this._selectorContainer.prepend(element);
  }
}
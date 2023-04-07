import  Popup  from './Popup.js';

export default class PopupWithForm extends Popup {
  // Принимает в конструктор селектор popup и callback сабмита формы
  constructor(popupSelector, callbackFormSubmit) {
    super(popupSelector);
    this._callbackFormSubmit = callbackFormSubmit;
    // this._popupItem находится в родительском классе
    this._popupForm = this._popupSelector.querySelector('.popup__form');
    this._inputList = this._popupForm.querySelectorAll('.popup__name');
  }
  // Метод собирает данные всех полей формы
  _getInputValues() {
    // Наполняем пустой массив данными через forEach
    this._formValues = {};
    this._inputList.forEach(inputItem => {
      this._formValues[inputItem.name] = inputItem.value;
    });
    return this._formValues;
  }
  setInputValues(item) {
    this._inputList.forEach(inputItem => {
      inputItem.value = item[inputItem.name];
    });
  }
  // Связываем с методом getInputValues, добавляем обработчик клика и обработчик сабмита формы
  setEventListeners() {
    // Перезаписывает родительский метод setEventListeners
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callbackFormSubmit(this._getInputValues());
    });
  }
  // Метод закрытия popup (перезаписывает родителя)
  close() {
    super.close();
    // Сбрасываем форму
    this._popupForm.reset();
  }
}

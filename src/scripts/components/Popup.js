export default class Popup {
    // Принимает в конструктор селектор popup
    constructor(popupSelector) {
      this._popupSelector = popupSelector;
      
    }
    // Метод открытия popup
    open() {
      this._popupSelector.classList.add('popup_opened');
      document.addEventListener('keydown', this._handleEscClose.bind(this));
    }
    // Метод закрытия popup
    close() {
      this._popupSelector.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose.bind(this));
    }
    // Метод для закрытия popup по нажатию на клавишу Escape
    _handleEscClose(evt) {
      if (evt.key === "Escape") {
        this.close();
      }
    }
    // Метод закрытия popup по клику за область формы (включая крестик)
    setEventListeners() {
      this._popupSelector.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
          this.close();
        }
      });
    }
  }
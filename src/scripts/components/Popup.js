export default class Popup {
    // Принимает в конструктор селектор popup
    constructor(popup) {
      this._popup = popup;
      
    }
    // Метод открытия popup
    open() {
      this._popup.classList.add('popup_opened');
      document.addEventListener('keydown', this._handleEscClose);
    }
    // Метод закрытия popup
    close() {
      this._popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
    }
    // Метод для закрытия popup по нажатию на клавишу Escape
    _handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    }
    // Метод закрытия popup по клику за область формы (включая крестик)
    setEventListeners() {
      this._popup.querySelector('.popup__close').addEventListener('click', () => { 
        this.close();
    });
      this._popup.addEventListener('click', (evt) => {
        if (evt.target === this._popup) {
          this.close();
        }
      });
    }
  }
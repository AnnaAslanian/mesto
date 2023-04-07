export default class FormValidator {
    constructor(defaultState, form) {
        this._inputSelector = defaultState.inputSelector;
        this._submitButtonSelector = defaultState.submitButtonSelector;
        this._inactiveButtonClass = defaultState.inactiveButtonClass;
        this._inputErrorClass = defaultState.inputErrorClass;
        this._errorClass = defaultState.errorClass;
        this._form = form;
    }

_showInputError = (inputElement, errorMessage) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
}

_hideInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
         inputElement.classList.remove(this._inputErrorClass);
         errorElement.classList.remove(this._errorClass);
         errorElement.textContent = '';
         this.toggleButtonState();
}

_checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
    } else {
        this._hideInputError(inputElement);
    }
};

_hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

toggleButtonState = () => {
    if (this._hasInvalidInput(this._inputList)) {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.setAttribute('disabled', true);
    } else {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.removeAttribute('disabled');
    }
};

_setEventListeners = () => {
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    this.toggleButtonState();

    this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            this._checkInputValidity(inputElement);
            this.toggleButtonState();
        });
    });
}

enableValidation = () => {
    this._form.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        this._setEventListeners();
    };
}
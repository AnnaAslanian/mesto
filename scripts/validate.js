const defaultState = {
    formSelector: '.popup__form',
    inputSelector: '.popup__name',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__no-submit',
    inputErrorClass: 'popup__name_type_error',
    errorClass: 'error__text_active'
}

const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
    if (!inputElement) return;
    inputElement.classList.add(validationConfig.inputErrorClass);
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    if (!errorElement) return;
    errorElement.classList.add(validationConfig.errorClass);
    errorElement.textContent = errorMessage;
}

const hideInputError = (formElement, inputElement, validationConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.classList.remove(validationConfig.errorClass);
    errorElement.textContent = '';
}

const checkInputValidity = (formElement, inputElement, validationConfig) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
    } else {
        hideInputError(formElement, inputElement, validationConfig);
    }
}

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

const toggleButtonState = (inputList, buttonElement, validationConfig) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(validationConfig.inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove(validationConfig.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
}

const resetValidation = (form, button) => {
    const inputList = Array.from(form.querySelectorAll(defaultState.inputSelector));

    inputList.forEach((inputElement) => {
        checkInputValidity(form, inputElement, defaultState);
        toggleButtonState(inputList, button, defaultState);
    });
}

const setEventListeners = (formElement, validationConfig) => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, validationConfig);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, validationConfig);
            toggleButtonState(inputList, buttonElement, validationConfig);
        });
    });
}

const enableValidation = (validationConfig) => {
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement, validationConfig);
    });
}

enableValidation(defaultState);
/*const checkInputValidity = (
    formElement,
    inputElement,
    inputErrorClass,
    errorClass
  ) => {
    if (inputElement.validity.valid) {
      hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    } else {
      showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        inputErrorClass,
        errorClass
      );
    }
  };
  
  function showInputError(formElement,
    inputElement,
    errorMessage,
    inputErrorClass,
    errorClass) {
    if (!inputElement)
        return;
    inputElement.classList.add(inputErrorClass);
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    if (!errorElement)
        return;
    errorElement.classList.add(errorClass);
    errorElement.textContent = errorMessage;
}
  
  function hideInputError(formElement,
    inputElement,
    inputErrorClass,
    errorClass) {
    if (!inputElement)
        return;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    if (!errorElement)
        return;
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
}
  
  function toggleButtonState(formElement, buttonElement, inactiveButtonClass) {
    const isFormValid = formElement && formElement.checkValidity();
    buttonElement.classList.toggle(inactiveButtonClass, !isFormValid);
    buttonElement.disabled = !isFormValid;
}
  
  
  
  function setEventListeners(formElement,
    {
        inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass,
    }) {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);



    toggleButtonState(formElement, buttonElement, inactiveButtonClass);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(
                formElement,
                inputElement,
                inputErrorClass,
                errorClass
            );
            toggleButtonState(formElement, buttonElement, inactiveButtonClass);
        });
    });
}
  
  const showInputError = (formElement, inputElement, errorMessage, object) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(object.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(object.errorClass);
  };
  
  const hideInputError = (formElement, inputElement, object) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(object.inputErrorClass);
    errorElement.classList.remove(object.errorClass);
    errorElement.textContent = '';
  };
  
  function checkInputValidity(formElement, inputElement, object) {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, object);
    } else {
        hideInputError(formElement, inputElement, object);
    }
}
    const hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
        };
        const toggleButtonState = (inputList, buttonElement, object) => {
            if (hasInvalidInput(inputList)) {
              buttonElement.classList.add(object.inactiveButtonClass);
              buttonElement.setAttribute('disabled', true);
            } else {
              buttonElement.classList.remove(object.inactiveButtonClass);
              buttonElement.removeAttribute('disabled');
            }
            };

  const setEventListeners = (formElement, object) => {
    const inputList = Array.from(formElement.querySelectorAll(object.inputSelector));
    const buttonElement = formElement.querySelector(object.submitButtonSelector);
  
  
    toggleButtonState(inputList, buttonElement, object);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, object);
        // чтобы проверять его при изменении любого из полей
        toggleButtonState(inputList, buttonElement, object);
      });
    });
  };

 
  const enableValidation = (object) => {
    const formList = Array.from(document.querySelectorAll(object.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      }); 
      setEventListeners(formElement, object);
    });
  }; 
  enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__name',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__name_type_error',
    errorClass: 'error__text_active'
});
  
  /*enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__name',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: '.popup__name-error',
    errorClass: 'popup__name-error_active',
  });*/

  const showInputError = (formElement, inputElement, errorMessage, object) => {
    if (!inputElement) return;
    inputElement.classList.add(object.inputErrorClass);
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    if (!errorElement) return;
    errorElement.classList.add(object.errorClass);
    errorElement.textContent = errorMessage;
  };

const hideInputError = (formElement, inputElement, object) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(object.inputErrorClass);
    errorElement.classList.remove(object.errorClass);
    errorElement.textContent = '';
};
const checkInputValidity = (formElement, inputElement, object) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, object);
    } else {
        hideInputError(formElement, inputElement, object);
    }
};
function hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}
const toggleButtonState = (inputList, buttonElement, object) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(object.inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);

    } else {
        buttonElement.classList.remove(object.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
}
const setEventListeners = (formElement, object) => {
    const inputList = Array.from(formElement.querySelectorAll(object.inputSelector));
    const buttonElement = formElement.querySelector(object.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, object);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, object);
            toggleButtonState(inputList, buttonElement, object);
        });
    });
};
const enableValidation = (object) => {
    const formList = Array.from(document.querySelectorAll(object.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement, object);
    });
}
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__name',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__no-submit',
    inputErrorClass: 'popup__name_type_error',
    errorClass: 'error__text_active'
});
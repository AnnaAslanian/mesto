function enableValidation({ formSelector, ...rest }) {
    const getFormList = Array.from(document.querySelectorAll(formSelector));
    getFormList.forEach((formElement) => { setEventListeners(formElement, rest); });
}
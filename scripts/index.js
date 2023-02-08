const aboutButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');
const formElement = document.querySelector('.popup__container');
const nameInput = document.querySelector('.popup__name_input_value');
const aboutInput = document.querySelector('.popup__name_input_about');
const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__about');

const handleEditButtonClick = () => {
    popup.classList.add('popup_opened');
}

const handleCloseButtonClick = ()  => {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileInfo.textContent = aboutInput.value;
    handleCloseButtonClick();
}

aboutButton.addEventListener('click', handleEditButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);
formElement.addEventListener('submit', formSubmitHandler);

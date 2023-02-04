const aboutButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');
const formElement = document.querySelector('.popup__container');
const nameInput = document.querySelector('#name_input');
const aboutInput = document.querySelector('#about_input');
const profileName = document.querySelector('.profile__name');
const profileInfo = document.querySelector('.profile__about');

let modal = 'closed';

const toggleOpenPopup = () => {
    if (modal === 'closed') {
        openPopup();
    } else {
        closePopup();
    }
    nameInput.value = profileName.textContent;
    aboutInput.value = profileInfo.textContent;
}

const openPopup = () => {
    popup.style.display = 'flex';
    modal = 'open';
}

const closePopup = () => {
    popup.style.display = 'none';
        modal = 'closed';
}

const handleFormSubmit = (evt) => {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileInfo.textContent = aboutInput.value;
    toggleOpenPopup();
}

aboutButton.addEventListener("click", toggleOpenPopup);
closeButton.addEventListener("click", toggleOpenPopup);
formElement.addEventListener('submit', handleFormSubmit);



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
        popup.classList.add('popup_opened');
        popup.classList.remove('popup_closed');
        modal = 'open';
    } else {
        popup.classList.add('popup_closed');
        popup.classList.remove('popup_opened');
        modal = 'closed';
    }
    nameInput.value = profileName.textContent;
    aboutInput.value = profileInfo.textContent;
}



const handleAboutButtonClick = () => {
    toggleOpenPopup();
}

const handleCloseButtonClick = () => {
    toggleOpenPopup();
}



const handleOverlyClick = (event) => {
    if (event.target === event.currentTarget) {
        toggleOpenPopup();
    }
}

aboutButton.addEventListener("click", handleAboutButtonClick);
closeButton.addEventListener("click", handleCloseButtonClick);
popup.addEventListener('click', handleOverlyClick);

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileInfo.textContent = aboutInput.value;
    toggleOpenPopup();
}

formElement.addEventListener('submit', handleFormSubmit);

const items = document.querySelectorAll('.element__logo');

items.forEach(item => {
  item.addEventListener('click', function() {
    items.forEach(elem => elem.classList.remove('active'));
    this.classList.add('active');
  });
});
import { formValidator, defaultState } from './validate.js';

import { Card, initialCards } from './constants.js';

//открытие/закрытие формы для редактирования профиля
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup-edit');
const buttonEditClose = document.querySelector('.popup__close');
// редактирование профиля
const popupFormEditProfile = document.querySelector('.popup__form-edit');
const popupName = document.querySelector('.popup__name_input_value');
const popupJob = document.querySelector('.popup__name_input_about');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__about');
// открытие/закрытие формы для добавления карточек 
const popupAdd = document.querySelector('.popup_add');
const openButtonAdd = document.querySelector('.profile__add-button');
const buttonAddClose = document.querySelector('.popup__add-close');
// инициализация карточек
const tempalate = document.querySelector('.template').content;
const elements = document.querySelector('.elements');
const elementsList = elements.querySelector('.elements__list');
// добавление карточек
const title = document.querySelector('.popup__name_input_title');
const popupFormAddProfile = document.querySelector('.popup__form-add');
const link = document.querySelector('.popup__name_input_link');
const containerAdd = document.querySelector('.popup__container_add');
// popupZoom
const popupZoomImage = document.querySelector('.popup-window');
const windowImage = document.querySelector('.popup__window-image');
const popupZoomTitle = document.querySelector('.popup__zoom-title');
const buttonWindowClose = document.querySelector('.popup__window-close');
const validateEdit = new formValidator(defaultState, popupFormEditProfile);
const validateAdd = new formValidator(defaultState, popupFormAddProfile);

function closePopup(element) {
    element.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEsc);
}

function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened')
        closePopup(popupOpened);
    }
}

function openPopup(element) {
    validateAdd.enableValidation();
    validateEdit.enableValidation();
    element.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
}

function openPopupEdit() {
    popupName.value = profileName.textContent;
    popupJob.value = profileJob.textContent;
    openPopup(popupEditProfile);
}

function submiteEditForm(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    closePopup(popupEditProfile);
}

function openZoomImage() {
    openPopup(popupZoomImage);
    windowImage.src = this.link;
    windowImage.alt = this.name;
    popupZoomTitle.textContent = this.name;
}

function submiteCreateForm(evt) {
    evt.preventDefault();
    const elementImage = new Card(link.value, title.value, tempalate, popupZoomImage);
    const addCardNew = elementImage.generateCard();
    elementsList.prepend(addCardNew);
    closePopup(popupAdd);
    evt.target.reset();
}

const popupList = Array.from(document.querySelectorAll('.popup'));
popupList.forEach((elem) => {
    elem.addEventListener('click', (evt) => {
        closePopup(evt.target)
    });
})

buttonWindowClose.addEventListener('click', () => {
    closePopup(popupZoomImage)
})

containerAdd.addEventListener('submit', submiteCreateForm);
popupFormEditProfile.addEventListener('submit', submiteEditForm);
buttonOpenPopupProfile.addEventListener('click', openPopupEdit);
buttonEditClose.addEventListener('click', () => {
    closePopup(popupEditProfile)
})

initialCards.forEach((item) => {
    const card = new Card(item.link, item.name, tempalate, openZoomImage);
    const createCard = card.generateCard();
    elementsList.append(createCard);
}) 

openButtonAdd.addEventListener('click', () => {
    openPopup(popupAdd);
})

buttonAddClose.addEventListener('click', () => {
    closePopup(popupAdd)
})









import { FormValidator } from './FormValidator.js'

import { initialCards } from './constants.js';

import { Card } from './Card.js';

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
const buttonAddCard = document.querySelector('.profile__add-button');
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
const zoomPopupImage = document.querySelector('.popup-window');
const windowImage = document.querySelector('.popup__window-image');
const popupZoomTitle = document.querySelector('.popup__zoom-title');
const buttonWindowClose = document.querySelector('.popup__window-close');

const defaultState = {
    inputSelector: '.popup__name',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__no-submit',
    inputErrorClass: 'popup__name_type_error',
    errorClass: 'error-text_active'
}

const validateEdit = new FormValidator(defaultState, popupFormEditProfile);
const validateAdd = new FormValidator(defaultState, popupFormAddProfile);

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
    element.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
}

function openPopupEdit() {
    popupName.value = profileName.textContent;
    popupJob.value = profileJob.textContent;
    validateEdit.enableValidation();
    openPopup(popupEditProfile);
}

function submiteEditForm(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    closePopup(popupEditProfile);
}

function openZoomImage(name, link) {
    openPopup(zoomPopupImage);
    windowImage.src = link;
    windowImage.alt = name;
    popupZoomTitle.textContent = name;
}

function generateCard(cardLink, cardTitle, cardTemplate) {
    const elementImage = new Card(cardLink, cardTitle, cardTemplate, openZoomImage);
    return elementImage.generateCard();
}

function submitCreateForm(evt) {
    evt.preventDefault();
    const addCardNew = generateCard(link.value, title.value, tempalate, zoomPopupImage);
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
    closePopup(zoomPopupImage)
})

containerAdd.addEventListener('submit', submitCreateForm);
popupFormEditProfile.addEventListener('submit', submiteEditForm);
buttonOpenPopupProfile.addEventListener('click', openPopupEdit);
buttonEditClose.addEventListener('click', () => {
    closePopup(popupEditProfile)
})

initialCards.forEach((item) => {
    const card = generateCard(item.link, item.name, tempalate, openZoomImage);
    elementsList.append(card);
})

buttonAddCard.addEventListener('click', () => {
    validateAdd.enableValidation();
    openPopup(popupAdd);
})

buttonAddClose.addEventListener('click', () => {
    closePopup(popupAdd)
})
import './index.css';
import  FormValidator  from '../scripts/components/FormValidator.js';
import { initialCards, defaultState } from '../utils/constants.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage  from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';

//открытие/закрытие формы для редактирования профиля
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup-edit');
// редактирование профиля
const popupFormEditProfile = document.querySelector('.popup__form-edit');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__about');
// открытие/закрытие формы для добавления карточек 
const popupAdd = document.querySelector('.popup_add');
const buttonAddCard = document.querySelector('.profile__add-button');
// инициализация карточек
const tempalate = document.querySelector('.template').content;
const elements = document.querySelector('.elements');
const elementsList = elements.querySelector('.elements__list');
// добавление карточек
const popupFormAddProfile = document.querySelector('.popup__form-add');
// popupZoom
const zoomPopupImage = document.querySelector('.popup-window');
const buttonWindowClose = document.querySelector('.popup__window-close');

const validateEdit = new FormValidator(defaultState, popupFormEditProfile);
validateEdit.enableValidation();
const validateAdd = new FormValidator(defaultState, popupFormAddProfile);
validateAdd.enableValidation();

const userInfo = new UserInfo({userName:profileName, userJob:profileJob})
const handleEdditProfile = (data) => {
    userInfo.setUserInfo(data.name, data.job);
    formEdit.close();
}

const handleAddProfile  = (data) => {
    renderCard(data);
    formAdd.close();
}

const formEdit = new PopupWithForm(popupEditProfile, handleEdditProfile)
formEdit.setEventListeners();

const formAdd = new PopupWithForm(popupAdd, handleAddProfile)
formAdd.setEventListeners();

const zoomImage = new PopupWithImage(zoomPopupImage);
zoomImage.setEventListeners();
const openZoomImage = (link, name) => zoomImage.open(link, name);

const renderCard = (items) => {
    section.addItem(generateCard(items));
}

function generateCard(data) {
    const card = new Card(data.link, data.name, tempalate, openZoomImage);
    const cardElement = card.generateCard();
    return cardElement;
}

const section = new Section({ items:initialCards, renderer:renderCard }, elementsList ) 
section.renderedItems();

buttonWindowClose.addEventListener('click', () => {
    closePopup(zoomPopupImage)
})

buttonOpenPopupProfile.addEventListener('click', () => {
    formEdit.open(); 
    formEdit.setInputValues(userInfo.getUserInfo());
});

buttonAddCard.addEventListener('click', () => {
    formAdd.open();
    validateAdd.toggleButtonState();
})
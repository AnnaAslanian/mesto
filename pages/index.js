import  FormValidator  from '../scripts/components/FormValidator.js'
import { initialCards, defaultState } from '../scripts/constants.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage  from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';

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


const validateEdit = new FormValidator(defaultState, popupFormEditProfile);
validateEdit.enableValidation();
const validateAdd = new FormValidator(defaultState, popupFormAddProfile);
validateAdd.enableValidation();

const userInfo = new UserInfo({userName:popupName, userJob:popupJob})
const handleEdditProfile = (data) => {
    userInfo.setUserInfo(data.name, data.job);
    formEdit.close();
}


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

const handleAddProfile  = (data) => {
    renderCard(data);
    formAdd.close();
}

const formEdit = new PopupWithForm(popupEditProfile, handleEdditProfile)
formEdit.setEventListeners();

const formAdd = new PopupWithForm(popupAdd, handleAddProfile)
formAdd.setEventListeners();

buttonOpenPopupProfile.addEventListener('click', () => {
    formEdit.open(); 
    formEdit.setInputValues(userInfo.getUserInfo());
});

buttonAddCard.addEventListener('click', () => {
    formAdd.open();
    validateAdd.toggleButtonState();
})


// Функция сохранения карточек
// function submitCreateForm(evt) {
    //     evt.preventDefault();
    //     const addCardNew = generateCard(link.value, title.value, tempalate, zoomPopupImage);
    //     elementsList.prepend(addCardNew);
    //     closePopup(popupAdd);
    //     evt.target.reset();
    // }
    // containerAdd.addEventListener('submit', submitCreateForm);

// initialCards.forEach((item) => {
//     const card = generateCard(item.link, item.name, tempalate, openZoomImage);
//     elementsList.append(card);
// })



// function closePopup(element) {
//     element.classList.remove('popup_opened');
//     document.removeEventListener('keydown', closePopupEsc);
// }

// function closePopupEsc(evt) {
//     if (evt.key === 'Escape') {
//         const popupOpened = document.querySelector('.popup_opened')
//         closePopup(popupOpened);
//     }
// }

// function openPopup(element) {
//     element.classList.add('popup_opened');
//     document.addEventListener('keydown', closePopupEsc);
// }

// function openPopupEdit() {
//     popupName.value = profileName.textContent;
//     popupJob.value = profileJob.textContent;
//     validateEdit.enableValidation();
//     openPopup(popupEditProfile);
// }

// function submiteEditForm(evt) {
//     evt.preventDefault();
//     profileName.textContent = popupName.value;
//     profileJob.textContent = popupJob.value;
//     closePopup(popupEditProfile);
// }



// function submitCreateForm(evt) {
//     evt.preventDefault();
//     const addCardNew = generateCard(link.value, title.value, tempalate, zoomPopupImage);
//     elementsList.prepend(addCardNew);
//     closePopup(popupAdd);
//     evt.target.reset();
// }

// const popupList = Array.from(document.querySelectorAll('.popup'));
// popupList.forEach((elem) => {
//     elem.addEventListener('click', (evt) => {
//         closePopup(evt.target)
//     });
// })



// containerAdd.addEventListener('submit', submitCreateForm);
// popupFormEditProfile.addEventListener('submit', submiteEditForm);
// buttonOpenPopupProfile.addEventListener('click', openPopupEdit);
// buttonEditClose.addEventListener('click', () => {
//     closePopup(popupEditProfile)
// })

// initialCards.forEach((item) => {
//     const card = generateCard(item.link, item.name, tempalate, openZoomImage);
//     elementsList.append(card);
// })



// buttonAddClose.addEventListener('click', () => {
//     closePopup(popupAdd)
// })



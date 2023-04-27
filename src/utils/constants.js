const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

  const validationConfig = {
    inputSelector: '.popup__name',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__no-submit',
    inputErrorClass: 'popup__name_type_error',
    errorClass: 'error-text_active'
}


export {
  initialCards,
  validationConfig,
  buttonProfile,
  popupEdit,
  profileJob,
  profileName,
  avatarProfile, 
  template, 
  cardsContainer, 
  popupCard, 
  buttonCard, 
  popupWindow, 
  formAdd,
  formEdit, 
  popupAvatar,
  buttonAvatar,
  formAvatar,
  popupDeleteCard,
  buttonLoadingCard,
  buttonLoading};


const buttonProfile = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".popup-edit");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__about");
const avatarProfile = document.querySelector(".profile__logo");
const template = document.querySelector(".template").content.querySelector(".element");
const cardsContainer = document.querySelector(".elements__list");
const popupCard = document.querySelector(".popup_add");
const buttonCard = document.querySelector(".profile__add-button");
const popupWindow = document.querySelector(".popup-window");
const formAdd = document.querySelector(".popup__form-add");
const formEdit = document.querySelector(".popup__form-edit");
const popupAvatar = document.querySelector(".edit-avatar");
const buttonAvatar = document.querySelector(".profile__avatar-edit");
const formAvatar = document.querySelector(".popup__form-avatar");
const popupDeleteCard = document.querySelector(".popup_delete-card");
const buttonLoading = document.querySelector(".popup__edit-save");
const buttonLoadingCard = document.querySelector(".popup__add-save");
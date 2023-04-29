import './index.css';
import  FormValidator  from '../scripts/components/FormValidator.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage  from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from "../scripts/components/Api.js"
import PopupDelete from "../scripts/components/PopupDelete.js"

import {
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
    popupDeleteCard} from "../utils/constants.js"


    const validateEdit = new FormValidator(validationConfig, formEdit);
    validateEdit.enableValidation()
    const validateAdd = new FormValidator(validationConfig, formAdd);
    validateAdd.enableValidation()
    const validateAvatar = new FormValidator(validationConfig, formAvatar);
    validateAvatar.enableValidation();
    
    let userId;

const api = new Api({
    url: "https://mesto.nomoreparties.co/v1/cohort-64",
    headers: {
      authorization: "7cf989fb-78d7-4f6e-a4e2-acdd5898437e",
      "content-type": "application/json",
    },
  });
  const userInfo = new UserInfo({ nameUser: profileName, jobUser: profileJob, avatar: avatarProfile });
  
  function handleFormEditProfile(input) {
    formPopupEdit.renderLoading('Сохранение...')
    api.getEditUser(input)
      .then((res) => {
        userInfo.setUserInfo(res);
        formPopupEdit.close();
      })
      .catch((err) => console.log(`Ошибка ${err}`))
      .finally(() => formPopupEdit.renderLoading()
  )};

  const formPopupEdit = new PopupWithForm(popupEdit, handleFormEditProfile);
  formPopupEdit.setEventListeners();
  
  function handleFormEditAvatar(link) {
    formPopupAvatar.renderLoading('Сохранение...')
    api
      .getEditAvatar(link)
      .then((res) => {
        userInfo.setUserInfo(res);
      })
      .then(() => formPopupAvatar.close())
      .catch((err) => console.log(`Ошибка ${err}`))
      .finally(() => {
        formPopupAvatar.renderLoading();
      });
  };
 
  const sectionAdd = new Section(
    {
      renderer: (data) => {
        cardsContainer.prepend(createCard(data));
      },
    },
    cardsContainer
  );
  
  Promise.all([api.getInitialUser(), api.getInitialCards()])
  .then(([infoUser, cards]) => {
    userInfo.setUserInfo(infoUser);
    userId = infoUser._id;
    cards.reverse().map((item) => sectionAdd.addItem(createCard(item, userId)));
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });
  
  const openZoomImage = (link, name) => popupImage.open(link, name);
  
  function createCard(data) {
    const card = new Card(data.link, data.name, template, openZoomImage, handleDeleteCard, data.owner, userId, data._id, like, deleteLike, data.likes);
    const elementCreateCard = card.generateCard();
    return elementCreateCard;
  }
  
  function handleDeleteCard(id, card) {
    popupDelete.setConfirmation(() => {
      api
        .deleteCards(id)
        .then(() => {
          card.remove();
          popupDelete.close();
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    });
    popupDelete.open();
  }

  function handleFormSubmitAddCard(data) {
    popupAdd.renderLoading('Сохранение...')
    api
      .getAddCard(data)
      .then((res) => {
        sectionAdd.addItem(createCard(res, res.owner._id));
      })
      .then(() => popupAdd.close())
      .catch((err) => console.log(`Ошибка ${err}`))
      .finally(() => {
        popupAdd.renderLoading();
      });
  }

  function like(card, likeId) {
    api
      .addLike(likeId)
      .then((res) => {
        card.showLikes(res.likes);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }
  
  function deleteLike(card, likeId) {
    api
      .deleteLike(likeId)
      .then((res) => {
        card.showLikes(res.likes);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }
  
  buttonCard.addEventListener("click", () => {
    popupAdd.open();
    validateAdd.toggleButtonState();
  });
  
  buttonProfile.addEventListener("click", () => {
    formPopupEdit.open();
    formPopupEdit.setInputValues(userInfo.getUserInfo());
  });
  
  buttonAvatar.addEventListener("click", () => {
    formPopupAvatar.open();
    validateAvatar.toggleButtonState();
  });
  
  const formPopupAvatar = new PopupWithForm(popupAvatar, handleFormEditAvatar);
  formPopupAvatar.setEventListeners();
  const popupImage = new PopupWithImage(popupWindow);
  popupImage.setEventListeners();
  const popupAdd = new PopupWithForm(popupCard, handleFormSubmitAddCard);
  popupAdd.setEventListeners();
  const popupDelete = new PopupDelete(popupDeleteCard);
  popupDelete.setEventListeners();
 // открытие/закрытие формы для редактирования профиля
const openButtonEditProfile = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup-edit');
const closeButton = document.querySelector('.popup__close');
// редактирование профиля
const popupFormEditProfile = document.querySelector('.popup__form');
const popupName = document. querySelector('.popup__name_input_value');
const popupJob = document.querySelector('.popup__name_input_about');
const profileName = document. querySelector('.profile__name');
const profileJob = document.querySelector('.profile__about');
// открытие/закрытие формы для добавления карточек 
const popupAdd = document.querySelector('.popup_add');
const openButtonAdd = document.querySelector('.profile__add-button');
const closeButtonAdd = document.querySelector('.popup__add-close');
// инициализация карточек
const tempalate = document.querySelector('.template').content;
const elements = document.querySelector('.elements');
const elementsList = elements.querySelector('.elements__list');
// добавление карточек
const title = document.querySelector('.popup__name_input_title');
const link = document.querySelector('.popup__name_input_link');
const containerAdd = document.querySelector('.popup__container_add');
// popupZoom
const popupZoomImage = document.querySelector('.popup-window');
const windowImage = document.querySelector('.popup__window-image');
const popupZoomTitle = document.querySelector('.popup__zoom-title');
const closeButtonWindow = document.querySelector('.popup__window-close')

function closePopup (element) {
  element.classList.remove('popup_opened');
}
function openPopup (element) {
  element.classList.add('popup_opened');
}
const openPopupEdit = () => {
    openPopup (popupEditProfile);
    const name = profileName.textContent;
    const job = profileJob.textContent;
    popupName.value = name;
    popupJob.value = job;
}
function submiteEditForm(evt) {
    evt.preventDefault (); 
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    closePopup(popupEditProfile);
}
function createCard(nameValue, linkValue) {
    const elementsItem = tempalate.querySelector('.element').cloneNode(true);
    elementsItem.querySelector('.element__name').textContent = nameValue;
    elementsItem.querySelector('.element__delete').addEventListener('click', function (){
      elementsItem.remove();
    });
    elementsItem.querySelector('.element__logo').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__logo_active');
    });
    const elementsImage = elementsItem.querySelector('.element__img');
    elementsImage.src = linkValue;
    elementsImage.alt = nameValue;
    elementsImage.addEventListener('click', (evt) => {
      openPopup(popupZoomImage);
      const windowCard = evt.target;
      windowImage.src = windowCard.src;
      windowImage.alt = nameValue;
      popupZoomTitle.textContent = nameValue;
    });
    return elementsItem;
};
initialCards.forEach((card) => {
  const addCardNew = createCard(card.name, card.link);
  elementsList.append(addCardNew);
});
function submiteCreateForm(evt) {
    evt.preventDefault();
    const addCardNew = createCard(title.value, link.value);
    evt.target.reset();
    elementsList.prepend(addCardNew);
    closePopup(popupAdd);
};
closeButtonWindow.addEventListener('click', () => {closePopup(popupZoomImage)});
containerAdd.addEventListener('submit', submiteCreateForm);
popupFormEditProfile.addEventListener('submit', submiteEditForm); 
openButtonEditProfile.addEventListener('click', openPopupEdit);
closeButton.addEventListener('click', () => {closePopup(popupEditProfile)});
openButtonAdd.addEventListener('click', () => {openPopup(popupAdd)});
closeButtonAdd.addEventListener('click', () => {closePopup(popupAdd)});

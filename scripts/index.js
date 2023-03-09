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
const popupEditSubmit = document.querySelector('.popup__edit-save');
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
const popupAddSubmit = document.querySelector('.popup__add-save');
// popupZoom
const popupZoomImage = document.querySelector('.popup-window');
const windowImage = document.querySelector('.popup__window-image');
const popupZoomTitle = document.querySelector('.popup__zoom-title');
const buttonWindowClose = document.querySelector('.popup__window-close');

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

const openPopupEdit = () => {
    popupName.value = profileName.textContent;
    popupJob.value = profileJob.textContent;
    resetValidation(popupFormEditProfile, popupEditSubmit);
    openPopup(popupEditProfile);
}

function submiteEditForm(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileJob.textContent = popupJob.value;
    closePopup(popupEditProfile);
}

function createCard(nameValue, linkValue) {
    const elementsItem = tempalate.querySelector('.element').cloneNode(true);
    elementsItem.querySelector('.element__name').textContent = nameValue;
    elementsItem.querySelector('.element__delete').addEventListener('click', function () {
        elementsItem.remove();
    });
    elementsItem.querySelector('.element__logo').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__logo_active');
    });

    const elementsImage = elementsItem.querySelector('.element__img');
    elementsImage.src = linkValue;
    elementsImage.alt = nameValue;
    elementsImage.addEventListener('click', (evt) => {
        const windowCard = evt.target;
        windowImage.src = windowCard.src;
        windowImage.alt = nameValue;
        popupZoomTitle.textContent = nameValue;
        openPopup(popupZoomImage);
    });
    return elementsItem;
}

initialCards.forEach((card) => {
    const addCardNew = createCard(card.name, card.link);
    elementsList.append(addCardNew);
})

function submiteCreateForm(evt) {
    evt.preventDefault();
    const addCardNew = createCard(title.value, link.value);
    elementsList.prepend(addCardNew);
    closePopup(popupAdd);
    evt.target.reset();
}

const popupList = Array.from(document.querySelectorAll('.popup'));
popupList.forEach((elem) => {
    elem.addEventListener("click", (evt) => {
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

openButtonAdd.addEventListener('click', () => {
    openPopup(popupAdd);
})

buttonAddClose.addEventListener('click', () => {
    closePopup(popupAdd)
})

 
  
export { Card, initialCards };

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

  class Card {
     constructor(link, name, templateSelector, popupZoomImage) {
      this.link = link;
      this.name = name;
      this._tempalate = templateSelector;
      this._popupZoomImage = popupZoomImage;
     }

     _getTemplate() {
      this._cardElement = this._tempalate.querySelector('.element').cloneNode(true);
      return this._cardElement;
     }

     _setEventListeners() {
      this._element.querySelector('.element__logo').addEventListener('click', (evt) => {
        evt.target.classList.toggle('element__logo_active');
      })

      this._element.querySelector('.element__delete').addEventListener('click',  () => {
        this._element.closest('.element').remove();
     })

      this._element.querySelector('.element__img').addEventListener('click', () => {
        this._popupZoomImage();
      })
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementPhotoCard = this._element.querySelector('.element__img');
    this._element.querySelector('.element__name').textContent = this.name;
    this._elementPhotoCard.src = this.link;
    this._elementPhotoCard.alt = this.name;
    this._setEventListeners();

    return this._element;
  }
}
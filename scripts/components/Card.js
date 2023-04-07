 export default class Card {
    constructor(link, name, templateSelector, zoomPopupImage) {
     this._link = link;
     this._name = name;
     this._tempalate = templateSelector;
     this._zoomPopupImage = zoomPopupImage;
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
       this._element = null;
    })

     this._element.querySelector('.element__img').addEventListener('click', () => {
       this._zoomPopupImage(this._name, this._link);
     })
 }

 generateCard() {
   this._element = this._getTemplate();
   this._elementPhotoCard = this._element.querySelector('.element__img');
   this._elementPhotoCard.src = this._link;
   this._elementPhotoCard.alt = this._name;
   this._element.querySelector('.element__name').textContent = this._name;
   this._setEventListeners();
   return this._element;
 }
}

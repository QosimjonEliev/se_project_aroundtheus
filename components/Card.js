  class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _handleCardImage = (e) => {
    imgPreviewModal.src = this._link;
    imgPreviewModal.alt = this._name;
    previewDescriptionModal.textContent = this._name;
    openModal(previewModal);
  };

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeButton() {
    this._cardElement
      .querySelector(`.card__like-button`)
      .classList.toggle(`.card__like-button_active`);
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(`.card__like-button`)
      .addEventListener(`click`, () => {
        this._handleLikeButton();
      });

    this._cardElement
      .querySelector(`.card__delete-button`)
      .addEventListener(`click`, () => {
        this._handleDeleteCard();
      });
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(`.card`)
      .cloneNode(true);
    this._setEventListeners();
    this._cardImageEl = this._cardElement.querySelector(".cards__image");
    this._cardTitleEl = this._cardElement.querySelector(".cards__title");
    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(".card__image").alt = this._name;
    this._cardElement.querySelector(".card__title").textContent = this._name;
    return this._cardElement;
  }
}
export default Card;
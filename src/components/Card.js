class Card {
  constructor({ name, link, liked, _id }, cardSelector, handleCardImage, handleDelete, userId, handleLikeClick, isLiked ) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardImage = handleCardImage;
    this._handleDeleteCard = handleDelete;
    this._userId = userId;
    this._cardId = _id;
    this._liked = liked; 
    this._handlelikeClick = handleLikeClick;
    this._isLiked = isLiked;
  }

  handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeButton() {
    this._cardElement
      .querySelector(`.card__like-button`)
      .classList.toggle(`card__like-button_active`);
  }

  _setEventListeners() {
    this._cardElement.querySelector(".card__image").addEventListener("click", () => {
      this._handleCardImage({name: this._name, link: this._link});
    });

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

    updateLikes(isLiked) {
    this._isLiked = isLiked;
    this._renderLike();
  }

  _renderLike() {
    if(this._isLiked){
   this._cardLikeButton.classList.add(`card__like-button_active`)
  } else {
    this._cardLikeButton.classList.remove(`card__like-button_active`)
  }
}


  _getTemplate() {
    this._cardElement = document
    .querySelector(this._cardSelector)
    .content.querySelector(`.card`)
    .cloneNode(true);
    return this._cardElement;
  }


  getView() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();
    this._renderLikes();
    this._cardLikeButton =
    this._cardElement.querySelector(".card__like-button");
    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(".card__image").alt = this._name;
    this._cardElement.querySelector(".card__title").textContent = this._name;
    return this._cardElement;
  }
}
export default Card;
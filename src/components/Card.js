class Card {
  constructor( {
    name, 
    link,  
    _id,
    isLiked,
  },
    cardSelector,
    handleCardImage,
    handleDelete,
    userId,
    handleCardLike,

  ) {
    this._name = name;
    this._link = link;
    this._cardId = _id;
    this._cardIsLiked = isLiked;
    this._cardSelector = cardSelector;
    this._handleCardImage = handleCardImage;
    this._handleDeleteCard = handleDelete;
    this._userId = userId;
    this._handleCardLike = handleCardLike

  }

  getView() {
    this._cardElement = this._getTemplate();
    this._cardLikeButton = this._cardElement.querySelector(".card__like-button");
    this._setEventListeners();
    this._cardElement.querySelector(".card__like-button");
    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(".card__image").alt = this._name;
    this._cardElement.querySelector(".card__title").textContent = this._name;
    return this._cardElement;
  }

  renderLikes() {
    if (this._cardIsLiked) {
      this._cardLikeButton.classList.add("card__like-button_active");
    } else {
      this._cardLikeButton.classList.remove("card__like-button_active");
    }
  }

  updateIsLiked(isLiked) {
    this._cardIsLiked = isLiked;
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

    this._cardLikeButton.addEventListener("click", () => {
      this._handleCardLike(this._cardID).then(() => {
        this.renderLikes(this._cardIsLiked);
      });
    });

    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardImage({ name: this._name, link: this._link });
      });

    this._cardElement
      .querySelector(`.card__delete-button`)
      .addEventListener(`click`, () => {
        this._handleDeleteCard();
      });
  }

  _getTemplate() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(`.card`)
      .cloneNode(true);
    return this._cardElement;
  }

}
export default Card;
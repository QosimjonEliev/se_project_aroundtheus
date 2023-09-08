class Card {
  constructor( {
    name, 
    link,  
    isLiked,
    _id,
  },
    cardSelector,
    handleCardImage,
    handleDelete,
    userId,
    handleCardLike,

  ) {
    this._name = name;
    this._link = link;
    this._isLiked = isLiked;
    this._cardId = _id;
    this._cardSelector = cardSelector;
    this._handleCardImage = handleCardImage;
    this._handleDeleteCard = handleDelete;
    this._userId = userId;
    this._handleCardLike = handleCardLike

  }

  getView() {
    this._cardElement = this._getTemplate();
    this._handleCardDeleteButton = this._cardElement.querySelector(".card__delete-button");
    this._cardLikeButton = this._cardElement.querySelector(".card__like-button");
    this._setEventListeners();
    this.renderLikes();
    this._cardElement.querySelector(".card__like-button");
    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(".card__image").alt = this._name;
    this._cardElement.querySelector(".card__title").textContent = this._name;
    return this._cardElement;
  }

  renderLikes() {
    if (this._isLiked ) {
      this._cardLikeButton.classList.add("card__like-button_active");
    } else {
      this._cardLikeButton.classList.remove("card__like-button_active");
    }
  }

  updateIsLiked(isLiked) {
    this._isLiked  = isLiked;
    this.renderLikes();
  }

  handleDeleteCard() {
    this._cardElement.remove();
  }


  _handleLikeButton() {
    this._cardElement
      .querySelector(`.card__like-button`)
      .classList.toggle(`card__like-button_active`);
  }

  _setEventListeners() {

    this._cardLikeButton.addEventListener("click", () => {
      this._handleCardLike(this)
  });

    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardImage({ name: this._name, link: this._link });
      });

      this._handleCardDeleteButton.addEventListener("click", () => {
        this._handleDeleteCard(this);
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
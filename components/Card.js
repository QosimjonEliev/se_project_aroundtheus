import { openPopup } from "../utils/utils.js";

import {
  imagePreview,
  imgPreviewTitle,
  imgPreviewModal,
} from "../pages/index.js";

class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _handleCardImage = (e) => {
    imagePreview.src = this._link;
    imagePreview.alt = this._name;
    imgPreviewTitle.textContent = this._name;

    openPopup(imgPreviewModal);
  };

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleLikeButton() {
    this._cardElement
      .querySelector(`.card__like-button`)
      .classList.toggle(`card__like-button_active`);
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => this._handleCardImage());

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
    this._cardElement.querySelector(".card__image").src = this._link;
    this._cardElement.querySelector(".card__image").alt = this._name;
    this._cardElement.querySelector(".card__title").textContent = this._name;
    return this._cardElement;
  }
}
export default Card;

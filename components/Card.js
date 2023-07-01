export default class Card {
    constructor({name, link }, cardSelector) {
        this.name = name;
        this.link = link;
        this._cardSelector = cardSelector;
    }

    _setEventListner() {

        this.cardElement
        .querySelector(".card__like-button")
        .addEventListener("click", () => {
            this._handleLikeButton();
        });
        this.cardElement
        .querySelector(".card__delete-button")
        .addEventListener("click", () => {
            this._handleDeleteButton();
        });

    }

        _handleLikeButton() {
          this._cardElement
           .querySelector(".card__like-button")
           .classlist.toggle("card__like-button_active");
        }

        _handleDeleteButton() {
            this.cardElement.remove();
        }

        getView() {
            this.cardElement = document
            .querySelector(this._cardSelector)
            .content.querySelector(".card")
            .cloneNode(true);



            this._cardImageEl = this._cardElement.querySelector(".cards__image");
            this._cardTitleEl = this._cardElement.querySelector(".cards__title");
            this._cardImageEl.src = this._link;
            this._cardImageEl.alt = this._name;
            this._setEventListeners();
            this._cardTitleEl.textContent = this._name;
        
            return this._cardElement;

        }   
    }
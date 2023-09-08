import Popup from "./Popup";

export default class PopupWithCardDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._submitButton = this._popupForm.querySelector(".modal__button");
    this._deleteCardButton = this._popupElement.querySelector("#modal__card-delete-button");
  }

  setSubmitAction(action) {
    this._handleFormSubmit = action;
  }

  renderLoading(isLoading, loading = "Saving...") {
    if (isLoading) {
      this._submitButton.textContent = loading;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();
    this._handleFormSubmit();
  }


  setEventListeners() {
    super.setEventListeners();
    this._deleteCardButton.addEventListener("click", this._handleSubmit);
  }
}

import Popup from "./Popup";

export default class PopupWithCardDelete extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._submitButton = this._popupForm.querySelector(".modal__button");
    //this._submitButtonText = this._submitButton.textContent;
    this._deleteCardButton = this._popupElement.querySelector(".modal__card-delete-button");
  }

  renderLoading(isLoading, loading = "Saving...") {
    if (isLoading) {
      this._submitButton.textContent = loading;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  _handleSubmit() {
    this._handleFormSubmit();
  }

  setSubmitAction(action) {
    this._handleFormSubmit = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._deleteCardButton.addEventListener("click", this._handleSubmit);
  }
}

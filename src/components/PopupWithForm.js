import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super( popupSelector );
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._submitButton = this._popupForm.querySelector(".modal__button");
    this._submitButtonText = this._submitButton.textContent;
  }

  renderLoading(isLoading, loading = 'Saving...') {
    if (isLoading) {
      this._submitButton.textContent = loading;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
    }


  close() {
    this._popupForm.reset();
    super.close();
  }
  _getInputValues() {
    const inputObj = {};
    this._inputList = document.querySelectorAll(".modal__name");
    this._inputList.forEach((input) => {
      if (input.value !== "") {
        inputObj[input.name] = input.value;
      }
    });
    return inputObj;
  }
  _submitForm = () => {
    const inputValues = this._getInputValues();
    this._handleFormSubmit(inputValues);
  };

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
      this.close();
    });
  }
}
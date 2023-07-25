import Popup from "./Popup.js";

export default class PopupwithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._viewImage = document.querySelector(".modal__image-preview");
    this._viewImageCaption = document.querySelector(".modal__image-title");
  }

  open({ name, link }) {
    this._viewImage.alt = name;
    this._viewImageCaption.textContent = name;
    this._viewImage.src = link;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.querySelector("click", this._viewImageClick);
  }
}
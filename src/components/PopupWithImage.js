import Popup from "./Popup.js";

 class PopupwithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open( name, link ) {
    const image = this._viewImage = document.querySelector(".modal__image-preview");
    this._viewImageCaption = document.querySelector(".modal__image-title").textContent = name;
    image.src = link;
    image.alt = `${name}`;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.querySelector("click", this._viewImageClick);
  }
}
export default PopupwithImage;
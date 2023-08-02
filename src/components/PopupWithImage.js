import Popup from "./Popup.js";

 class PopupwithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popupElement.querySelector(".modal__image-preview");
    this._title = this._popupElement.querySelector(".modal__image-title");
  }

  open(data) {
    this._title.textContent = data.name;
    this._image.src = data.link;
    this._image.alt = data.link;
    super.open();
  }

  //setEventListeners() {
   // super.setEventListeners();
   // this._popupElement.querySelector("click", this._viewImageClick);
  //}
}
export default PopupwithImage;
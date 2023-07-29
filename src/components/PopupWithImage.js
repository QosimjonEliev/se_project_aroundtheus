import Popup from "./Popup.js";

 class PopupwithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    const image = this._popupElement.querySelector(".modal__image-preview");
    const title = this._popupElement.querySelector(".modal__image-title");
    image.src = link;
    image.alt = name;
    title.textContent = name;
    super.open();
  }

  //setEventListeners() {
   // super.setEventListeners();
   // this._popupElement.querySelector("click", this._viewImageClick);
  //}
}
export default PopupwithImage;
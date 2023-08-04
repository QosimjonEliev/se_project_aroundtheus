import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "./index.css";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  profileEditButton,
  profileTitle,
  profileDescription,
  profileTitleInput,
  profileDescriptionInput,
  profileEditForm,
  addNewCardButton,
  addCardForm,
  addCardTitleInput,
  addCardUrlInput,
  cardsWrap,
  config,
  imagePreview,
  imgPreviewTitle,
} from "../utils/constants.js";


const addCardFormEl = document.querySelector("#add-card-modal");
const addCardValidator = new FormValidator(config, addCardFormEl);
addCardValidator.enableValidation();

const profileEditCardFormEl = document.querySelector("#profile-edit-modal");
const addProfileValidator = new FormValidator(config, profileEditCardFormEl);
addProfileValidator.enableValidation();

const previewImagePopup = new PopupWithImage(`#preview-image-modal`);
previewImagePopup.setEventListeners();

const userInfo = new UserInfo({
  userNameSelector: ".profile__name",
  userDescriptionSelector: ".profile__description",
});

function renderCard (cardData) {
  const card = new Card(cardData, "#card-template",  handleCardImage);
  return card.getView();
}
function handleCardImage(name, link) {
  previewImagePopup.open(name, link);
}

function handleProfileEditClick() {
  const info = userInfo.getUserInfo();
  profileTitleInput.value = info.userName;
  profileDescriptionInput.value = info.userDescription;
  profileEditPopup.open();
}

/*Event Handlers*/
function handleProfileEditSubmit(inputValues) {
  userInfo.setUserInfo(inputValues);
  profileEditPopup.close();
}

const profileEditPopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);

const addCardPopup = new PopupWithForm(
  "#add-card-modal",
  handleAddCardFormSubmit
);

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const cardElement = renderCard(data);
      cardSection.addItem(cardElement);
    },
},
cardsWrap
);
cardSection.renderItems(initialCards);


/*Event Listners*/
profileEditButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  profileTitleInput.value = userData.userName;
  profileDescriptionInput.value = userData.userDescription;
  addProfileValidator.toggleButtonState();
  profileEditPopup.open();
});
profileEditPopup.setEventListeners();
addCardPopup.setEventListeners();
previewImagePopup.setEventListeners();

function handleAddCardFormSubmit(inputValues) {
  const {name, link} = inputValues;
  renderCard({name, link});
  addCardPopup.close();
}


  addNewCardButton.addEventListener("click", () => {
    addCardValidator.toggleButtonState();
    addCardPopup.open();
  });


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
  profileAvatarButton
} from "../utils/constants.js";

import PopupWithCardDelete from "../components/PopupWithCardDelete.js";
import Api from "../components/Api.js";

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "b316ef3e-b4c0-4fe5-a1ba-6f1194cf61a8",
    "Content-Type": "application/json",
  },
});
let cardSection;
let userId; 

Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([userData, initialCards]) => {
  userId = userData._id;
  userInfo.setUserInfo(userData.name, userData,description);
  userInfo.setAvatarInfo(userData.avatar);
})
.catch((err) => {
  console.log(err);
});

const cardsSection = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const cardElement = renderCard(data);
      cardsSection.addItem(cardElement);
    },
  },
  cardsWrap
);
cardsSection.renderItems(initialCards);

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
  userProfileSelector: ".profile__image",
});

function renderCard(cardData) {
  const card = new Card(cardData, "#card-template", handleCardImage, handleDelete,);
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
  const { name, link } = inputValues;
  const card = renderCard({ name, link });
  cardSection.addItem(card);
  addCardPopup.close();
}

addNewCardButton.addEventListener("click", () => {
  addCardValidator.toggleButtonState();
  addCardPopup.open();
});


function handleAvatarImage() {
  avatarFormPopup.renderLoading();
  api
    .avatarInformation()
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .then(() => {
      avatarFormPopup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      avatarFormPopup.renderLoading(false);
    });
}

const avatarFormPopup = new PopupWithForm(".avatar__modal", handleAvatarImage);

profileAvatarButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  profileTitleInput.value = userData.userName;

  avatarFormPopup.open();
});
avatarFormPopup.setEventListeners();

const cardDeletePositiv = new PopupWithCardDelete("#card-delet-modal",
handleDelete);

function handleDelete (cardId) {
  console.log(cardId);
  cardDeletePositiv.setSubmitAction(() => {
    cardDeletePositiv.renderLoading();
    api
    .deleteCardInformation()
    .then((res) => {
      cardId.remove(res._id);
    })
    .then(() => {
      cardDeletePositiv.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      cardDeletePositiv.renderLoading(false);
    });
  });
  cardDeletePositiv.open
}
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
/*Functions*/
/*function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;
  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEl.addEventListener("click", () => {
    imagePreview.src = cardData.link;
    imagePreview.alt = cardData.name;
    imgPreviewTitle.textContent = cardData.name;    
    openPopup(imgPreviewModal);
  });

  return cardElement;
}*/
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
//const addCardPopup = new PopupWithForm(
 // "#add-card-modal",
 // handleAddCardFormSubmit
//);

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


//const previewImagePopup = new PopupWithImage("#preview-image-modal");
//const cardSection = new Section({
 // items: initialCards,
  //renderer: (cardData) => {
   // const card = createCard(cardData);
    //cardSection.additem(card)
    //const newCard = renderCard(cardData);
    //cardSection.addItem(newCard);
  //},
//});

/* Close by click & Escape button 
function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscape);
  modal.removeEventListener("mousedown", handleModalClose);
}
function openPopup(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscape);
  modal.addEventListener("mousedown", handleModalClose);
}

function handleEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".modal_opened");
    closePopup(openedPopup);
  }
}

function handleModalClose(evt, modal) {
  if (
    evt.target.classList.contains("modal__close") ||
    evt.target.classList.contains("modal_opened")
  ) {
    closePopup(evt.currentTarget);
  }
}*/

/*Event Listners*/
profileEditButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  profileTitleInput.value = userData.userName;
  profileDescriptionInput.value = userData.userDescription;
  addProfileValidator.toggleButtonState();
  //openPopup(profileEditModal);
  profileEditPopup.open();
});
profileEditPopup.setEventListeners();
addCardPopup.setEventListeners();
previewImagePopup.setEventListeners();

function handleAddCardFormSubmit(inputValues) {
  const {name, link} = inputValues;
  renderCard({name, link});
  //const name = addCardTitleInput.value;
  //const link = addCardUrlInput.value;
 // const cardData = {
  //  name: name,
   // link: link,
  //};
 // const newCard = createCard(cardData);
  //cardSection.addItem(newCard);
  // const { name, link } = inputValues;
  // evt.preventDefault();
  //const name = addCardTitleInput.value;
  //const link = addCardUrlInput.value;
  //renderCard({ name, link });
  addCardPopup.close();
}


//function renderCard(cardData) {
 // const cardElement = createCard(cardData);
 // cardsWrap.prepend(cardElement);
//}

//profileEditForm.addEventListener("submit", handleProfileEditSubmit);
//profileEditButton.addEventListener("click", () => profileEditPopup.open());
//add new card button
//addCardForm.addEventListener("submit", handleAddCardFormSubmit);
  //toggleButtonState([addCardTitleInput, addCardUrlInput], cardFormSubmitButton, config);
  // openPopup(addCardModal)
  addNewCardButton.addEventListener("click", () => {
    addCardValidator.toggleButtonState();
    addCardPopup.open();
  });

//initialCards.forEach((cardData) => {
 // renderCard(cardData);
//});
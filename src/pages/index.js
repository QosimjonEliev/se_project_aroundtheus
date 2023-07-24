
import Card from "../components/Card.js";
import  {
  openPopup,
  closePopup,
} from  "../utils/utils.js";
import FormValidator  from "../components/FormValidator.js";
import "../pages/index.css";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import Section from "../scripts/Section.js"
import UserInfo from "../scripts/UserInfo.js";


const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__name",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const addCardFormEl = document.querySelector("#add-card-modal");
const addCardValidator = new FormValidator(config, addCardFormEl);
addCardValidator.enableValidation();


const profileEditCardFormEl = document.querySelector("#profile-edit-modal");
const addProfileValidator = new FormValidator(config, profileEditCardFormEl);
addProfileValidator.enableValidation();


const previewImagePopup = new PopupWithImage (`#preview-image-modal`);
previewImagePopup.setEventListeners();

const userInfo = new UserInfo({
  userNameEl: ".profile__name",
  userdescriptionEl: ".profile__description",
});

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg ",
  },
];
console.log(initialCards);

function createCard(cardData) {
  const card = new Card(cardData, "#card-template");
  return card.getView();
}



const modals = Array.from(document.querySelectorAll(".modal"));
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditCloseButton = profileEditModal.querySelector(
  "#modal-edit-close-button"
);
const profileTitle = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-name-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
//Add card
const addNewCardButton = document.querySelector(".profile__add-button");
const addCardModal = document.querySelector("#add-card-modal");
const addCardForm = document.querySelector("#modal_add-card-form");
const addCardCloseButton = addCardModal.querySelector(
  "#modal-card-close-button"
);
const cardFormSubmitButton = document.querySelector("#modal__button-add")
const addCardTitleInput = document.querySelector("#add-card-title-input");
const addCardUrlInput = document.querySelector("#add-card-link-input");
//preview Image
export const imgPreviewModal = document.querySelector("#preview-image-modal");
export const imagePreview = imgPreviewModal.querySelector(".modal__image-preview");
export const imgPreviewTitle = document.querySelector(".modal__image-title");
const imgPreviewCloseButton = imgPreviewModal.querySelector(
  "#modal-preview-close-button"
);
const previewDescriptionModal = imgPreviewModal.querySelector(".modal__label");
const cardsWrap = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
/*Functions*/
function renderCard(cardData) {
  const cardElement = createCard(cardData);
  cardsWrap.prepend(cardElement);
}

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

/*Event Handlers*/
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}



const profileEditPopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);
const addCardPopup = new PopupWithForm("#add-card-modal", handleAddCardFormSubmit);
//const previewImagePopup = new PopupWithImage("#preview-image-modal");


const cardSection = new Section(
  {
    items: initialCards,renderer: (data) => {
      const newCard = renderCard(data);
      cardSection.additem(newCard);
    }
  }
);

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
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  addProfileValidator.toggleButtonState();
  openPopup(profileEditModal);
});
profileEditPopup.setEventListeners();
addCardPopup.setEventListeners();
//previewImagePopup.setEventListeners();

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const name = addCardTitleInput.value;
  const link = addCardUrlInput.value;
  renderCard({ name, link });
  closePopup(addCardModal);
  addCardForm.reset();
  addCardValidator.toggleButtonState();
}

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
profileEditButton.addEventListener("click", () => openPopup(profileEditModal));

//add new card button
addCardForm.addEventListener("submit", handleAddCardFormSubmit);
addNewCardButton.addEventListener("click", () => {
  //toggleButtonState([addCardTitleInput, addCardUrlInput], cardFormSubmitButton, config);
  openPopup(addCardModal)}
);
initialCards.forEach((cardData) => {
 renderCard(cardData);
});

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
  "#modal-card-close-button");
const addCardTitleInput = document.querySelector("#add-card-title-input");
const addCardUrlInput = document.querySelector("#add-card-link-input");

const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
/*Functions*/
function closePopop(modal) {
  modal.classList.remove("modal_opened");
}

//function openPopop(){
//profileTitleInput.value = profileTitle.textContent;
//profileDescriptionInput.value = profileDescription.textContent;

//profileEditModal.classList.add("modal_opened");
//}

function openPopop(modal) {
  modal.classList.add("modal_opened");
}

function getCardElement(cardData) {
  //clone the template element with all its content and store it
  const cardElement = cardTemplate.cloneNode(true);
  //access the card title and image and store them in variables
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  //set the path to the image to the link field of the object
  cardImageEl.src = cardData.link;
  //set the image alt text to the name field of the object
  cardImageEl.alt = cardData.name;
  //set the card title to the name field of the object, too
  cardTitleEl.textContent = cardData.name;
  //return the ready HTML element with the filled-in datafunction closePopup() {
  return cardElement;
}

/*Event Handlers*/
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopop();
}

/*Event Listners*/
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;

  profileEditModal.classList.add("modal_opened");
});

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const name = addCardTitleInput.value;
  const link = addCardUrlInput.value;
  renderCard({name, link}, cardsWrap);
  closeModal(addCardModal);
}

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
profileEditButton.addEventListener("click", () => openPopop(profileEditModal));
profileEditCloseButton.addEventListener("click", () =>
  closePopop(profileEditModal)
);

//add new card button
addCardForm.addEventListener("submit", handleAddCardFormSubmit);
addNewCardButton.addEventListener("click", () => openPopop(addCardModal));
addCardCloseButton.addEventListener("click", () =>
closePopop(addCardModal)
);
initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});

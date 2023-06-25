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
  "#modal-card-close-button"
);
const cardFormSubmitButton = document.querySelector("#modal__button-add")
const addCardTitleInput = document.querySelector("#add-card-title-input");
const addCardUrlInput = document.querySelector("#add-card-link-input");
//preview Image
const imgPreviewModal = document.querySelector("#preview-image-modal");
const imagePreview = imgPreviewModal.querySelector(".modal__image-preview");
const imgPreviewCloseButton = imgPreviewModal.querySelector(
  "#modal-preview-close-button"
);
const imgPreviewTitle = document.querySelector(".modal__image-title");

const cardsWrap = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
/*Functions*/
function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

function openPopup(modal) {
  modal.classList.add("modal_opened");
}

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardsWrap.prepend(cardElement);
}

function getCardElement(cardData) {
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
    openPopup(document.querySelector("#preview-image-modal"));
  });

  return cardElement;
}

/*Event Handlers*/
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profileEditModal);
}

function closeOverlay(e) {
  if (e.target === profileEditCloseButton || e.target === profileEditModal) {
    closePopup(profileEditModal);
  }
  if (e.target === addCardCloseButton || e.target === addCardModal) {
    closePopup(addCardModal);
  }
  if (e.target === imgPreviewCloseButton || e.target === imgPreviewModal){
    closePopup(imgPreviewModal);
  }
}

function escKeyClose(e) {
  if (e.key === "Escape") {
    closePopup(profileEditModal);
  }
  if (e.key === "Escape") {
    closePopup(addCardModal);
  }
  if (e.key === "Escape") {
    closePopup(imgPreviewModal);
  }
}
document.addEventListener("keydown", escKeyClose);
document.addEventListener("click", closeOverlay);


/*Event Listners*/
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopup(profileEditButton);
});

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const name = addCardTitleInput.value;
  const link = addCardUrlInput.value;
  renderCard({ name, link }, cardsWrap);
  addCardForm.reset();
  closePopup(addCardModal);
}

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
profileEditButton.addEventListener("click", () => openPopup(profileEditModal));
profileEditCloseButton.addEventListener("click", () =>
  closePopup(profileEditModal)
);

imgPreviewCloseButton.addEventListener("click", () =>{
  closePopup(imgPreviewModal);
});

//add new card button
addCardForm.addEventListener("submit", handleAddCardFormSubmit);
addNewCardButton.addEventListener("click", () => {
  toggleButtonState([addCardTitleInput, addCardUrlInput], cardFormSubmitButton, config);
  openPopup(addCardModal)}
);
addCardCloseButton.addEventListener("click", () => closePopup(addCardModal));
initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardsWrap.prepend(cardElement);
});

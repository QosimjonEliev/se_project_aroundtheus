export const config = {
    formSelector: ".modal__form",
    inputSelector: ".modal__name",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible",
  };



  export const initialCards = [
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

  
export const modals = Array.from(document.querySelectorAll(".modal"));
export const profileEditButton = document.querySelector("#profile-edit-button");
export const profileEditModal = document.querySelector("#profile-edit-modal");
export const profileEditCloseButton = profileEditModal.querySelector(
  "#modal-edit-close-button"
);
export const profileTitle = document.querySelector(".profile__name");
export const profileDescription = document.querySelector(".profile__description");
export const profileTitleInput = document.querySelector("#profile-name-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
export const profileEditForm = profileEditModal.querySelector(".modal__form");
//Add card
export const addNewCardButton = document.querySelector(".profile__add-button");
export const addCardModal = document.querySelector("#add-card-modal");
export const addCardForm = document.querySelector("#modal_add-card-form");
export const addCardCloseButton = addCardModal.querySelector(
  "#modal-card-close-button"
);
export const cardFormSubmitButton = document.querySelector("#modal__button-add")
export const addCardTitleInput = document.querySelector("#add-card-title-input");
export const addCardUrlInput = document.querySelector("#add-card-link-input");
//preview Image
export const imgPreviewModal = document.querySelector("#preview-image-modal");
export const imagePreview = imgPreviewModal.querySelector(".modal__image-preview");
export const imgPreviewTitle = document.querySelector(".modal__image-title");
export const imgPreviewCloseButton = imgPreviewModal.querySelector(
  "#modal-preview-close-button"
);
export const previewDescriptionModal = imgPreviewModal.querySelector(".modal__label");
export const cardsWrap = document.querySelector(".cards__list");
export const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
export const profileAvatarButton = document.querySelector(".profile__avatar-select");
export const submitDeleteButton = document.querySelector(".modal__card-delete-button");
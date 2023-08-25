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
  profileAvatarButton,
  submitDeleteButton,
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
//let cardSection;
let userId;

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, ]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData.name, userData.about);
    userInfo.setAvatarInfo(userData.avatar);
  })
  .catch((err) => {
    console.log(err);
  });

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
  const card = new Card(
    cardData,
    "#card-template",
    handleCardImage,
    handleDelete
  );
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
  profileEditPopup.renderLoading(true)
  api
  .updateProfileInfo(inputValues.name, inputValues.about )
  .then(() => {
    userInfo.setUserInfo(inputValues.name, inputValues.about);
    profileEditPopup.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    profileEditPopup.renderLoading(false);
  });
}

const profileEditPopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);

const addCardPopup = new PopupWithForm(
  "#add-card-modal",
  handleAddCardFormSubmit,
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
  api
  .addNewCardInformation(inputValues.name, inputValues.link)
  .then(() => {
    const addCard = renderCard(addCard.getView());
    addCardPopup.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    addCardPopup.renderLoading(false);
  });
}


addNewCardButton.addEventListener("click", () => {
  addCardValidator.toggleButtonState();
  addCardPopup.open();
});

function handleAvatarImage(inputValues) {
  avatarInformation.renderLoading(true);
  api
    .avatarInformation(inputValues.avatar)
    .then((res) => {
      userInfo.setUserInfo(res);
    })
    .then(() => {
      avatarInformation.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      avatarInformation.renderLoading(false);
    });
}

const avatarInformation = new PopupWithForm(
  ".avatar__modal",
  handleAvatarImage
);

profileAvatarButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  profileTitleInput.value = userData.userName;

  avatarInformation.open();
});
avatarInformation.setEventListeners();

const cardDeletePositiv = new PopupWithCardDelete(
  "#card-delet-modal",
  handleDelete
);

function handleDelete(cardId) {
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
  cardDeletePositiv.open();
}

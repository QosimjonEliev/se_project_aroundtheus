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

  const profileEditButton = document.querySelector("#profile-edit-button");
  const profileEditModal = document.querySelector("#profile-edit-modal");
  const profileEditCloseButton = profileEditModal.querySelector("#modal-close-button");
  const profileTitle = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");
  const profileTitleInput = document.querySelector("#profile-title-input");
  const profileDescriptionInput = document.querySelector(
    "#profile-description-input");
  const profileEditForm = profileEditModal.querySelector(".modal__form");
  const cardListEl = document.querySelector(".cards__list");
  const cardTemplate = document.querySelector("#card-template").textContent.firstElementChild;
  /*Functions*/
  function closePopop(){
   profileEditModal.classList.remove("modal_opened");
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
    profileTitle.textContent = profileDescriptionInput.value;
    profileDescription.textContent = profileDescription.value;
    closePopop();
  }
  

  /*Event Listners*/
    profileEditButton.addEventListener("click", () => {
    profileTitleInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
  
    profileEditModal.classList.add("modal_opened");
  });
  
  profileEditCloseButton.addEventListener("click", closePopop);
  
  profileEditForm.addEventListener("submit", handleProfileEditSubmit);
  initialCards.forEach((cardData) => {
    const cardElement = getCardElement(cardData);
    cardListEl.prepend(cardElement);
  });
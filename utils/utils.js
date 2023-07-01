/* Close by click & Escape button*/ 
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
  }
  export{openPopup, closePopup, handleEscape, handleModalClose};
// enabling validation by calling enableValidation()
// pass all the settings on call
function showError(formEl, inputEl, { inputErrorClass, errorClass }) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(errorClass);
  }
  function hideError(formEl, inputEl, { inputErrorClass, errorClass }) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.remove(inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(errorClass);
  }

  
function checkInputValidity(formEl, inputEl, content) {
    if (!inputEl.validity.valid) {
      showError(formEl, inputEl, content);
    } else {
      hideError(formEl, inputEl, content);
    }
  }



function setEventListeners(formEl, options) {
    const {inputSelector} = options;
    const inputEls = [...formEl.querySelectorAll(inputSelector)];
    inputEls.forEach((inputEl) => {
        inputEl.addEventListener("input", (e)=> {
            checkInputValidity(formEl, inputEl, options);
        });
      });
    }
    function hasInvalidInput(inputList) {
        return !inputList.every((inputEl) => inputEl.validity.valid);
      }


function enableValidation(options) {
    const formEls =[...document.querySelectorAll(options.formSelector)];
    formEls.forEach((formEl) =>{
        formEl.addEventListener("submit", (e) =>{
            e.preventDefault();
        });

        setEventListeners(formEl, options);
    });
}



const config = {
    formSelector: ".modal__form",
    inputSelector: ".modal__name",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  };

enableValidation(config);
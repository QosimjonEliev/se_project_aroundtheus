export default class UserInfo {
  constructor({ userNameSelector, userDescriptionSelector }) {
    this._nameElement = document.querySelector(userNameSelector);
    this._descriptionElement = document.querySelector(userDescriptionSelector);
  }

  getUserInfo() {
    return {
      userName: this._nameElement.textContent,
      userDescription: this._descriptionElement,
    };
  }

  setUserInfo({ userName, userDescription }) {
    this._nameElement.textContent = userName;
    this._descriptionElement.textContent = userDescription;
  }
}
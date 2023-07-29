export default class UserInfo {
  constructor({ userNameEl, userDescriptionEl }) {
    this._nameElement = userNameEl;
    this._descriptionElement = userDescriptionEl;
  }

  getUserInfo() {
    return {
      userName: this._nameElement.textContent,
      userdescription: this._descriptionElement,
    };
  }

  setUserInfo({ title, description }) {
    this._nameElement.textContent = title;
    this._descriptionElement.textContent = description;
  }
}

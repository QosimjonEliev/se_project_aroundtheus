export default class UserInfo {
  constructor({ userNameSelector, userDescriptionSelector }) {
    this._nameElement = document.querySelector(userNameSelector);
    this._descriptionElement = document.querySelector(userDescriptionSelector);
  }
  
  setUserInfo({ name, description }) {
    this._nameElement.textContent = name;
    this._descriptionElement.textContent = description;
  }

  getUserInfo() {
    const userInfo = {
      userName: this._nameElement.textContent,
      userDescription: this._descriptionElement.textContent,
    };
    return userInfo;
  }


}
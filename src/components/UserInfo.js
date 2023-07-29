export default class UserInfo {
  constructor({ userNameSelector, userDescriptionSelector }) {
    this._nameElement = document.querySelector(userNameSelector);
    this._descriptionElement = document.querySelector(userDescriptionSelector);
  }
  
  setUserInfo({ userName, userDescription }) {
    this._nameElement.textContent = userName;
    this._descriptionElement.textContent = userDescription;
  }

  getUserInfo() {
    const userInfo = {
      userName: this._nameElement.textContent,
      userDescription: this._descriptionElement,
    };
    return userInfo;
  }


}
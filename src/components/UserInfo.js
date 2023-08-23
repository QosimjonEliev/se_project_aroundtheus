export default class UserInfo {
  constructor({ userNameSelector, userDescriptionSelector, userProfileSelector}) {
    this._nameElement = document.querySelector(userNameSelector);
    this._descriptionElement = document.querySelector(userDescriptionSelector);
    this._userAvatarElement = document.querySelector(userProfileSelector);
  }
  
  setUserInfo(name, about) {
    this._nameElement.textContent = name;
    this._descriptionElement.textContent = about;
  }

  getUserInfo() {
    const userInfo = {
      userName: this._nameElement.textContent,
      userDescription: this._descriptionElement.textContent,
    };
    return userInfo;
  }

  setAvatarInfo(avatar) {
    this._userAvatarElement.src = avatar;
  }

}
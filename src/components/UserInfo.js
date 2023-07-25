export default class UserInfo {
    constructor({ userNameEl, userdescriptionEl}) {
        this._nameElement = userNameEl;
        this._descriptionElement = userdescriptionEl;
    }

    getUserInfo() {
        return {
            userName: this._nameElement.textContent,
            userdescription: this._descriptionElement
        };
    }

    setUserInfo({title, description}){
        this._nameElement.textContent = title;
        this._descriptionElement.textContent = description;
    }
}
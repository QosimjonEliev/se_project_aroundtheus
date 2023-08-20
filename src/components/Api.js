export default class Api { 
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
    }

    _request(url, options) {
        return fetch(url, options).then(this._checResponse);
    }

    getUserInfo(){
        return this._request(`${this._baseUrl}/users/me`, {
          headers: this._headers,
        }).finally(() => {
          console.log("Done with user info");
        });
      }
      getInitialCards() {
        return this._request(`${this._baseUrl}/cards`, {headers: this._headers })
        .then((result) => {
            return result;
        })
        .finally(() => {
            console.log("Don with initial cards");
        });
      }

      updateProfileInfo(inputValues) {
        return fetch(`${this._baseUrl}/users/me`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({
            name: inputValues.name,
            about: inputValues.about,
          }),
        }).then(this._checkResponse);
      }

      avatarInformation(inputValues) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({ avatar: inputValues }),
        }).then(this._checkResponse);
      }
    
      addNewCardInformation({ name, link }) {
        return this._request(`${this._baseUrl}/cards`, {
          method: "POST",
          headers: this._headers,
          body: JSON.stringify({
            name,
            link,
          }),
        })
          .then((response) => {
            return response;
          })
          .finally(() => {
            console.log("Done adding New Card Information from Server");
          });
      }

      deleteCardInformation(cardId) {
        return this._request(`${this._baseUrl}/cards/${cardId}`, {
          method: "DELETE",
          headers: this._headers,
        })
          .then((res) => {
            return this._checkResponse(res);
          })
          .finally(() => {
            console.log("Done deleting card");
          });
      }

      likesAddInformation(cardId) {
        return this._request(`${this._baseUrl}/cards/likes/${cardId}`, {
          method: "PUT",
          headers: this._headers,
        });
      }
      likesRemoveInformation(cardId) {
        return this._request(`${this._baseUrl}/cards/likes/${cardId}`, {
          method: "DELETE",
          headers: this._headers,
        });
      }
    }


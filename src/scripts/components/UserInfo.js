export default class UserInfo {
  constructor({ nameUser, jobUser, avatar }) {
    this._nameUser = nameUser;
    this._jobUser = jobUser;
    this._avatar = avatar;
  }

  getUserInfo() {
    return {
      name: this._nameUser.textContent,
      about: this._jobUser.textContent,
    };
  }
  
  setUserInfo({ name, about, avatar }) {
    this._nameUser.textContent = name;
    this._jobUser.textContent = about;
    this._avatar.src = avatar;
  }
}

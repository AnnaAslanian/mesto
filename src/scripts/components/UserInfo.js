export default class UserInfo {
    // Принимает объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе
    constructor({ userName, userJob }) {
      this._name = userName;
      this._job = userJob;
    }
    // Метод возвращает объект с данными пользователя
    getUserInfo() {
      return {
        name: this._name.textContent,
        job: this._job.textContent
      };
    }
    // Метод принимает новые данные пользователя и добавляет их на страницу
    setUserInfo( name, job ) {
      this._name.textContent = name;
      this._job.textContent = job;
    }
  }

import { makeAutoObservable } from "mobx";

class Settings {
  language = localStorage.getItem("lang");
  sign = localStorage.getItem("sign");

  constructor() {
    makeAutoObservable(this);
  }

  setLanguage() {
    if (this.language === "en") {
      localStorage.setItem("lang", "ru");
      localStorage.setItem("sign", "₽");
      this.language = localStorage.getItem("lang");
      this.sign = localStorage.getItem("sign");
    } else {
      localStorage.setItem("lang", "en");
      localStorage.setItem("sign", "$");
      this.language = localStorage.getItem("lang");
      this.sign = localStorage.getItem("sign");
    }
  }
}
export default new Settings();

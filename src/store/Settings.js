import { makeAutoObservable } from "mobx";

class Settings {
  language = "en";
  sign = "$";

  constructor() {
    makeAutoObservable(this);
  }

  setLanguage() {
    if (this.language === "en") {
      this.language = "ru";
      this.sign = "₽";
    } else {
      this.language = "en";
      this.sign = "$";
    }
  }
}
export default new Settings();

import { makeAutoObservable } from "mobx";

class Text {
  settings = {
    en: "Settings",
    ru: "Настройки",
  };

  constructor() {
    makeAutoObservable(this);
  }
}
export default new Text();

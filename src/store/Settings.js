import { makeAutoObservable } from "mobx";
import i18n from "../i18n";

class Settings {
  storageName = "userSettings";
  languages = [
    {
      id: 0,
      name: "Русский",
      tag: "ru",
      sign: "₽",
    },
    {
      id: 1,
      name: "English",
      tag: "en",
      sign: "$",
    },
    {
      id: 2,
      name: "French",
      tag: "fr",
      sign: "$",
    },
  ];
  store = {
    languageID: 0,
  };

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Settings initialization
   */
  init() {
    let store;
    let currentLS = JSON.parse(localStorage.getItem(this.storageName));
    currentLS
      ? (store = JSON.parse(localStorage.getItem(this.storageName)))
      : localStorage.setItem(this.storageName, JSON.stringify(this.store));
    this.setStore(store);
    i18n.changeLanguage(this.languageTag);
  }

  /**
   * Change user language
   * @param {*} direction
   */
  changeLanguage(direction) {
    let store = this.store;
    switch (direction) {
      case "left":
        store.languageID === 0
          ? (store.languageID = this.languages.length - 1)
          : store.languageID--;
        localStorage.setItem(this.storageName, JSON.stringify(store));
        i18n.changeLanguage(this.languageTag);
        this.setStore(store);
        break;
      case "right":
        store.languageID === this.languages.length - 1
          ? (store.languageID = 0)
          : store.languageID++;
        localStorage.setItem(this.storageName, JSON.stringify(store));
        i18n.changeLanguage(this.languageTag);
        this.setStore(store);
        break;
      default:
        this.setStore(store);
        break;
    }
  }

  get languageName() {
    return this.languages[this.store.languageID].name;
  }

  get languageTag() {
    return this.languages[this.store.languageID].tag;
  }

  get languageSign() {
    return this.languages[this.store.languageID].sign;
  }

  setStore(store) {
    this.store = store;
  }
}
export default new Settings();

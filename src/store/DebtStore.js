import React from 'react'
import { makeObservable, observable, computed, action, makeAutoObservable } from "mobx"

class DebtStore {
  store = { id: 0, name: '', value: 0, type: '' }
  inputValue = 0
  inputName = ''

  constructor() {
    makeAutoObservable(this)
  }

  setInputValue(value) {
    this.inputValue = value
    //console.log(this.inputValue);
  }

  setInputName(name) {
    this.inputName = name
  }


}

export default new DebtStore()
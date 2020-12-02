import React from 'react'
import { makeObservable, observable, computed, action, makeAutoObservable } from "mobx"

class Debt {
  store = {
    should: [
      { id: 0, title: '', sum: 0, completed: false }],
    owe: [
      { id: 0, title: '', sum: 0, completed: false }]
  }
  inputSum = 0
  inputTitle = ''

  constructor() {
    makeAutoObservable(this)
  }

  setInputValue(sum) {
    this.inputSum = sum
  }

  setInputName(title) {
    this.inputTitle = title
  }

  addShould(should) {
    this.should.push(should)
  }

  addOwe(owe) {
    this.owe.push(owe)
  }


}

export default new Debt()
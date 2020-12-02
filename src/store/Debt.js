import React from 'react';
import { makeAutoObservable, observable, computed, action } from 'mobx';

class Debt {
  store = [
    { id: 'waknf', title: 'Testing', sum: 0, completed: false, owe: true },
    { id: '124512', title: 'Пизда', sum: 1000, completed: true, owe: true },
    { id: 'wakfefwefnf', title: 'first', sum: 0, completed: false, owe: false },
    { id: 'dasfknads', title: 'Пизда', sum: 0, completed: false, owe: false },
    { id: '214234', title: 'Пизда', sum: 0, completed: false, owe: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  add(item, type) {
    if (type === 'owe') {
      this.store.push({ ...item, owe: true });
    } else {
      this.store.push(item);
    }
  }

  deleteItem(id) {
    this.store = this.store.filter((el) => {
      return el.id !== id;
    });
  }

  get oweList() {
    return this.store.filter((el) => el.owe);
  }

  get shouldList() {
    return this.store.filter((el) => !el.owe);
  }

  get oweTotal() {
    return this.store.reduce((sum, elem) => {
      if (elem.owe) sum += elem.sum
      return sum
    }, 0)
  }

  get shouldTotal() {
    return this.store.reduce((sum, elem) => {
      if (!elem.owe) sum += elem.sum
      return sum
    }, 0)
  }

  get allTotal() {
    return Math.abs(this.shouldTotal - this.oweTotal)
  }
}
export default new Debt();

import React from 'react';
import { makeAutoObservable, observable, computed, action } from 'mobx';

class Debt {
  should = [
    { id: 'dasfknads', title: 'Пизда', sum: 0, completed: false },
    { id: '214234', title: 'Пизда', sum: 0, completed: false },
  ];
  owe = [
    { id: 'waknf', title: 'Testing', sum: 0, completed: false },
    { id: '124512', title: 'Пизда', sum: 1000, completed: true },
    { id: 'wakfefwefnf', title: 'first', sum: 0, completed: false },
  ];

  inputSum = 0;
  inputTitle = '';

  constructor() {
    makeAutoObservable(this);
  }

  add(item, type) {
    if (type === 'owe') {
      this.owe.push(item);
    } else this.should.push(item);
  }

  // addOwe(owe) {
  //   this.owe.push(owe);
  // }

  deleteItem(id) {
    this.owe = this.owe.filter((el) => {
      return el.id !== id;
    });
    this.should = this.should.filter((el) => {
      return el.id !== id;
    });
  }
}
export default new Debt();

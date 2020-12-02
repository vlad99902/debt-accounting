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

  addShould(should) {
    this.should.push(should);
  }

  addOwe(owe) {
    this.owe.push(owe);
  }
}

export default new Debt();

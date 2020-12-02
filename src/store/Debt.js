import React from 'react';
import { makeAutoObservable, observable, computed, action } from 'mobx';

class Debt {
  should = [{ id: 'dasfknads', title: '', sum: 0, completed: false }];
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
    console.log(owe);
    console.log(this.owe);
    this.owe.push(owe);
  }

  deleteOwe(id) {
    console.log('KEKW');
    console.log('KEKW ITS ID:', id);
    this.owe = this.owe.filter(el => {
      console.log('EL.ID in DEBT', el.id);
      return el.id !== id
    })
    console.log('this state: ', this.owe);
  }
}
export default new Debt();

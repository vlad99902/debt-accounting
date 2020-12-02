import { makeAutoObservable } from 'mobx';

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
    this.setStore(
      this.store.filter((el) => {
        return el.id !== id;
      }),
    );
  }

  setCompleted(id) {
    let store = this.store;
    const index = this.store.findIndex((el) => el.id === id);
    store[index].completed = !store[index].completed;
    this.setStore(store);
  }

  get oweList() {
    return this.store.filter((el) => el.owe);
  }

  get shouldList() {
    return this.store.filter((el) => !el.owe);
  }

  get oweTotal() {
    return this.store.reduce((sum, elem) => {
      if (elem.owe && !elem.completed) sum += elem.sum;
      return sum;
    }, 0);
  }

  get shouldTotal() {
    return this.store.reduce((sum, elem) => {
      if (!elem.owe && !elem.completed) sum += elem.sum;
      return sum;
    }, 0);
  }

  get allTotal() {
    return Math.abs(this.shouldTotal - this.oweTotal);
  }

  setStore(store) {
    this.store = store;
  }
}
export default new Debt();

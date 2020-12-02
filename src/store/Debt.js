import { makeAutoObservable } from 'mobx';

class Debt {
  store = [
    { id: 'waknf', title: 'Testing', sum: 0, completed: false, owe: true },
    { id: '124512', title: 'test2', sum: 1000, completed: true, owe: true },
    { id: 'sadasd', title: 'Testing', sum: 3000, completed: true, owe: true },
    { id: '112', title: 'test4', sum: 2000, completed: true, owe: true },
    { id: 'wakfefwefnf', title: 'first', sum: 0, completed: false, owe: false },
    { id: 'dasfknads', title: 'Пизда', sum: 0, completed: false, owe: false },
    { id: '214234', title: 'Пизда', sum: 0, completed: false, owe: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  add(item, type) {
    let store = this.store;
    if (type === 'owe') {
      store.push({ ...item, owe: true });
    } else {
      store.push(item);
    }
    this.setStore(store);
  }

  deleteItem(id) {
    this.setStore(
      this.store.filter((el) => {
        return el.id !== id;
      }),
    );
  }

  changeCompleted(id) {
    let store = this.store;
    const index = this.store.findIndex((el) => el.id === id);
    store[index].completed = !store[index].completed;
    this.setStore(store);
  }

  sortListByCompleted(array) {
    return array.sort((a, b) => {
      return a.completed && !b.completed ? 1 : -1;
    });
  }
  // sortListBySum(array) {
  //   return array.sort((a, b) => {
  //     return a.sum < !b.sum ? 1 : -1;
  //   });
  // }

  get oweList() {
    return this.sortListByCompleted(this.store.filter((el) => el.owe));
  }

  get shouldList() {
    return this.sortListByCompleted(this.store.filter((el) => !el.owe));
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

import { makeAutoObservable } from 'mobx';
import request from '../functions/request';

import { ObjectID } from 'mongodb';

class Debt {
  store = [];

  isAuth = false;
  email = '';
  token = '';
  userId = '';
  loading = false;
  storageName = 'userData';

  constructor() {
    makeAutoObservable(this);
  }

  *init() {
    this.setLoading(true);
    try {
      const data = JSON.parse(localStorage.getItem(this.storageName));
      if (data && data.token) {
        this.setToken(data.token);
        this.setIsAuth(true);
        this.setUserId(data.userId);
        this.setEmail(data.email);
        //TODO fetch start info
        yield this.getAllDebts();
      }
    } catch (error) {
      console.log('token was not found');
    } finally {
      this.setLoading(false);
    }
  }

  /**
   * Lohin user in system if user not authorized
   * @param {*} email
   * @param {*} password
   */

  *login({ email, password }) {
    this.setLoading(true);
    try {
      const data = yield request('/api/auth/login', 'POST', '', {
        email,
        password,
      });
      this.setEmail(email);
      this.setUserId(data.userId);
      this.setToken(data.token);
      localStorage.setItem(
        this.storageName,
        JSON.stringify({
          email: this.email,
          userId: this.userId,
          token: this.token,
        }),
      );
      this.setIsAuth(true);

      //TODO Fetch needed info
      this.getAllDebts();
    } catch (error) {
      throw new Error(error.message);
    } finally {
      this.setLoading(false);
    }
  }

  /**
   * Registration request
   * @param {*} param0
   */

  *register({ email, password }) {
    this.setLoading(true);
    try {
      const data = yield request('/api/auth/register', 'POST', '', {
        email,
        password,
      });
      this.setEmail(email);
      this.setUserId(data.userId);
      this.setToken(data.token);
      localStorage.setItem(
        this.storageName,
        JSON.stringify({
          email: this.email,
          userId: this.userId,
          token: this.token,
        }),
      );
      this.setIsAuth(true);

      //TODO Fetch needed info
    } catch (error) {
      throw new Error(error.message);
    } finally {
      this.setLoading(false);
    }
  }

  /**
   * Get debts from db by user
   */

  *getAllDebts() {
    try {
      const debts = yield request('/api/debt', 'GET', this.token);
      this.setStore(debts);
    } catch (error) {
      console.log(error);
    } finally {
    }
  }

  /**
   * Adding new item to localstore and send on server
   * @param {*} item
   */
  *add(item) {
    try {
      const debtId = new ObjectID().toString();

      const dataToSend = { _id: new ObjectID(debtId), ...item };
      yield request('/api/debt/add', 'POST', this.token, {
        dataToSend,
      });

      let store = this.store;
      store.push({ _id: debtId, ...item });
      this.setStore(store);
    } catch (e) {
      console.log('mistake here', e);
    }
  }

  /**
   * Delete item by id
   * @param {*} id
   */

  *deleteItem(id) {
    try {
      yield request(`/api/debt/:${id}`, 'DELETE', this.token, {
        _id: id,
      });

      let store = this.store;
      store = store.filter((el) => {
        return el._id !== id;
      });
      this.setStore(store);
    } catch (e) {
      console.log('mistake here', e);
    }
  }

  *updateItem(item) {
    try {
      yield request(`/api/debt/:${item._id}`, 'PUT', this.token, {
        item,
      });

      let store = this.store;
      store = store.map((el) => {
        if (el._id === item._id) {
          return (el = { ...el, ...item });
        }
        return el;
      });
      this.setStore(store);
    } catch (e) {
      console.log('mistake here', e);
    }
  }

  logout() {
    this.setIsAuth(false);
    this.setToken('');
    this.setEmail('');
    this.setUserId('');
    localStorage.removeItem(this.storageName);
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
      return +sum;
    }, 0);
  }

  get allTotal() {
    return this.shouldTotal - this.oweTotal;
  }

  /**
   * Setters
   */
  setStore(store) {
    this.store = store;
  }

  setLoading(loading) {
    this.loading = loading;
  }

  setToken(token) {
    this.token = token;
  }

  setIsAuth(isAuth) {
    this.isAuth = isAuth;
  }
  setEmail(email) {
    this.email = email;
  }
  setUserId(userId) {
    this.userId = userId;
  }
}
export default new Debt();

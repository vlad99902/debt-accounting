import { makeAutoObservable } from 'mobx';
import request from '../functions/request';
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

  init() {
    this.setLoading(true);
    try {
      const data = JSON.parse(localStorage.getItem(this.storageName));
      if (data && data.token) {
        this.setToken(data.token);
        this.setIsAuth(true);
        this.setUserId(data.userId);
        //TODO fetch start info
        this.getAllDebts();
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
        JSON.stringify({ userId: this.userId, token: this.token }),
      );
      this.setIsAuth(true);

      //TODO Fetch needed info
      this.getAllDebts();
    } catch (error) {
      console.log(error);
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
        JSON.stringify({ userId: this.userId, token: this.token }),
      );
      this.setIsAuth(true);

      //TODO Fetch needed info
    } catch (error) {
      console.log(error);
    } finally {
      this.setLoading(false);
    }
  }

  *getAllDebts() {
    this.setLoading(true);
    try {
      const debts = yield request('/api/debt', 'GET', this.token);
      this.setStore(debts);
    } catch (error) {
      console.log(error);
    } finally {
      this.setLoading(false);
    }
  }

  add(item) {
    let store = this.store;
    store.push(item);
    this.setStore(store);
    // try {
    //   const data = yield request(
    //     '/api/debt/add',
    //     'POST',
    //     {
    //       item,
    //     },
    //     { Authorization: `Bearer ${auth.token}` },
    //   );

    //   console.log(data);

    //   // history.push(`/detail/${data.link._id}`);
    // } catch (e) {
    //   console.log('mistake here', e);
    // }
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

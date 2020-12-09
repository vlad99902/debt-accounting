import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import debt from '../store/Debt';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/Input.sass';
import '../styles/AuthPage.sass';

import { Header } from '../components/Header';
import { EmptyCard } from '../components/EmptyCard';
import { Button } from '../components/Button';
import notify from '../functions/notify';

export const AuthPage = observer(() => {
  const [form, setForm] = useState({ email: '', password: '' });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      await debt.register({ ...form });
    } catch (e) {
      notify(e.message);
    }
  };

  const loginHandler = async () => {
    try {
      await debt.login({ ...form });
    } catch (e) {
      notify(e.message);
    }
  };

  return (
    <div className="container">
      <Header fw="500" fz="44px" mb="16px">
        Let's start our journey!
      </Header>
      <EmptyCard position="center">
        <Header mb="16px">Register or Log In</Header>
        <input
          type="email"
          id="email"
          name="email"
          className="input auth-page__input"
          placeholder="Email"
          onChange={changeHandler}
        />
        <input
          type="password"
          id="password"
          name="password"
          className="input auth-page__input"
          placeholder="Password"
          onChange={changeHandler}
        />
        <div className="auth-page__buttons">
          <Button onClick={loginHandler} disabled={debt.loading}>
            Log In
          </Button>
          <Button onClick={registerHandler} disabled={debt.loading}>
            Register
          </Button>
        </div>
      </EmptyCard>
      <ToastContainer limit={2} />
    </div>
  );
});

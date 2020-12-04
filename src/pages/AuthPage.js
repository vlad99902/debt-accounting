import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import debt from '../store/Debt';

import '../styles/Input.sass';
import '../styles/AuthPage.sass';

import { Header } from '../components/Header';
import { EmptyCard } from '../components/EmptyCard';
import { Button } from '../components/Button';

export const AuthPage = observer(() => {
  const [form, setForm] = useState({ email: '', password: '' });

  //обработка ошибок, которые прилетели с сервера
  // useEffect(() => {}, [error]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      await debt.register(form.email, form.password);
    } catch (e) {
      console.log(e);
    }
  };

  const loginHandler = async () => {
    try {
      await debt.login(form.email, form.password);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container">
      <Header title="Let's start our journey!" fw="500" fz="44px" mb="32px" />
      <EmptyCard position="center">
        <Header title="Register or Log In" />
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
        <Button onClick={loginHandler}>Log In</Button>
        <Button onClick={registerHandler}>Register</Button>
      </EmptyCard>
    </div>
  );
});

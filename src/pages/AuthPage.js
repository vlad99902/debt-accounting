import React, { useEffect, useState } from 'react';

import '../styles/Input.sass';
import '../styles/AuthPage.sass';

import { Header } from '../components/Header';
import { EmptyCard } from '../components/EmptyCard';
import { Button } from '../components/Button';
import { useHttp } from '../hooks/http.hook';

export const AuthPage = () => {
  const { loading, error, request } = useHttp();
  const [form, setForm] = useState({ email: '', password: '' });

  //обработка ошибок, которые прилетели с сервера
  useEffect(() => {}, [error]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });
      console.log(data);
    } catch (e) {}
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
        <Button disabled={loading}>Log In</Button>
        <Button onClick={registerHandler} disabled={loading}>
          Register
        </Button>
      </EmptyCard>
    </div>
  );
};

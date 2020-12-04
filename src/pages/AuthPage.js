import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import debt from '../store/Debt';

import '../styles/Input.sass';
import '../styles/AuthPage.sass';

import { Header } from '../components/Header';
import { EmptyCard } from '../components/EmptyCard';
import { Button } from '../components/Button';
import { Modal } from '../components/Modal';

export const AuthPage = observer(() => {
  const [form, setForm] = useState({ email: '', password: '' });

  const [isOpen, setIsOpen] = useState(false);
  //обработка ошибок, которые прилетели с сервера
  // useEffect(() => {}, [error]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      await debt.register({ ...form });
    } catch (e) {
      console.log(e);
    }
  };

  const loginHandler = async () => {
    try {
      await debt.login({ ...form });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container">
      <Header title="Let's start our journey!" fw="500" fz="44px" mb="32px" />
      <EmptyCard position="center">
        <Header>Register or Log In</Header>
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
        <Button onClick={loginHandler} disabled={debt.loading}>
          Log In
        </Button>
        <Button onClick={registerHandler} disabled={debt.loading}>
          Register
        </Button>
      </EmptyCard>
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        This is modal
      </Modal>
    </div>
  );
});

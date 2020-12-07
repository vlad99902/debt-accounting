import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import debt from '../store/Debt';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
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

  const notify = () => toast(
    "Fuck you!", {
    position: "bottom-right",
    autoClose: 4000,
    draggable: true,
    pauseOnFocusLoss: false,
    pauseOnHover: false
  })

  const registerHandler = () => {
    try {
      debt.register({ ...form });
    } catch (e) {
      console.log(e);
    }
  };

  const loginHandler = () => {
    try {
      debt.login({ ...form });
    } catch (e) {
      console.log(e);
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
      <Button onClick={() => notify()}>Notify!</Button>
      <ToastContainer limit={2} />

      {/* <Button onClick={() => setIsOpen(true)}>Open modal</Button> */}
      {/* <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        This is modal
      </Modal> */}
    </div>
  );
});

import React from 'react';

import '../styles/Input.sass';
import '../styles/AuthPage.sass';

import { Header } from '../components/Header';
import { EmptyCard } from '../components/EmptyCard';
import { Button } from '../components/Button';

export const AuthPage = () => {
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
        />
        <input
          type="password"
          id="password"
          name="password"
          className="input auth-page__input"
          placeholder="Password"
        />
        <Button>Log In</Button>
        <Button>Register</Button>
      </EmptyCard>
    </div>
  );
};

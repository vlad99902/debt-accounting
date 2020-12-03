import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MainPage } from './pages/MainPage';
import { AuthPage } from './pages/AuthPage';

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/home" exact>
          <MainPage />
        </Route>
        <Redirect to="/home" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/">
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

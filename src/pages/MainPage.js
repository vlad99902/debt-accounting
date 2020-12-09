import React from 'react';

import { observer } from 'mobx-react-lite';
import debt from '../store/Debt';
import { ToastContainer } from 'react-toastify';

//styles
import '../styles/Input.sass';
import '../styles/MainPage.sass';

//components
import { Total } from '../components/Total';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { AddCard } from '../components/AddCard';

export const MainPage = observer(() => {
  return (
    <>
      <div className="container">
        <AddCard mb="32px" />
        <div className="lists">
          <div className="lists__left">
            <div className="lists__header">
              <Header ta="left">Debts</Header>
              <Total total={debt.oweTotal} />
            </div>
            <div className="lists__card">
              <Card items={debt.oweList} />
            </div>
          </div>

          <div className="lists__right">
            <div className="lists__header">
              <Header ta="left">Debtors</Header>
              <Total total={debt.shouldTotal} />
            </div>
            <div className="lists__card">
              <Card items={debt.shouldList} />
            </div>
          </div>
        </div>

      </div>
      <ToastContainer limit={2} />
    </>
  );
});

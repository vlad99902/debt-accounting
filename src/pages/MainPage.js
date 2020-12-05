import React, { useState } from 'react';

import { observer } from 'mobx-react-lite';
import debt from '../store/Debt';

//styles
import '../styles/Input.sass';
import '../styles/MainPage.sass';

//components
import { Button } from '../components/Button';
import { Total } from '../components/Total';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { EmptyCard } from '../components/EmptyCard';

export const MainPage = observer(() => {
  const [title, setTitle] = useState('');
  const [sum, setSum] = useState(0);

  const clearInput = (stateFunc) => {
    stateFunc('');
  };

  const onClickAdd = async (owe = true) => {
    //TODO изменить добавление (добавлять тип в локальный стор правильно)

    await debt.add({
      title: title.trim() || 'Title',
      sum: +sum || 0,
      completed: false,
      owe,
    });
    clearInput(setTitle);
    clearInput(setSum);
  };

  return (
    <>
      <div className="container">
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
        <EmptyCard>

          <Header mb="16px">Add</Header>
          <div className="add-card">
            <div className="add-card__inputs">
              <input
                type="text"
                id="title"
                name="title"
                className="input add-card__input"
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              <input
                className="input add-card__input"
                type="number"
                id="sum"
                name="sum"
                placeholder="Sum"
                value={sum}
                onChange={(event) => setSum(event.target.value)}
              />
            </div>

            <div className="add-card__buttons">
              <div className="add-card__button">
                <Button text="Add" onClick={() => onClickAdd(true)}>
                  Add debt
            </Button>
              </div>

              <div className="add-card__button">
                <Button text="Add" onClick={() => onClickAdd(false)}>
                  Add deptor
            </Button>
              </div>
            </div>
          </div>
        </EmptyCard>
      </div>
    </>
  );
});

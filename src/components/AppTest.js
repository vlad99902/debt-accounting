import React, { useState } from 'react';

import { uid } from 'uid';
import { observer } from 'mobx-react-lite';

import { Button } from './Button';
// import { Input } from './Input';
import { Card } from './Card';

import debt from '../store/Debt';

//styles
import '../styles/Input.sass';
import '../App';

//components

export const AppTest = observer(() => {
  const [title, setTitle] = useState('');
  const [sum, setSum] = useState(0);

  const clearInput = (stateFunc) => {
    stateFunc('');
  };

  const onClickAdd = (type = 'owe') => {
    debt.add(
      {
        id: uid(),
        title: title || 'Title',
        sum: +sum || 0,
        completed: false,
      },
      type,
    );
    clearInput(setTitle);
    clearInput(setSum);
  };

  return (
    <div className="container">
      <div className="lists">
        <div className="lists__left">
          <div className="lists__card">
            <Card items={debt.oweList} />
          </div>
        </div>

        <div className="lists__right">
          <div className="lists__card">
            <Card items={debt.shouldList} />
          </div>
        </div>
      </div>

      <div className="lists__buttons">
        <div className="lists__button">
          <Button text="Add" onClick={() => onClickAdd('owe')} />
        </div>

        <div className="lists__button">
          <Button text="Add" onClick={() => onClickAdd('should')} />
        </div>
      </div>

      <div className="lists__inputs">
        <input
          type="text"
          className="input lists__input"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          className="input lists__input"
          type="number"
          placeholder="Sum"
          value={sum}
          onChange={(event) => setSum(event.target.value)}
        />
      </div>
      <button onClick={() => console.log(debt.oweTotal)}></button>
    </div>
  );
});

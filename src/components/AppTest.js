import React, { useState } from 'react';

import { uid } from 'uid';

import { Button } from './Button';
// import { Input } from './Input';
import { Card } from './Card';

import debt from '../store/Debt';

//styles
import '../styles/Input.sass';

//components

export const AppTest = () => {
  const [oweTitle, setOweTitle] = useState('');
  const [oweSum, setOweSum] = useState();

  const clearInput = (stateFunc) => {
    stateFunc('');
  };

  const onClick = () => {
    debt.addOwe({
      id: uid(),
      title: oweTitle || 'Title',
      sum: oweSum || 0,
      completed: false,
    });
    clearInput(setOweTitle);
  };

  return (
    <div className="container">
      <div className="main-block">
        <div className="left-block"></div>
        <div className="right-block"></div>
        <Card items={debt.owe} />
        <input
          type="text"
          className="input"
          placeholder="Title"
          value={oweTitle}
          onChange={(event) => setOweTitle(event.target.value)}
        />
        <input
          type="text"
          className="input"
          placeholder="Sum"
          value={oweSum}
          onChange={(event) => setOweSum(event.target.value)}
        />
        <Button text="FUCK" onClick={onClick} />
      </div>
    </div>
  );
};

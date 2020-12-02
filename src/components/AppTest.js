import React, { useState } from 'react';

import { uid } from 'uid';

import { Button } from './Button';
// import { Input } from './Input';
import { Card } from './Card';

import debt from '../store/Debt';

//styles
import '../styles/Input.sass';
import '../App';

//components

export const AppTest = () => {
  const [oweTitle, setOweTitle] = useState('');
  const [oweSum, setOweSum] = useState();
  const [shouldTitle, setShouldTitle] = useState('');
  const [shouldSum, setShouldSum] = useState();

  const clearInput = (stateFunc) => {
    stateFunc('');
  };

  const onClickAddOwe = () => {
    debt.addOwe({
      id: uid(),
      title: oweTitle || 'Title',
      sum: oweSum || 0,
      completed: false,
    });
    clearInput(setOweTitle);
    clearInput(setOweSum);
  };

  const onClickAddShould = () => {
    debt.addShould({
      id: uid(),
      title: shouldTitle || 'Title',
      sum: shouldSum || 0,
      completed: false,
    });
    clearInput(setShouldTitle);
    clearInput(setShouldSum);
  };

  return (
    <div className="container">
      <div className="lists">
        <div className="lists__left">
          <div className="lists__card">
            <Card items={debt.owe} />
          </div>
          <div className="lists__button">
            <Button text="Add" onClick={onClickAddOwe} />
          </div>
        </div>

        <div className="lists__right">
          <div className="lists__card">
            <Card items={debt.should} />
          </div>
          <div className="lists__button">
            <Button text="Add" onClick={onClickAddShould} />
          </div>
        </div>
      </div>
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
    </div>
  );
};

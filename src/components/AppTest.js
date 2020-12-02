import React from 'react';

import { uid } from 'uid';
import { observer } from 'mobx-react-lite';

import { Button } from './Button';
import { Input } from './Input';
import { Card } from './Card';

import Debt from '../store/Debt';

//components

export const AppTest = observer(() => {
  return (
    <div className="container">
      <div className="main-block">
        <div className="left-block"></div>
        <div className="right-block"></div>
        <Button
          text="FUCK"
          onClick={() =>
            Debt.addOwe({
              id: uid(),
              title: 'Test',
              sum: 1000,
              completed: false,
            })
          }
        />
        <Input type="num" />
        <div className="container">
          <Card items={Debt.owe} />
        </div>
      </div>
    </div>
  );
});

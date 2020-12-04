import React from 'react';
import { observer } from 'mobx-react-lite';
import { TiDeleteOutline } from 'react-icons/ti';

import '../styles/Item.sass';

import debt from '../store/Debt';

export const Item = observer(
  ({ title = 'title', sum = 0, completed = false, _id }) => {
    const clearItem = async () => {
      await debt.deleteItem(_id);
    };

    return (
      <div className="item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            debt.changeCompleted(_id);
          }}
          className="item__checkbox"
        />
        <h1 className="item__title">{title}</h1>
        <h3 className="item__sum">{sum}</h3>
        <button className="item__button">
          <TiDeleteOutline className="item__button-icon" onClick={clearItem} />
        </button>
      </div>
    );
  },
);

import React from 'react';

import '../styles/Item.sass';
import { TiDeleteOutline } from 'react-icons/ti';
import debt from '../store/Debt';
import { observer } from 'mobx-react-lite';

export const Item = ({ title = 'title', sum = 0, completed = false, id }) => {
  const clearItem = () => {
    debt.deleteItem(id);
  };

  return (
    <div className="item">
      <input
        type="checkbox"
        checked={completed}
        readOnly
        className="item__checkbox"
      />
      <h1 className="item__title">{title}</h1>
      <h3 className="item__sum">{sum}</h3>
      <button className="item__button">
        <TiDeleteOutline className="item__button-icon" onClick={clearItem} />
      </button>
    </div>
  );
};

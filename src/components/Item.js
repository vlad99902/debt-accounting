import React from 'react';

import '../styles/Item.sass';
import { TiDeleteOutline } from 'react-icons/ti';

export const Item = ({ title = 'title', sum = 0, completed = false }) => {
  return (
    <div className="item">
      <input type="checkbox" checked={completed} />
      <h1>{title}</h1>
      <h3>{sum}</h3>
      <TiDeleteOutline />
    </div>
  );
};

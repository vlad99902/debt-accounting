import React from 'react';
import { observer } from 'mobx-react-lite';

import '../styles/Card.sass';

import { Item } from '../components/Item';

export const Card = observer(({ items = [] }) => {
  return (
    <div className="card">
      {items.map((item) => {
        return (
          <div className="card__item" >
            <Item key={item.id} {...item} />
          </div>
        );
      })}
    </div>
  );
});

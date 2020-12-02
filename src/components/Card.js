import React from 'react';

import '../styles/Card.sass';

import { Item } from '../components/Item';

export const Card = ({ items = [] }) => {
  return (
    <div className="card">
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            // title={item.title}
            // completed={item.completed}
            // sum={item.sum}
            {...item}
          />
        );
      })}
    </div>
  );
};

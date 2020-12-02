import React from 'react';

import '../styles/Card.sass';

import { Item } from '../components/Item';

export const Card = ({ items = [] }) => {
  return (
    <div className="card">
      {items.map((item) => {
        return (
          <div className="card__item" key={item.id}>
            <Item {...item} />
          </div>
        );
      })}
    </div>
  );
};

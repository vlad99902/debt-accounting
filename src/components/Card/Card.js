import React from "react";
import { observer } from "mobx-react-lite";

import "./Card.sass";

import { Item } from "../Item/Item";

export const Card = observer(({ items = [] }) => {
  const checkIfEmpty = () => {
    let domResult = [];
    if (items.length < 1) {
      return <h3>Empty yet</h3>;
    } else {
      domResult = items.map((item) => {
        return (
          <div className="card__item" key={item._id}>
            <Item {...item} />
          </div>
        );
      });
    }
    return domResult;
  };
  return <div className="card">{checkIfEmpty()}</div>;
});

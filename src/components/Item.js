import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { TiDeleteOutline } from 'react-icons/ti';

import '../styles/Item.sass';

import debt from '../store/Debt';
//{ titleInput = 'title', sum = 0, completed = false, _id }
export const Item = observer((props) => {
  const [inputTitle, setInputTitle] = useState(false);

  const [form, setForm] = useState({
    title: props.title,
    completed: props.completed,
  });

  const changeHandler = (event) => {
    console.log(form);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const clearItem = async () => {
    await debt.deleteItem(props._id);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setInputTitle(false);
    }
  };

  const handleDoubleClick = (event) => {
    event.preventDefault();
    setInputTitle(true);
  };

  return (
    <div className="item">
      <input
        type="checkbox"
        checked={props.completed}
        onChange={() => {
          debt.changeCompleted(props._id);
        }}
        className="item__checkbox"
      />

      <button onDoubleClick={handleDoubleClick} onKeyPress={handleKeyPress}>
        {inputTitle ? (
          <input
            type="text"
            id="title"
            name="title"
            className="input lists__input"
            placeholder="Title"
            value={form.title}
            onChange={changeHandler}
          />
        ) : (
          <h1 className="item__title">{form.title}</h1>
        )}
      </button>
      <h3 className="item__sum">{props.sum}</h3>
      <button className="item__button">
        <TiDeleteOutline className="item__button-icon" onClick={clearItem} />
      </button>
    </div>
  );
});

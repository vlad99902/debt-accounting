import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { TiDeleteOutline } from 'react-icons/ti';
import notify from '../functions/notify';

import '../styles/Item.sass';

import debt from '../store/Debt';
export const Item = observer((props) => {
  const [input, setInput] = useState({ title: false, sum: false });
  const [completed, setCompleted] = useState(props.completed);

  const [form, setForm] = useState({
    title: props.title,
    sum: props.sum,
  });

  const clearItem = async () => {
    try {
      await debt.deleteItem(props._id);
    } catch (e) {
      notify(e.message);
    }
  };

  const changeCompleted = async (event) => {
    try {
      setCompleted(event.target.checked);
      await debt.updateItem({
        _id: props._id,
        completed: event.target.checked,
      });
    } catch (e) {
      notify(e.message);
    }
  };

  const handlerKeyPress = (event) => {
    if (event.key === 'Enter') {
      submitForm();
    }
  };

  const handleDoubleClick = (event) => {
    event.preventDefault();
    if (event.currentTarget.name === 'title') {
      setInput({ ...input, title: true });
    } else if (event.currentTarget.name === 'sum') {
      setInput({ ...input, sum: true });
    }
  };

  const submitForm = async () => {
    setInput({ title: false, sum: false });
    checkFormValues();
    let objectToSend = {
      _id: props._id,
      title: form.title || 'Title',
      sum: +form.sum || 0,
    };

    try {
      if (Object.keys(objectToSend).length !== 0) {
        await debt.updateItem({ _id: props._id, ...objectToSend });
      }
    } catch (e) {
      notify(e.message);
    }
  };

  const checkFormValues = () => {
    if (form.title === '') {
      setForm({ ...form, title: 'Title' });
    }
    if (form.sum === 0) {
      setForm({ ...form, sum: 0 });
    }
  };

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className="item">
      <input
        type="checkbox"
        name="completed"
        checked={completed}
        onChange={changeCompleted}
        className="item__checkbox"
      />

      <button
        onDoubleClick={handleDoubleClick}
        onKeyPress={handlerKeyPress}
        className="item__title"
        name="title"
      >
        {input.title ? (
          <input
            type="text"
            id="title"
            name="title"
            className="item__changed-input"
            placeholder="Title"
            value={form.title}
            onChange={changeHandler}
            autoFocus
            onBlur={() => submitForm()}
          />
        ) : (
          <h1 className="item__changed-title">{form.title}</h1>
        )}
      </button>

      <button
        onDoubleClick={handleDoubleClick}
        onKeyPress={handlerKeyPress}
        className="item__sum"
        name="sum"
      >
        {input.sum ? (
          <input
            type="number"
            id="sum"
            name="sum"
            className="item__changed-input"
            placeholder="0"
            value={form.sum}
            onChange={changeHandler}
            autoFocus
            onBlur={() => submitForm()}
          />
        ) : (
          <h3 className="item__sum">{form.sum}</h3>
        )}
      </button>

      <button className="item__button">
        <TiDeleteOutline className="item__button-icon" onClick={clearItem} />
      </button>
    </div>
  );
});

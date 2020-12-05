import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { TiDeleteOutline } from 'react-icons/ti';

import '../styles/Item.sass';

import debt from '../store/Debt';
export const Item = observer((props) => {
  const [input, setInput] = useState({ title: false, sum: false });
  const [completed, setCompleted] = useState(props.completed);

  const [form, setForm] = useState({
    title: props.title,
    sum: props.sum,
  });

  const clearItem = () => {
    debt.deleteItem(props._id);
  };

  const changeCompleted = () => {
    setCompleted(!completed);
    debt.updateItem({ _id: props._id, completed: completed });
    console.log(completed);
  };

  // const cancelSubmitingForm = () => {
  //   setInput({ title: false, sum: false });
  //   setForm({ title: props.title, sum: props.sum });
  // };

  const handlerKeyPress = (event) => {
    if (event.key === 'Enter') {
      submitForm();
    }
    // if (event.keyCode === 27) {
    //   console.log('escape pressed');
    //   cancelSubmitingForm();
    // }
  };

  const handleDoubleClick = (event) => {
    event.preventDefault();
    if (event.currentTarget.name === 'title') {
      setInput({ ...input, title: true });
    } else if (event.currentTarget.name === 'sum') {
      setInput({ ...input, sum: true });
    }
  };

  const submitForm = () => {
    setInput({ title: false, sum: false });
    checkFormValues();
    let objectToSend = {
      // _id: props._id,
      // title: form.title || 'Title',
      // sum: +form.sum || 0,
    };
    for (let key in form) {
      if (form[key] !== props[key]) {
        objectToSend = { ...objectToSend, [key]: form[key] };
      }
    }
    console.log(objectToSend);
    console.log(Object.keys(objectToSend).length);
    if (Object.keys(objectToSend).length !== 0) {
      debt.updateItem({ _id: props._id, ...objectToSend });
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

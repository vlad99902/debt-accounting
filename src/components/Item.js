import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { TiDeleteOutline } from 'react-icons/ti';
import notify from '../functions/notify';
import NumberFormat from 'react-number-format';

import '../styles/Item.sass';

import debt from '../store/Debt';
export const Item = observer((props) => {
  const [input, setInput] = useState({ title: false, sum: false });
  const [completed, setCompleted] = useState(props.completed);

  let stl = ''
  if (completed) stl = 'checked'

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

  // const changeHandlerValue = (event) => {
  //   setForm({ ...form, [event.target.name]: event.target.value });
  // };

  const changeHandler = (name, value) => {
    setForm({ ...form, [name]: value });
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
            onChange={(e) => changeHandler('title', e.target.value)}
            autoFocus
            onBlur={() => submitForm()}
          />
        ) : (
            <h1 className={"item__changed-title " + stl}>{form.title}</h1>
          )}
      </button>

      <button
        onDoubleClick={handleDoubleClick}
        onKeyPress={handlerKeyPress}
        className="item__sum"
        name="sum"
      >
        {input.sum ? (<>
          <div name="sum">

            <NumberFormat
              thousandSeparator={true}
              prefix={'$'}
              className="item__changed-input"
              id="sum"
              name="sum"
              inputMode="numeric"
              value={form.sum}
              placeholder="$0"
              allowNegative={false}
              decimalScale={2}
              autoFocus
              onBlur={() => submitForm()}
              onValueChange={(values) => {
                const { floatValue } = values;
                changeHandler('sum', floatValue);
              }}
            /></div></>

        ) : (
            <h3 className={"item__sum " + stl}><NumberFormat value={form.sum} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h3>
          )}
      </button>

      <button className="item__button">
        <TiDeleteOutline className="item__button-icon" onClick={clearItem} />
      </button>
    </div>
  );
});

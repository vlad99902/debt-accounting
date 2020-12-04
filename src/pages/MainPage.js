import React, { useState } from 'react';

import { uid } from 'uid';
import { observer } from 'mobx-react-lite';

import { Button } from '../components/Button';
import { Total } from '../components/Total';
import { Card } from '../components/Card';

import debt from '../store/Debt';

//styles
import '../styles/Input.sass';
import '../App';

//components

export const MainPage = observer(() => {
  const [title, setTitle] = useState('');
  const [sum, setSum] = useState(0);

  //test get from server

  //get
  // const fetchDebts = useCallback(async () => {
  //   try {
  //     const fetched = await request('/api/debt', 'GET', null, {
  //       Authorization: `Bearer ${token}`,
  //     });
  //     setDebts(fetched);
  //   } catch (e) {}
  // }, [token, request]);

  // useEffect(() => {
  //   fetchDebts();
  // }, [fetchDebts]);

  // console.log(debts);

  //post

  const clearInput = (stateFunc) => {
    stateFunc('');
  };

  const onClickAdd = async (owe = true) => {
    //TODO изменить добавление (добавлять тип в локальный стор правильно)

    debt.add({
      id: uid(),
      title: title || 'Title',
      sum: +sum || 0,
      completed: false,
      owe,
    });
    clearInput(setTitle);
    clearInput(setSum);

    //POST TEST
    // try {
    //   const data = await request(
    //     '/api/debt/add',
    //     'POST',
    //     {
    //       title: title || 'Title',
    //       sum: +sum || 0,
    //       completed: false,
    //       owe: true,
    //     },
    //     { Authorization: `Bearer ${auth.token}` },
    //   );

    //   console.log(data);

    //   // history.push(`/detail/${data.link._id}`);
    // } catch (e) {
    //   console.log('mistake here', e);
    // }
  };

  return (
    <div className="container">
      <Total total={debt.allTotal} fw="500" fz="30px" />
      <div className="lists">
        <div className="lists__left">
          <Total total={debt.oweTotal} />
          <div className="lists__card">
            <Card items={debt.oweList} />
          </div>
        </div>

        <div className="lists__right">
          <Total total={debt.shouldTotal} />
          <div className="lists__card">
            <Card items={debt.shouldList} />
          </div>
        </div>
      </div>

      <div className="lists__buttons">
        <div className="lists__button">
          <Button text="Add" onClick={() => onClickAdd(true)} />
        </div>

        <div className="lists__button">
          <Button text="Add" onClick={() => onClickAdd(false)} />
        </div>
      </div>

      <div className="lists__inputs">
        <input
          type="text"
          className="input lists__input"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          className="input lists__input"
          type="number"
          placeholder="Sum"
          value={sum}
          onChange={(event) => setSum(event.target.value)}
        />
      </div>
    </div>
  );
});

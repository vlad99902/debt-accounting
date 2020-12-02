import React from 'react';

// Styles
import '../styles/Button.sass';

//components
// import Debt from '../store/Debt';
// import { act } from 'react-dom/test-utils';

export const Button = ({
  text = 'default',
  type = 'should',
  onClick = () => {},
}) => {
  const preventAction = (event) => {
    event.preventDefault();
    console.log('action: ', onClick);
    onClick();
  };
  return (
    <button className="button" onClick={preventAction}>
      {text}
    </button>
  );
};

import React from 'react';

// Styles
import '../styles/Button.sass';

//components

export const Button = ({
  text = 'default',
  type = 'should',
  onClick = () => {},
}) => {
  const preventAction = (event) => {
    event.preventDefault();
    onClick();
  };
  return (
    <button className="button" onClick={preventAction}>
      {text}
    </button>
  );
};

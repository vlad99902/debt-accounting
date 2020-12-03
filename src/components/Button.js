import React from 'react';

// Styles
import '../styles/Button.sass';

//components

export const Button = ({
  children = 'default',
  type = 'should',
  mr = '12px',
  onClick = () => {},
}) => {
  const style = { marginRight: mr };
  const preventAction = (event) => {
    event.preventDefault();
    onClick();
  };

  return (
    <button className="button" style={style} onClick={preventAction}>
      {children}
    </button>
  );
};

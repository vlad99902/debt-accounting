import React from 'react';

import '../styles/Header.sass';

export const Header = ({
  fw = '500',
  fz = '26px',
  ta = 'center',
  mb = '16px',
  children
}) => {
  const style = {
    fontWeight: fw,
    fontSize: fz,
    textAlign: ta,
    marginBottom: mb,
  };
  return (
    <h1 className="header" style={style}>
      {children}
    </h1>
  );
};

import React from 'react';

import '../styles/Header.sass';

export const Header = ({
  title = 'Header',
  fw = '500',
  fz = '26px',
  ta = 'center',
  mb = '16px',
}) => {
  const style = {
    fontWeight: fw,
    fontSize: fz,
    textAlign: ta,
    marginBottom: mb,
  };
  return (
    <h1 className="header" style={style}>
      {title}
    </h1>
  );
};

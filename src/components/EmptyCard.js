import React from 'react';

import '../styles/Card.sass';

export const EmptyCard = ({ children, position = 'center' }) => {
  let style = {};
  if (position === 'center') {
    style = { margin: '0 auto' };
  } else if (position === 'right') style = { marginLeft: 'auto' };
  return (
    <>
      <div className="card card--with-width" style={style}>
        {children}
      </div>
    </>
  );
};

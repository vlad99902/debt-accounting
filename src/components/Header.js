import React from 'react';

import '../styles/Header.sass';

export const Header = ({
  title = 'Header',
  fw = '500',
  fz = '26',
  ta = 'center',
}) => {
  const styles = { fontWeight: fw, fontSize: fz, textAlign: ta };
  return (
    <h1 className="header" style={styles}>
      {title}
    </h1>
  );
};

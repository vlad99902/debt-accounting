import React from 'react';
import { observer } from 'mobx-react-lite';

// styles
import '../styles/Total.sass';

// components

export const Total = observer(
  ({ total, fw = '400', fz = '26px', ta = 'center', mb = '0px' }) => {
    return (
      <>
        <h1
          className="total"
          style={{
            fontWeight: fw,
            fontSize: fz,
            textAlign: ta,
            marginBottom: mb,
          }}
        >
          Total: <span className="total__sum">{total}</span>
        </h1>
      </>
    );
  },
);

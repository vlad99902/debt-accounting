import React from 'react';
import { observer } from 'mobx-react-lite';
import NumberFormat from 'react-number-format';

// styles
import '../styles/Total.sass';

// components

export const Total = observer(
  ({ total, fw = '400', fz = '26px', ta = 'center', mb = '0px', children = "Total: " }) => {
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
          {children}<span className="total__sum"><NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
        </h1>
      </>
    );
  },
);

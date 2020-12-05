import React from 'react';
import ReactLoading from 'react-loading';

export const Loading = () => {
  return (
    <div
      style={{
        // position: 'sticky',
        // margin: 'auto',
        // display: 'flex',

        // justifyContent: 'center',
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        overflow: 'auto',
      }}
    >
      <ReactLoading type="bubbles" color="#c9a66b" height="10%" width="10%" />
    </div>
  );
};

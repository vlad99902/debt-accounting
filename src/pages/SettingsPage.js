import React from 'react';
import { observer } from 'mobx-react-lite';

import '../styles/SettingsPage.sass';

export const SettingsPage = observer(() => {
  return (
    <>
      <div className="container">
        <h1>Настройки</h1>
      </div>
    </>
  );
});

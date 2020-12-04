import './App.sass';

import { observer } from 'mobx-react-lite';
import debt from './store/Debt';

//для использования роутов
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes';
import { useEffect } from 'react';

export default observer(function App() {
  useEffect(() => {
    debt.init();
  }, []);
  const routes = useRoutes(debt.isAuth);
  return (
    <BrowserRouter>
      <div>{routes}</div>
    </BrowserRouter>
  );
});

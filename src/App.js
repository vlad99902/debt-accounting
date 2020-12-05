import './App.sass';

import { observer } from 'mobx-react-lite';
import debt from './store/Debt';

//для использования роутов
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes';
import { useEffect } from 'react';

import { PageHeader } from './components/PageHeader';
import { Loading } from './components/Loading';

export default observer(function App() {
  useEffect(() => {
    debt.init();
  }, []);
  const routes = useRoutes(debt.isAuth);

  console.log(window.location.href);

  return (
    <BrowserRouter>
      {debt.isAuth && <PageHeader mb="32px" />}
      {debt.loading ? <Loading /> : <div>{routes}</div>}
    </BrowserRouter>
  );
});

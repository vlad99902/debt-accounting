import "./App.sass";

import { observer } from "mobx-react-lite";
import debt from "./store/Debt";

//для использования роутов
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "./routes";
import { useEffect } from "react";

import { PageHeader } from "./components/PageHeader";
import { Loading } from "./components/Loading";
import { BottomNav } from "./components/BottomNav/BottomNav";

export default observer(function App() {
  useEffect(() => {
    debt.init();
  }, []);
  const routes = useRoutes(debt.isAuth);

  return (
    <BrowserRouter>
      <div className="app">
        <div>{debt.isAuth && <PageHeader />}</div>
        <div className="main">
          {debt.loading ? <Loading /> : <div>{routes}</div>}
        </div>
        <div>{debt.isAuth && <BottomNav />}</div>
      </div>
    </BrowserRouter>
  );
});

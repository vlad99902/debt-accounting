import './App.sass';

//для использования роутов
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';

function App() {
  const { token, login, logout, userId } = useAuth();
  const isAuth = !!token;
  const routes = useRoutes(isAuth);
  return (
    <AuthContext.Provider value={{ token, login, logout, userId, isAuth }}>
      <BrowserRouter>
        <div>{routes}</div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

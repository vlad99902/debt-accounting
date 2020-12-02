import './App.sass';

import { Button } from './components/Button.js';
import { Input } from './components/Input.js';
import { Card } from './components/Card';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="main-block">
          <div className="left-block"></div>
          <div className="right-block"></div>
          <Button text="FUCK" />
          <Input type="num" />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;

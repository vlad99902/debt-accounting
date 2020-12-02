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
          <div className="container">
            <Card
              items={[
                {
                  id: 'wed342',
                  title: 'Suck dickылзывта',
                  sum: 10000,
                  completed: true,
                },
                {
                  id: 'wed342ewqf',
                  title: 'Suck dick',
                  sum: 1000,
                  completed: false,
                },
                {
                  id: 'wed34wqf2',
                  title: 'Suck dick',
                  sum: 1000,
                  completed: false,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

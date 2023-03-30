import { useState } from 'react';
import './index.scss';

function App() {
  const [count, setCount] = useState(0);
  function onHandlePlus() {
    setCount(count + 1)
  }
  function onHandleMinus() {
    setCount(count - 1)
  }
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onHandleMinus} className="minus">- Минус</button>
        <button onClick={onHandlePlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;

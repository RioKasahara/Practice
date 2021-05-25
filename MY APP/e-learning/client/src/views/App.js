import React from 'react';
import '../App.css';
import CounterApp from '../components/CounterApp';
import Hello from '../components/Hello';

const App = () => {
  return (
    <div className="App">
      <Hello contents='Hello World!' />
      <CounterApp color='tomato' />
      <CounterApp color='skyblue' />
      <CounterApp color='limegreen' />
    </div>
  );
}

export default App;

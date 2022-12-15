import react from 'react';
import './App.css';
import Counter from './Components/Counter';
import Header from './Components/Header';
import {CounterProvider} from './CounterC'

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Header> </Header>
        <Counter></Counter>
      </CounterProvider>
    </div>
  );
}

export default App;

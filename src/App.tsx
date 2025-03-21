import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='main'>
      <h1>Я люблю тебя !</h1>
      <h2>Не грусти </h2>
      <div className='heart'></div>
      <img src='/1.JPG' width='300' height='400' className='img' />
    </div>
  );
}

export default App;

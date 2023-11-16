import { useState } from 'react'

import './App.css'

function App() {
  let [color, setcolor] = useState('cyan');
  return (
    <>
      <div className='box' style={{ backgroundColor: color }}>

      </div>
      <div className='btns'>
        <button className='red' onClick={() => setcolor('red')}>red</button>
        <button className='blue' onClick={() => setcolor('blue')}>blue</button>
        <button className='green' onClick={() => setcolor('green')}>green</button>
        <button className='pink' onClick={() => setcolor('pink')}>pink</button>
        <button className='yellow' onClick={() => setcolor('yellow')}>yellow</button>
        <button className='orange' onClick={() => setcolor('orange')}>orange</button>
      </div>
    </>)


}

export default App

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}> Decrease</button>

      <p>Counter: {count} </p>
    </div>


  )
}


ReactDOM.render(<App />, document.querySelector('#root'));

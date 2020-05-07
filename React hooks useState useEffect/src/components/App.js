import React, { useState } from 'react';
import ResourceList from './ResounceList';

const App = () => {
  const [resource, setResource] = useState('posts')

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')} > Posts </button>
        <button onClick={() => setResource('todos')} > ToDos </button>
      </div>
      <ResourceList kaynak={resource} />
    </div>
  );

}

export default App

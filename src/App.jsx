import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counterR.count);

  const increment = () => {
    dispatch({ type: "INCREMENT", pyload: 1 })
  }

  const decrement = () => {
    dispatch({ type: "DECREMENT", pyload: 1 })
  }

  return (
    <div className='container'>
      <div className="counter">
        <h1 className='text-light text-center'>Redux Counter: {count}</h1>
       <div className="btn-cnt">
       <button onClick={increment} className='btn btn-primary mx-2'>Increment +</button>
        <button onClick={decrement} className='btn btn-danger mx-2'>Decrement -</button>
       </div>
      </div>
    </div>
  );
}

export default App;

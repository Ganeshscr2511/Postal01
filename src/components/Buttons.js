import React from 'react';
import { useDispatch } from 'react-redux';

const CounterButtons = () => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <button className="bg-color" onClick={increment}>Increment</button>
      <button className="bg-color" onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterButtons;

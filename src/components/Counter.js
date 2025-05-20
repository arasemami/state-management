// src/Counter.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from '../modules/redux/counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-xl">Count: {count}</div>
      <div className="space-x-2">
        <button onClick={() => dispatch(increment())} className="bg-blue-500 text-white px-3 py-1 rounded">+</button>
        <button onClick={() => dispatch(decrement())} className="bg-red-500 text-white px-3 py-1 rounded">-</button>
        <button onClick={() => dispatch(reset())} className="bg-gray-500 text-white px-3 py-1 rounded">Reset</button>
      </div>
    </div>
  );
};

export default Counter;

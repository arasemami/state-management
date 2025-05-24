// src/Counter.jsx

import useCounter from "../hooks/useCounter";



const CounterHook = () => {

  const { count, increment, decrement, rest } = useCounter(0);


  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-xl">Count: {count}</div>
      <div className="space-x-2">
        <button onClick={increment} className="bg-blue-500 text-white px-3 py-1 rounded">+</button>
        <button onClick={decrement} className="bg-red-500 text-white px-3 py-1 rounded">-</button>
        <button onClick={rest} className="bg-gray-500 text-white px-3 py-1 rounded">Reset</button>
      </div>
    </div>
  );
};

export default CounterHook;

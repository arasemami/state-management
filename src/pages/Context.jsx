import React, { useContext, useState } from 'react';
import { MyContext } from '../modules/user/userContext';

const Context = () => {
  const { state, dispatch } = useContext(MyContext);

  return (
    <div>
      <h1>{state.value}</h1>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "SET_VALUE", payload: "Updated with Reducer!" })}>
        Change Text
      </button>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "SET_NUMBER", payload: 100 })}>
        Set 100
      </button>
    </div>
  );

};

export default Context;

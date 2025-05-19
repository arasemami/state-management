import React from 'react';
import { useUser } from '../modules/user/useUser';

const Context = () => {
  const { state, dispatch } = useUser();

  return (
    <div>
      {state.user ? (
        <div>
          <p> welcome, {state.user.name}</p>
          <button
            onClick={() =>
              dispatch({ type: 'LOGOUT', payload: {} })
            }
          >
            logOut
          </button>
        </div>
      ) : (
        <button
          onClick={() =>
            dispatch({ type: 'LOGIN', payload: { name: 'Ali', id: 1 } })
          }
        >
          LogIn
        </button>

      )}




    </div>
  );
};

export default Context;

import React, { createContext, useReducer } from "react";
export const MyContext = createContext();

const initialState = {
    value: "Hello from reducer!",
    count: 0,
};

// Reducer function
function reducer(state, action) {
    switch (action.type) {
        case "SET_VALUE":
            return { ...state, value: action.payload };
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            return { ...state, count: state.count - 1 };
        case "SET_NUMBER":
            return { ...state, count: action.payload }
        default:
            return state;
    }
}

// Provider component
export function MyProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {children}
        </MyContext.Provider>
    );
}

import { useState } from "react";


function useCounter(initValue = 0) {
    const [count, setCount] = useState(initValue);

    const increment = () => setCount((perv) => perv + 1);
    const decrement = () => setCount((perv) => perv - 1);
    const rest = () => setCount(initValue);

    return { count, increment, decrement, rest }
}

export default useCounter;
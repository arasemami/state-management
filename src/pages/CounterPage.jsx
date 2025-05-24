import Counter from "../components/Counter";
import CounterHook from "../components/CounterHook";

export default function CounterPage() {
    return (
        <div>
            <Counter />

            <h1>Use Custom hook</h1>
            <CounterHook />
        </div>
    )
}


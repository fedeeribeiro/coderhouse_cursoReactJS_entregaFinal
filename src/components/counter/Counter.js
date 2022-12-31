import { useCounter } from "./useCounter";

export const Counter = ({count, setCount}) => {
    const [increase, decrease, onChange] = useCounter(count, setCount);

    return (
        <div>
            <button onClick={decrease} disabled={count <= 1} aria-label='Menos'> - </button>
            <input type='text' value={count} disabled={count === 100} onChange={onChange} aria-label='Cantidad'/>
            <button onClick={increase} disabled={count >= 100} aria-label='Más'> + </button>
        </div>
    );
}

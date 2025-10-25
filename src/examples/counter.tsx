
import { useCounter } from '../hooks/useCounter'

const Counter = () => {
  const [count, { increment, decrement, set, reset }] = useCounter(5, {
    min: 5,
    max: 10,
  });
  return (
    <div>
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => set(6)}>Set</button>
    </div>
  )
}

export default Counter
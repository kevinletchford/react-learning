import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  )
}

export default Counter
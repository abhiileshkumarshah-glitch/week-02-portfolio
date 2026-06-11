"use client";

import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Counter App</h1>

      <h2 id="count-display">{count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </main>
  );
}
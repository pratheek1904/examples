import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  const countIncrement = () => {
    setcount((prevcount) => prevcount + 1);
  };
  const countDecrement = () => {
    setcount((prevcount) => prevcount - 1);
  };

  return (
    <div>
      <h1>Counter application</h1>
      <h3>{count}</h3>
      <button onClick={countIncrement}>Increment</button>
      <button onClick={countDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;

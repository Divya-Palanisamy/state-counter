import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Counter App</h1>
      </header>
      <h2>Current value of Count is {count}</h2>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => (count <= 0 ? "" : setCount(count - 1))}>
        Decrease
      </button>
      <button onClick={() => (count >= 10 ? "" : setCount(count + 1))}>
        Increase
      </button>
    </div>
  );
};

export default App;

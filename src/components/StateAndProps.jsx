import { useState } from "react";

const CounterDisplay = ({ count, title }) => (
  <div style={{
    padding: "10px",
    border: "2px solid #007bff",
    borderRadius: "5px",
    margin: "10px 0",
    backgroundColor: "#f8f9fa"
  }}>
    <h4>{title}</h4>
    <p style={{ fontSize: "24px", fontWeight: "bold", color: "#007bff" }}>
      Count: {count}
    </p>
  </div>
);

const StateAndProps = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>1. State & Props</h2>
      <div>
        <button style={{
          padding: "10px 18px",
          marginRight: "8px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
        }} onClick={() => setCount(count - 1)}>Decrement -</button>
        <button style={{
          padding: "10px 18px",
          marginRight: "8px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
        }} onClick={() => setCount(count + 1)}>Increment +</button>
        <button style={{
          padding: "10px 18px",
          marginRight: "8px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
        }} onClick={() => setCount(0)}>Reset</button>
      </div>
      <CounterDisplay count={count} title="Child Component Display" />

      {/* 🔥 Teaching Section */}
      <div style={{
        marginTop: "15px",
        padding: "10px",
        backgroundColor: "#eaf4ff",
        borderLeft: "4px solid #007bff"
      }}>
        <h4>What’s happening here?</h4>
        <ul>
          <li><strong>State:</strong> The parent component manages a piece of state called <code>count</code>.</li>
          <li>When you click a button, <code>setCount()</code> updates the state and triggers a re-render.</li>
          <li><strong>Props:</strong> The current value of <code>count</code> is passed down into the child component (<code>CounterDisplay</code>) as a prop.</li>
          <li>The child cannot change <code>count</code> — it can only <em>use</em> what the parent gives it.</li>
          <li>This shows how <em>state lives in the parent</em>, but <em>props share that state with children</em>.</li>
        </ul>
      </div>
    </div>
  );
};

export default StateAndProps;

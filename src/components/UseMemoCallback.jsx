import { useState, useMemo, useCallback } from "react";

const buttonStyle = {
  padding: "8px 12px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  backgroundColor: "#007bff",
  color: "white",
};

const UseMemoCallback = () => {
  const [count, setCount] = useState(1);
  const [multiplier, setMultiplier] = useState(1);
  const [toggle, setToggle] = useState(false);

  // Expensive calculation function
  const expensiveCalculation = (num) => {
    console.log("🔄 Calculating factorial...");
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  // ✅ useMemo memoizes the result of expensive calculation
  const memoizedFactorial = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]); // Only recalculates when count changes

  // ✅ useCallback memoizes the function itself
  const incrementCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  // ❌ Non-memoized calculation (re-runs every render)
  const nonMemoizedFactorial = expensiveCalculation(count);

  return (
    <div>
      <h2>5. useMemo & useCallback</h2>
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <button
          onClick={() => setCount((prev) => Math.max(1, prev - 1))}
          style={buttonStyle}
        >
          Count - ({count})
        </button>
        <button onClick={incrementCount} style={buttonStyle}>
          Count + ({count})
        </button>
        <button onClick={() => setMultiplier((prev) => prev + 1)} style={buttonStyle}>
          Multiplier: {multiplier}
        </button>
        <button onClick={() => setToggle(!toggle)} style={buttonStyle}>
          Toggle: {toggle.toString()}
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
        <div style={{ padding: "10px", backgroundColor: "#d4edda", borderRadius: "5px" }}>
          <h4>✅ With useMemo</h4>
          <p>Factorial of {count}: {memoizedFactorial}</p>
          <small>Check console – recalculates only when <code>count</code> changes</small>
        </div>
        <div style={{ padding: "10px", backgroundColor: "#f8d7da", borderRadius: "5px" }}>
          <h4>❌ Without useMemo</h4>
          <p>Factorial of {count}: {nonMemoizedFactorial}</p>
          <small>Recalculates on <em>every render</em> (even when unrelated state changes)</small>
        </div>
      </div>

      {/* 🔥 Teaching Section */}
      <div
        style={{
          marginTop: "15px",
          padding: "10px",
          backgroundColor: "#fff3cd",
          borderLeft: "4px solid #ff9800",
        }}
      >
        <h4>What’s happening here?</h4>
        <ul>
          <li>
            <strong>expensiveCalculation:</strong> A simulated heavy function
            (factorial). You can see when it runs by checking the console.
          </li>
          <li>
            <strong>useMemo:</strong> Saves the <em>value</em> of the factorial.
            It only recalculates if <code>count</code> changes, ignoring
            unrelated state like <code>toggle</code> or <code>multiplier</code>.
          </li>
          <li>
            <strong>useCallback:</strong> Saves the <em>function definition</em>{" "}
            of <code>incrementCount</code>. This prevents child components from
            re-rendering when they don’t need to.
          </li>
          <li>
            <strong>Without useMemo:</strong> The factorial always recalculates,
            even when you only toggle or change multiplier — wasted work.
          </li>
          <li>
            💡 Rule of thumb: 
            <ul>
              <li><code>useMemo →</code> cache values</li>
              <li><code>useCallback →</code> cache functions</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UseMemoCallback;

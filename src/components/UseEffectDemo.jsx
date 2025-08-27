import { useState, useEffect } from "react";

const UseEffectDemo = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      // start ticking
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    // cleanup → stop ticking when unmounted or paused
    return () => interval && clearInterval(interval);
  }, [isRunning]); // runs whenever isRunning changes

  return (
    <div>
      <h2>3. useEffect Hook</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold", color: "#000" }}>{seconds}s</p>
      <button style={{
          padding: "10px 18px",
          marginRight: "8px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
        }} onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
      style={{
          padding: "10px 18px",
          marginRight: "8px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
        }}
        onClick={() => {
          setSeconds(0);
          setIsRunning(false);
        }}
      >
        Reset
      </button>

      {/* 🔥 Teaching Section */}
      <div
        style={{
          marginTop: "15px",
          padding: "10px",
          backgroundColor: "#e8f5e9",
          borderLeft: "4px solid #4caf50",
        }}
      >
        <h4>What’s happening here?</h4>
        <ul>
          <li>
            <strong>useEffect:</strong> Lets you run “side effects” — code that
            interacts with things outside the render (like timers, API calls,
            subscriptions).
          </li>
          <li>
            We start an <code>interval</code> when{" "}
            <code>isRunning === true</code>, and clear it when paused or reset.
          </li>
          <li>
            The <strong>dependency array [isRunning]</strong> means: re-run this
            effect only when <code>isRunning</code> changes.
          </li>
          <li>
            The <strong>cleanup function</strong> (<code>return () =&gt;
            clearInterval()</code>) stops the timer — preventing memory leaks.
          </li>
          <li>
            This shows how <em>React sets things up on mount and cleans up on
            unmount or change</em>.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UseEffectDemo;

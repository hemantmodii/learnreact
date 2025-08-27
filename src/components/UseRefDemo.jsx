import { useRef, useState } from "react";

const UseRefDemo = () => {
  const inputRef = useRef(null);       // 1️⃣ reference to the input element
  const [value, setValue] = useState("");
  const renderCount = useRef(0);       // 2️⃣ mutable value that doesn’t cause re-renders
  renderCount.current++;

  return (
    <div>
      <h2>4. useRef Hook</h2>
      <p>Render count: {renderCount.current}</p>

      <input style={{
          padding: "10px",
          marginRight: "8px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button style={{
          padding: "10px 18px",
          marginRight: "8px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
        }} onClick={() => inputRef.current.focus()}>Focus</button>
      <button style={{
          padding: "10px 18px",
          marginRight: "8px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
        }}
        onClick={() => {
          setValue("");
          inputRef.current.focus();
        }}
      >
        Clear
      </button>

      {/* 🔥 Teaching Section */}
      <div
        style={{
          marginTop: "15px",
          padding: "10px",
          backgroundColor: "#f3e5f5",
          borderLeft: "4px solid #9c27b0",
        }}
      >
        <h4>What’s happening here?</h4>
        <ul>
          <li>
            <strong>useRef for DOM:</strong> <code>inputRef</code> stores a
            reference to the input element. Clicking “Focus” calls{" "}
            <code>inputRef.current.focus()</code>, moving the cursor inside the
            box.
          </li>
          <li>
            <strong>useRef for values:</strong> <code>renderCount</code> is a
            value that survives across renders but does <em>not</em> trigger a
            re-render when it changes. We increment it on every render to show
            how many times the component re-rendered.
          </li>
          <li>
            Unlike <code>useState</code>, updating <code>.current</code> of a
            ref does <em>not</em> cause re-renders.
          </li>
          <li>
            This makes <code>useRef</code> perfect for:
            <ul>
              <li>Accessing/manipulating DOM nodes.</li>
              <li>Storing values between renders without re-rendering.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UseRefDemo;

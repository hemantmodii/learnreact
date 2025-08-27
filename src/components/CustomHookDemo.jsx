import { useState, useEffect } from "react";

const buttonStyle = {
  padding: '8px 16px',
  margin: '5px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '14px'
};

// 🔧 Custom Hook: useLocalStorage
function useLocalStorage(key, initialValue) {
  // Get from localStorage or fallback
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  // Update localStorage whenever value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// 📦 Demo Component
const CustomHookDemo = () => {
  const [name, setName] = useLocalStorage("userName", "");
  const [count, setCount] = useLocalStorage("userCount", 0);

  return (
    <div>
      <h2>10. Custom Hook (useLocalStorage)</h2>

      {/* Name input with persistence */}
      <div style={{ marginBottom: "15px" }}>
        <label>Your Name (persisted): </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{ 
            padding: "8px", 
            marginLeft: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }}
        />
      </div>

      {/* Counter with persistence */}
      <div style={{ marginBottom: "15px" }}>
        <label>Persistent Counter: </label>
        <button onClick={() => setCount(count - 1)} style={buttonStyle}>-</button>
        <span style={{ margin: "0 10px", fontSize: "18px", fontWeight: "bold" }}>{count}</span>
        <button onClick={() => setCount(count + 1)} style={buttonStyle}>+</button>
      </div>

      <p>💡 Refresh the page — your data persists!</p>

      {/* Teaching Section */}
      <div
        style={{
          marginTop: "15px",
          padding: "10px",
          backgroundColor: "#e8f5e9",
          borderLeft: "4px solid #4caf50",
        }}
      >
        <h4>Why use a Custom Hook?</h4>
        <ul>
          <li>
            <strong>Encapsulation:</strong> We moved <code>localStorage</code> logic into <code>useLocalStorage</code> so it’s reusable.
          </li>
          <li>
            <strong>Reusability:</strong> Any component can now persist data with just one line.
          </li>
          <li>
            <strong>Cleaner code:</strong> The component only cares about state, not about how persistence works.
          </li>
          <li>
            <strong>Pattern:</strong> Custom hooks always start with <code>use</code> and can use other React hooks inside.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomHookDemo;

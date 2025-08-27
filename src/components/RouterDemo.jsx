import { useState } from "react";

const buttonStyle = {
  marginRight: "10px",
  padding: "8px 12px",
  border: "1px solid #007bff",
  borderRadius: "4px",
  backgroundColor: "#007bff",
  color: "white",
  cursor: "pointer",
};

const RouterDemo = () => {
  const [page, setPage] = useState("Home");

  const pages = {
    Home: <p>🏠 Welcome to the Home Page</p>,
    About: <p>ℹ️ This is the About Page</p>,
    Playground: <p>🎮 Jump into the Playground Page</p>,
  };

  return (
    <div style={{ marginTop: "15px" }}>
      <h2>7. Router Demo</h2>

      {/* Navigation buttons */}
      <div style={{ marginBottom: "10px" }}>
        {Object.keys(pages).map((p) => (
          <button key={p} onClick={() => setPage(p)} style={buttonStyle}>
            {p}
          </button>
        ))}
      </div>

      {/* Page display */}
      <div
        style={{
          padding: "15px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          backgroundColor: "#f8f9fa",
        }}
      >
        {pages[page]}
      </div>

      {/* 🔥 Teaching Section */}
      <div
        style={{
          marginTop: "15px",
          padding: "10px",
          backgroundColor: "#e7f3fe",
          borderLeft: "4px solid #2196f3",
        }}
      >
        <h4>What’s happening here?</h4>
        <ul>
          <li>
            We keep track of the <strong>current page</strong> using{" "}
            <code>useState("Home")</code>.
          </li>
          <li>
            When you click a button, <code>setPage()</code> updates the state.
          </li>
          <li>
            React re-renders, and the correct page component is shown.
          </li>
          <li>
            This mimics how real routers (like{" "}
            <code>react-router-dom</code>) work, but in a simpler way.
          </li>
          <li>
            In production, you’d use <code>&lt;Routes&gt; &lt;Route /&gt;</code>{" "}
            for proper URLs, navigation, and history handling.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RouterDemo;

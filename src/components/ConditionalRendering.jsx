import { useState } from "react";

const ConditionalRendering = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mode, setMode] = useState("message");

  return (
    <div>
      <h2>2. Conditional Rendering & JSX</h2>
      <button style={{
          padding: "10px 18px",
          marginRight: "8px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
        }} onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Content
      </button>
      <button style={{
          padding: "10px 18px",
          marginRight: "8px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
        }} onClick={() => setMode(mode === "message" ? "image" : "message")}>
        Switch Mode
      </button>

      {isVisible && (
        <div>
          {mode === "message" ? (
            <p style={{backgroundColor: "#d4edda", padding: "10px", borderRadius: "5px"}}>🎉 Conditional message shown!</p>
          ) : (
            <div
              style={{
                margin: "10px 0",
                width: "100px",
                height: "100px",
                backgroundColor: "green",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white"
              }}
            >
              Circle
            </div>
          )}
        </div>
      )}

      {/* 🔥 Teaching Section */}
      <div
        style={{
          marginTop: "15px",
          padding: "10px",
          backgroundColor: "#fff7e6",
          borderLeft: "4px solid #ff9800"
        }}
      >
        <h4>What’s happening here?</h4>
        <ul>
          <li><strong>isVisible state:</strong> Controls whether the content appears at all. If false → nothing is rendered.</li>
          <li><strong>mode state:</strong> Decides <em>what</em> to render — either a text message or a styled “logo” box.</li>
          <li>We’re using:
            <ul>
              <li><code>&&</code> → to show content only when <code>isVisible</code> is true.</li>
              <li><code>?:</code> (ternary) → to pick between “message” or “image”.</li>
            </ul>
          </li>
          <li>This demonstrates how JSX lets you <em>embed logic directly inside UI</em>.</li>
        </ul>
      </div>
    </div>
  );
};

export default ConditionalRendering;

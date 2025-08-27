import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const buttonStyle = {
  padding: "8px 12px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  backgroundColor: "#007bff",
  color: "white",
};

const ContextDemo = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#000000" : "#ffffff",
        padding: "20px",
        borderRadius: "5px",
        marginTop: "15px",
      }}
    >
      <h2>6. Context API</h2>
      <p>
        Current theme: <strong>{theme}</strong>
      </p>
      <p>This component is reading global state without props.</p>
      <button onClick={toggleTheme} style={buttonStyle}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      {/* 🔥 Teaching Section */}
      <div
        style={{
          marginTop: "15px",
          padding: "10px",
          backgroundColor: "#fff3cd",
          borderLeft: "4px solid #ff9800",
          color: "#000000"
        }}
      >
        <h4>What’s happening here?</h4>
        <ul>
          <li>
            <strong>ThemeContext:</strong> Created with{" "}
            <code>createContext</code> in a separate file.
          </li>
          <li>
            <strong>ThemeProvider:</strong> Wraps the app and provides{" "}
            <code>theme</code> + <code>toggleTheme</code> to all children.
          </li>
          <li>
            <strong>useContext:</strong> Lets this component directly access the
            global values without passing props manually.
          </li>
          <li>
            <em>No prop drilling needed!</em> Context API is like a global store
            for specific values (theme, user, language, etc.).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContextDemo;

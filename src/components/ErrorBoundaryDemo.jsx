import { Component, useState } from "react";

// ErrorBoundary must be a class component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // When an error occurs, update state so UI shows fallback
  static getDerivedStateFromError(error) {
    return { hasError: true, error: error.message };
  }

  // Optional: log error for debugging
  componentDidCatch(error, errorInfo) {
    console.log("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: "20px", 
          backgroundColor: "#f8d7da", 
          border: "1px solid #f5c6cb",
          borderRadius: "5px",
          color: "#721c24"
        }}>
          <h4>🚨 Something went wrong!</h4>
          <p>Error: {this.state.error}</p>
          <button 
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              padding: "6px 12px",
              backgroundColor: "#007bff",
              border: "none",
              borderRadius: "3px",
              color: "white",
              cursor: "pointer"
            }}
          >
            Reset Error Boundary
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Component that can intentionally break
const BuggyComponent = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error("💥 Intentional error for demonstration!");
  }
  return <p style={{ color: "green" }}>✅ Component working perfectly!</p>;
};

// Demo wrapper
const ErrorBoundaryDemo = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  return (
    <div>
      <h2>9. Error Boundaries</h2>
      <button 
        onClick={() => setShouldThrow(!shouldThrow)} 
        style={{
          padding: "6px 12px",
          backgroundColor: shouldThrow ? "#dc3545" : "#28a745",
          border: "none",
          borderRadius: "3px",
          color: "white",
          cursor: "pointer",
          marginBottom: "10px"
        }}
      >
        {shouldThrow ? "Fix Component" : "Break Component"}
      </button>

      {/* ErrorBoundary wrapping BuggyComponent */}
      <ErrorBoundary>
        <div style={{ 
          margin: "15px 0", 
          padding: "15px", 
          border: "1px solid #ccc",
          borderRadius: "5px"
        }}>
          <BuggyComponent shouldThrow={shouldThrow} />
        </div>
      </ErrorBoundary>

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
            <strong>BuggyComponent</strong> can throw an error on purpose when <code>shouldThrow</code> is true.
          </li>
          <li>
            <strong>ErrorBoundary</strong> (class component) catches this error using 
            <code> getDerivedStateFromError </code> and <code>componentDidCatch</code>.
          </li>
          <li>
            Instead of crashing the whole app, a <em>fallback UI</em> is shown with the error message.
          </li>
          <li>
            Clicking <strong>Reset</strong> clears the error and restores the normal UI.
          </li>
          <li>
            Error boundaries <u>only catch errors in the components they wrap</u> — they don’t catch event handlers, async errors, or server errors.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ErrorBoundaryDemo;

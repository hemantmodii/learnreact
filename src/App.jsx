import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";

import StateAndProps from "./components/StateAndProps";
import ConditionalRendering from "./components/ConditionalRendering";
import UseEffectDemo from "./components/UseEffectDemo";
import UseRefDemo from "./components/UseRefDemo";
import UseMemoCallback from "./components/UseMemoCallback";
import ContextDemo from "./components/ContextDemo";
import RouterDemo from "./components/RouterDemo";
import FormsDemo from "./components/FormsDemo";
import ErrorBoundaryDemo from "./components/ErrorBoundaryDemo";
import CustomHookDemo from "./components/CustomHookDemo";
import DataFetchingDemo from "./components/DataFetchingDemo";

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const demos = [
    { title: "State & Props", component: <StateAndProps /> },
    { title: "Conditional Rendering", component: <ConditionalRendering /> },
    { title: "useEffect", component: <UseEffectDemo /> },
    { title: "useRef", component: <UseRefDemo /> },
    { title: "useMemo & useCallback", component: <UseMemoCallback /> },
    { title: "Context API", component: <ContextDemo /> },
    { title: "Router Demo", component: <RouterDemo /> },
    { title: "Forms", component: <FormsDemo /> },
    { title: "Error Boundaries", component: <ErrorBoundaryDemo /> },
    { title: "Custom Hook", component: <CustomHookDemo /> },
    { title: "Data Fetching", component: <DataFetchingDemo /> },
  ];

  return (
    <ThemeProvider>
      <div>
  <h1 style={{ textAlign: "center" }}>⚛️ React Learning Playground</h1>
  <nav style={{
      marginBottom: "20px",
      display: "grid",
      gap: "10px",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    }}>
    {demos.map((demo, i) => (
      <button
        key={i}
        onClick={() => setActiveTab(i)}
        style={{
          padding: "10px 18px",
          marginRight: "8px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: activeTab === i ? "#007bff" : "#e0e0e0",
          color: activeTab === i ? "#fff" : "#333",
          fontWeight: activeTab === i ? "bold" : "normal",
          boxShadow:
            activeTab === i
              ? "0 3px 6px rgba(0,0,0,0.2)"
              : "0 2px 4px rgba(0,0,0,0.1)",
          transition: "all 0.2s ease-in-out",
        }}
      >
        {demo.title}
      </button>
    ))}
  </nav>
  <div
    style={{
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#fafafa",
    }}
  >
    {demos[activeTab].component}
  </div>
</div>

    </ThemeProvider>
  );
};

export default App;

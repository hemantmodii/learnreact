import { useState } from "react";

const inputStyle = {
  display: "block",
  margin: "8px 0",
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  width: "250px"
};

const FormsDemo = () => {
  const [form, setForm] = useState({ name: "", email: "" });

  return (
    <div style={{ marginTop: "15px" }}>
      <h2>8. Forms</h2>

      {/* Controlled inputs */}
      <input
        style={inputStyle}
        name="name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder="Name"
      />
      <input
        style={inputStyle}
        name="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        placeholder="Email"
      />

      {/* Live preview */}
      <p>
        <strong>Preview:</strong>
        <br />
        Name: {form.name}
        <br />
        Email: {form.email}
      </p>

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
            <strong>Controlled Inputs:</strong> The input value is controlled by React state (<code>form</code>).
          </li>
          <li>
            <code>onChange</code> updates state immediately whenever you type.
          </li>
          <li>
            State is updated with <code>setForm({ `...form, field: value` })</code> → we spread existing fields to avoid overwriting.
          </li>
          <li>
            Because state updates cause re-renders, the <strong>Preview</strong> section always shows the latest input.
          </li>
          <li>
            This is the foundation for bigger forms, validation, and submission logic.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FormsDemo;

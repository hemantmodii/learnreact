import { useState, useEffect } from "react";

const DataFetchingDemo = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>11. Data Fetching</h2>

      {/* Loading & Error states */}
      {loading && <p>⏳ Loading posts...</p>}
      {error && <p style={{ color: "red" }}>⚠️ {error}</p>}

      {/* Data Display */}
      {posts.map((p) => (
        <div key={p.id} style={{ marginBottom: "15px", padding: "10px", border: "1px solid #ccc" }}>
          <h4>{p.title}</h4>
          <p>{p.body}</p>
        </div>
      ))}

      {/* Teaching Section */}
      <div
        style={{
          marginTop: "15px",
          padding: "10px",
          backgroundColor: "#e7f3fe",
          borderLeft: "4px solid #2196f3",
        }}
      >
        <h4>Concept: Data Fetching with useEffect</h4>
        <ul>
          <li><strong>useEffect:</strong> Runs after render; perfect for fetching data.</li>
          <li><strong>Loading state:</strong> Shows feedback while waiting for data.</li>
          <li><strong>Error handling:</strong> Always prepare for failed requests.</li>
          <li><strong>Cleanup:</strong> Not needed here, but for live sockets/subscriptions you’d clean up inside useEffect.</li>
        </ul>
      </div>
    </div>
  );
};

export default DataFetchingDemo;

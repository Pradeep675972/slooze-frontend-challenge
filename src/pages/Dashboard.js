import { useState } from "react";

function Dashboard() {
  const role = localStorage.getItem("role");
  const [dark, setDark] = useState(false);

  if (role !== "manager") {
    return <h2>Access Denied</h2>;
  }

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        background: dark ? "#111" : "#fff",
        color: dark ? "#fff" : "#000"
      }}
    >
      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>

      <h1>Manager Dashboard</h1>
      <p>Welcome! You can manage products here.</p>
    </div>
  );
}

export default Dashboard;
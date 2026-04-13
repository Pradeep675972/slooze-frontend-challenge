import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dark, setDark] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    if (email === "manager@test.com" && password === "123456") {
      localStorage.setItem("role", "manager");
      navigate("/dashboard");
    } else if (email === "store@test.com" && password === "123456") {
      localStorage.setItem("role", "store");
      navigate("/products");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: dark ? "#111" : "#f5f5f5",
        color: dark ? "#fff" : "#000"
      }}
    >
      <div
        style={{
          padding: "25px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          width: "300px",
          background: dark ? "#222" : "#fff"
        }}
      >
        <button onClick={() => setDark(!dark)} style={{ marginBottom: "10px" }}>
          Toggle Theme
        </button>

        <h2 style={{ textAlign: "center" }}>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px"
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
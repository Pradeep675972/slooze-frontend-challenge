import { useState } from "react";

function Products() {
  const role = localStorage.getItem("role");
  const [dark, setDark] = useState(false);

  const products = [
    { id: 1, name: "Rice", price: 50 },
    { id: 2, name: "Wheat", price: 40 },
    { id: 3, name: "Sugar", price: 60 }
  ];

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        background: dark ? "#111" : "#f5f5f5",
        color: dark ? "#fff" : "#000"
      }}
    >
      <button onClick={() => setDark(!dark)} style={{ marginBottom: "15px" }}>
        Toggle Theme
      </button>

      <h1 style={{ textAlign: "center" }}>Products</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              width: "200px",
              borderRadius: "10px",
              padding: "15px",
              background: dark ? "#222" : "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>

            {role === "manager" && (
            <button style={{ marginTop: "10px", padding: "5px 10px" }}>
            Edit
            </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
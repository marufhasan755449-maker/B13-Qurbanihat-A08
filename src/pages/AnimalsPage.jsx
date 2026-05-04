import { useState } from "react";
import animals from "../data/animals";
import AnimalCard from "../components/AnimalCard";

export default function AnimalsPage() {
  const [sortOrder, setSortOrder] = useState("default");
  const [typeFilter, setTypeFilter] = useState("All");

  const filtered = animals.filter((a) => typeFilter === "All" ? true : a.type === typeFilter);
  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === "low") return a.price - b.price;
    if (sortOrder === "high") return b.price - a.price;
    return a.id - b.id;
  });

  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "'Raleway', sans-serif" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #fffbf2, #fdf3e3)", borderBottom: "1px solid #e8d5b0", padding: "3rem 1.5rem", textAlign: "center" }}>
        <div style={{ color: "#c9890a", fontSize: "0.78rem", letterSpacing: "0.15em", fontWeight: 700, marginBottom: "0.5rem" }}>— ALL ANIMALS —</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a", fontSize: "clamp(2rem, 5vw, 3.2rem)", marginBottom: "0.4rem" }}>All Animals</h1>
        <p style={{ color: "#888", fontSize: "0.9rem" }}>{animals.length} animals available · Sourced from trusted farms</p>
      </div>

      {/* Filters */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "1.5rem 1.5rem 0", display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {["All", "Cow", "Goat"].map((type) => (
            <button key={type} onClick={() => setTypeFilter(type)}
              style={{ background: typeFilter === type ? "linear-gradient(135deg, #c9890a, #e8a020)" : "#fff", border: "1.5px solid #c9890a", color: typeFilter === type ? "#fff" : "#c9890a", padding: "0.4rem 1rem", borderRadius: 20, cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.83rem", transition: "all 0.2s" }}>
              {type === "All" ? "All" : type === "Cow" ? "🐄 Cows" : "🐐 Goats"}
            </button>
          ))}
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <span style={{ color: "#888", fontSize: "0.83rem" }}>Sort by:</span>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}
            style={{ background: "#fff", border: "1.5px solid #e8d5b0", color: "#333", padding: "0.4rem 0.8rem", borderRadius: 8, fontFamily: "'Raleway', sans-serif", fontSize: "0.83rem", cursor: "pointer", outline: "none" }}>
            <option value="default">Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1.5rem 4rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
        {sorted.map((a) => <AnimalCard key={a.id} animal={a} />)}
      </div>

      {sorted.length === 0 && (
        <div style={{ textAlign: "center", padding: "4rem", color: "#aaa" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
          <p>No animals found.</p>
        </div>
      )}
    </div>
  );
}

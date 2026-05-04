import { Link } from "react-router-dom";

export default function AnimalCard({ animal }) {
  return (
    <div
      style={{ background: "#fff", border: "1px solid #e8d5b0", borderRadius: 14, overflow: "hidden", transition: "transform 0.3s, box-shadow 0.3s", cursor: "pointer", fontFamily: "'Raleway', sans-serif" }}
      onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 12px 35px rgba(201,137,10,0.18)"; e.currentTarget.style.borderColor = "#c9890a"; }}
      onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#e8d5b0"; }}
    >
      <div style={{ position: "relative", height: 195, overflow: "hidden" }}>
        <img src={animal.image} alt={animal.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.07)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")} />
        <div style={{ position: "absolute", top: 10, right: 10, background: animal.type === "Cow" ? "#c9890a" : "#2ecc71", color: "#fff", fontSize: "0.68rem", fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>
          {animal.type}
        </div>
        <div style={{ position: "absolute", top: 10, left: 10, background: "rgba(255,255,255,0.92)", color: "#555", fontSize: "0.68rem", padding: "3px 10px", borderRadius: 20, fontWeight: 600 }}>
          {animal.category}
        </div>
      </div>

      <div style={{ padding: "1.1rem" }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a", fontSize: "1.05rem", marginBottom: "0.5rem" }}>{animal.name}</h3>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "0.8rem" }}>
          {[
            { label: "Breed", value: animal.breed },
            { label: "Weight", value: `${animal.weight} kg` },
            { label: "Age", value: `${animal.age} yr` },
            { label: "Location", value: animal.location },
          ].map((item) => (
            <span key={item.label} style={{ background: "#fdf3e3", border: "1px solid #e8d5b0", color: "#666", fontSize: "0.7rem", padding: "2px 8px", borderRadius: 4 }}>
              {item.label}: <strong style={{ color: "#333" }}>{item.value}</strong>
            </span>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid #f0e0c8" }}>
          <div>
            <div style={{ fontSize: "0.68rem", color: "#aaa" }}>Price</div>
            <div style={{ fontFamily: "'Playfair Display', serif", color: "#c9890a", fontSize: "1.2rem", fontWeight: 700 }}>
              ৳ {animal.price.toLocaleString()}
            </div>
          </div>
          <Link to={`/animals/${animal.id}`} style={{ textDecoration: "none" }}>
            <button style={{ background: "linear-gradient(135deg, #c9890a, #e8a020)", border: "none", color: "#fff", padding: "0.5rem 1.1rem", borderRadius: 8, fontWeight: 700, fontSize: "0.82rem", cursor: "pointer", fontFamily: "'Raleway', sans-serif" }}>
              View Details →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

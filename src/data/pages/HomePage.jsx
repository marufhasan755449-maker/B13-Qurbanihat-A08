import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import animals from "../data/animals";
import AnimalCard from "../components/AnimalCard";

export default function HomePage() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);
  const featured = animals.slice(0, 4);

  const tips = [
    { icon: "🩺", title: "Health Check", desc: "Always get the animal examined by a licensed veterinarian before purchasing for Qurbani." },
    { icon: "⚖️", title: "Correct Weight", desc: "Cows should weigh at least 200 kg and goats should be above 25 kg for a valid Qurbani." },
    { icon: "🦷", title: "Verify Age", desc: "Cows must be at least 2 years old and goats at least 1 year old to be eligible for Qurbani." },
    { icon: "🚫", title: "Disease-Free", desc: "Check that the eyes, nose and mouth are clean and there are no signs of illness or injury." },
  ];

  const breeds = [
    { name: "Shahiwal", origin: "Pakistan", type: "Cow", icon: "🐄" },
    { name: "Brahman", origin: "USA", type: "Cow", icon: "🐂" },
    { name: "Hariana", origin: "India", type: "Cow", icon: "🐃" },
    { name: "Black Bengal", origin: "Bangladesh", type: "Goat", icon: "🐐" },
    { name: "Jamuna Pari", origin: "India", type: "Goat", icon: "🐏" },
    { name: "Sirohi", origin: "Rajasthan", type: "Goat", icon: "🦌" },
  ];

  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "'Raleway', sans-serif" }}>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #fffbf2 0%, #fdf3e3 50%, #fff8ee 100%)", borderBottom: "1px solid #e8d5b0", padding: "5rem 1.5rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 500, height: 500, background: "radial-gradient(circle, rgba(201,137,10,0.08) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(25px)", transition: "opacity 0.8s ease, transform 0.8s ease" }}>
          <div style={{ fontFamily: "'Amiri', serif", fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)", color: "#c9890a", marginBottom: "1rem" }}>
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </div>

          <div style={{ display: "inline-block", background: "#fff", border: "1.5px solid #c9890a", borderRadius: 30, padding: "0.35rem 1.1rem", fontSize: "0.8rem", color: "#c9890a", marginBottom: "1.5rem", letterSpacing: "0.1em", fontWeight: 700 }}>
            🐄 QURBANI 2025 · EID AL-ADHA 1446
          </div>

          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 7vw, 5rem)", color: "#1a1a1a", lineHeight: 1.1, marginBottom: "1rem" }}>
            QurbaniHat
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2.2vw, 1.3rem)", color: "#555", maxWidth: 580, margin: "0 auto 0.75rem" }}>
            Bangladesh's Premier Online Qurbani Livestock Marketplace
          </p>
          <p style={{ color: "#aaa", fontSize: "0.92rem", marginBottom: "2.5rem" }}>
            Healthy · Strong · Halal · Sourced Directly from Trusted Farms
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/animals" style={{ textDecoration: "none" }}>
              <button style={{ background: "linear-gradient(135deg, #c9890a, #e8a020)", border: "none", color: "#fff", padding: "0.85rem 2.2rem", borderRadius: 50, fontSize: "1rem", fontWeight: 700, cursor: "pointer", fontFamily: "'Raleway', sans-serif", boxShadow: "0 6px 20px rgba(201,137,10,0.3)", transition: "transform 0.2s" }}
                onMouseOver={(e) => e.target.style.transform = "scale(1.04)"}
                onMouseOut={(e) => e.target.style.transform = "scale(1)"}>
                🐄 Browse Animals
              </button>
            </Link>
            <a href="#featured" style={{ textDecoration: "none" }}>
              <button style={{ background: "#fff", border: "1.5px solid #c9890a", color: "#c9890a", padding: "0.85rem 2.2rem", borderRadius: 50, fontSize: "1rem", fontWeight: 600, cursor: "pointer", fontFamily: "'Raleway', sans-serif" }}>
                Popular Picks →
              </button>
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: "2.5rem", justifyContent: "center", marginTop: "3rem", flexWrap: "wrap" }}>
            {[{ num: "500+", label: "Healthy Animals" }, { num: "12+", label: "Trusted Farms" }, { num: "100%", label: "Halal Certified" }, { num: "24/7", label: "Support" }].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.7rem", color: "#c9890a", fontWeight: 700 }}>{s.num}</div>
                <div style={{ fontSize: "0.78rem", color: "#aaa", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section id="featured" style={{ padding: "5rem 1.5rem", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{ color: "#c9890a", fontSize: "0.78rem", letterSpacing: "0.15em", fontWeight: 700, marginBottom: "0.6rem" }}>— FEATURED ANIMALS —</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", marginBottom: "0.6rem" }}>Hand-Picked Animals</h2>
          <p style={{ color: "#888", fontSize: "0.92rem" }}>Top quality animals, sourced directly from trusted farms</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {featured.map((a) => <AnimalCard key={a.id} animal={a} />)}
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link to="/animals" style={{ textDecoration: "none" }}>
            <button style={{ background: "#fff", border: "1.5px solid #c9890a", color: "#c9890a", padding: "0.75rem 2rem", borderRadius: 50, fontSize: "0.92rem", fontWeight: 700, cursor: "pointer", fontFamily: "'Raleway', sans-serif", transition: "all 0.2s" }}
              onMouseOver={(e) => { e.target.style.background = "#c9890a"; e.target.style.color = "#fff"; }}
              onMouseOut={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#c9890a"; }}>
              View All Animals →
            </button>
          </Link>
        </div>
      </section>

      {/* Tips */}
      <section style={{ padding: "5rem 1.5rem", background: "#fdf3e3" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{ color: "#c9890a", fontSize: "0.78rem", letterSpacing: "0.15em", fontWeight: 700, marginBottom: "0.6rem" }}>— QURBANI TIPS —</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a", fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>Qurbani Guidelines</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(235px, 1fr))", gap: "1.5rem" }}>
            {tips.map((tip, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e8d5b0", borderRadius: 14, padding: "1.75rem", transition: "all 0.3s" }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = "#c9890a"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(201,137,10,0.12)"; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = "#e8d5b0"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ fontSize: "2.2rem", marginBottom: "0.85rem" }}>{tip.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#c9890a", fontSize: "1.05rem", marginBottom: "0.65rem" }}>{tip.title}</h3>
                <p style={{ color: "#666", fontSize: "0.86rem", lineHeight: 1.7 }}>{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Breeds */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{ color: "#c9890a", fontSize: "0.78rem", letterSpacing: "0.15em", fontWeight: 700, marginBottom: "0.6rem" }}>— TOP BREEDS —</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a", fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>Popular Breeds</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "1rem" }}>
          {breeds.map((b, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #e8d5b0", borderRadius: 12, padding: "1.4rem 1rem", textAlign: "center", transition: "all 0.3s" }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = "#c9890a"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 6px 18px rgba(201,137,10,0.12)"; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = "#e8d5b0"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
              <div style={{ fontSize: "2.2rem", marginBottom: "0.6rem" }}>{b.icon}</div>
              <div style={{ color: "#1a1a1a", fontWeight: 700, fontSize: "0.92rem", marginBottom: "0.2rem" }}>{b.name}</div>
              <div style={{ fontSize: "0.7rem", color: "#aaa" }}>{b.type} · {b.origin}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

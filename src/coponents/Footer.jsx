import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ background: "#1a1a1a", color: "#ccc", fontFamily: "'Raleway', sans-serif", marginTop: "auto" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 1.5rem 1.5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "2.5rem" }}>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
            <span style={{ fontSize: "1.8rem" }}>🐄</span>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.3rem", color: "#f5c842" }}>QurbaniHat</div>
              <div style={{ fontSize: "0.65rem", color: "#c9890a" }}>Trusted Livestock Market</div>
            </div>
          </div>
          <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#aaa" }}>
            Bangladesh's most trusted online Qurbani livestock marketplace. Best quality animals at the right price.
          </p>
          <div style={{ display: "flex", gap: "0.6rem", marginTop: "1rem" }}>
            {["📘", "📸", "🐦", "▶️"].map((icon, i) => (
              <a key={i} href="#" style={{ width: 34, height: 34, borderRadius: "50%", background: "#2a2a2a", border: "1px solid #444", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontSize: "0.9rem" }}>{icon}</a>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ color: "#f5c842", fontFamily: "'Playfair Display', serif", fontSize: "1rem", marginBottom: "1rem", borderBottom: "1px solid #333", paddingBottom: "0.5rem" }}>Quick Links</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[{ label: "Home", to: "/" }, { label: "All Animals", to: "/animals" }, { label: "My Profile", to: "/my-profile" }, { label: "Login", to: "/login" }, { label: "Register", to: "/register" }].map((link) => (
              <Link key={link.to} to={link.to} style={{ color: "#aaa", textDecoration: "none", fontSize: "0.88rem" }}
                onMouseOver={(e) => (e.target.style.color = "#f5c842")}
                onMouseOut={(e) => (e.target.style.color = "#aaa")}>
                → {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ color: "#f5c842", fontFamily: "'Playfair Display', serif", fontSize: "1rem", marginBottom: "1rem", borderBottom: "1px solid #333", paddingBottom: "0.5rem" }}>About Us</h4>
          <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "#aaa" }}>
            We have been supplying halal Qurbani animals since 2018. All our animals are sourced directly from trusted farms.
          </p>
          <div style={{ marginTop: "0.8rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            <span style={{ fontSize: "0.82rem", color: "#aaa" }}>✅ 100% Halal Guaranteed</span>
            <span style={{ fontSize: "0.82rem", color: "#aaa" }}>✅ Vet Certified Animals</span>
            <span style={{ fontSize: "0.82rem", color: "#aaa" }}>✅ Fast Delivery Service</span>
          </div>
        </div>

        <div>
          <h4 style={{ color: "#f5c842", fontFamily: "'Playfair Display', serif", fontSize: "1rem", marginBottom: "1rem", borderBottom: "1px solid #333", paddingBottom: "0.5rem" }}>Contact Info</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              { icon: "📍", text: "123 Livestock Market Road, Dhaka-1200" },
              { icon: "📞", text: "+880 1700-123456" },
              { icon: "📧", text: "info@qurbanihat.com" },
              { icon: "🕐", text: "Sat–Thu: 8:00 AM – 8:00 PM" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "0.9rem" }}>{item.icon}</span>
                <span style={{ fontSize: "0.82rem", color: "#aaa", lineHeight: 1.5 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #333", textAlign: "center", padding: "1rem 1.5rem", fontSize: "0.78rem", color: "#555" }}>
        © 2025 QurbaniHat. All Rights Reserved. | Made with ❤️ for the Ummah
      </div>
    </footer>
  );
}

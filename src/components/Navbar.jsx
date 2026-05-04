import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => { logout(); navigate("/"); };

  return (
    <nav style={{ background: "#fff", borderBottom: "2px solid #c9890a", position: "sticky", top: 0, zIndex: 1000, boxShadow: "0 2px 12px rgba(201,137,10,0.15)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>

        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
          <span style={{ fontSize: "2rem" }}>🐄</span>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.5rem", color: "#c9890a", lineHeight: 1 }}>QurbaniHat</div>
            <div style={{ fontSize: "0.62rem", color: "#888", letterSpacing: "0.08em" }}>Trusted Livestock Market</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="desktop-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/animals">All Animals</NavLink>
          {user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <Link to="/my-profile" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <img src={user.photo} alt={user.name} style={{ width: 36, height: 36, borderRadius: "50%", border: "2px solid #c9890a", objectFit: "cover" }} />
                <span style={{ color: "#333", fontSize: "0.9rem", fontWeight: 600 }}>{user.name.split(" ")[0]}</span>
              </Link>
              <button onClick={handleLogout}
                style={{ background: "#fff", border: "1.5px solid #c9890a", color: "#c9890a", padding: "0.4rem 1rem", borderRadius: 6, cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontSize: "0.85rem", fontWeight: 600, transition: "all 0.2s" }}
                onMouseOver={(e) => { e.target.style.background = "#c9890a"; e.target.style.color = "#fff"; }}
                onMouseOut={(e) => { e.target.style.background = "#fff"; e.target.style.color = "#c9890a"; }}>
                Logout
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <button style={{ background: "#fff", border: "1.5px solid #c9890a", color: "#c9890a", padding: "0.45rem 1.2rem", borderRadius: 6, cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontSize: "0.88rem", fontWeight: 600, transition: "all 0.2s" }}
                  onMouseOver={(e) => { e.target.style.background = "#fdf3e3"; }}
                  onMouseOut={(e) => { e.target.style.background = "#fff"; }}>
                  Login
                </button>
              </Link>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <button style={{ background: "linear-gradient(135deg, #c9890a, #e8a020)", border: "none", color: "#fff", padding: "0.45rem 1.2rem", borderRadius: 6, cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.88rem" }}>
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile hamburger */}
        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "transparent", border: "none", color: "#c9890a", fontSize: "1.5rem", cursor: "pointer" }}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: "#fff", padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem", borderTop: "1px solid #f0e0c8" }} className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)} style={{ color: "#333", textDecoration: "none", fontWeight: 500 }}>Home</Link>
          <Link to="/animals" onClick={() => setMenuOpen(false)} style={{ color: "#333", textDecoration: "none", fontWeight: 500 }}>All Animals</Link>
          {user ? (
            <>
              <Link to="/my-profile" onClick={() => setMenuOpen(false)} style={{ color: "#333", textDecoration: "none", fontWeight: 500 }}>My Profile</Link>
              <button onClick={() => { handleLogout(); setMenuOpen(false); }} style={{ background: "transparent", border: "1.5px solid #c9890a", color: "#c9890a", padding: "0.5rem", borderRadius: 6, cursor: "pointer", textAlign: "left", fontWeight: 600 }}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)} style={{ color: "#333", textDecoration: "none", fontWeight: 500 }}>Login</Link>
              <Link to="/register" onClick={() => setMenuOpen(false)} style={{ color: "#c9890a", textDecoration: "none", fontWeight: 700 }}>Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, children }) {
  return (
    <Link to={to}
      style={{ color: "#444", textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", letterSpacing: "0.02em", transition: "color 0.2s" }}
      onMouseOver={(e) => (e.target.style.color = "#c9890a")}
      onMouseOut={(e) => (e.target.style.color = "#444")}>
      {children}
    </Link>
  );
}

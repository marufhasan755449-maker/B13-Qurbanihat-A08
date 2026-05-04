import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!form.email || !form.password) { setError("Please fill in all fields."); return; }
    setLoading(true);
    setTimeout(() => { login(form.email, form.password); setLoading(false); navigate("/"); }, 800);
  };

  const inputStyle = { width: "100%", background: "#fff", border: "1.5px solid #e8d5b0", borderRadius: 10, color: "#333", padding: "0.8rem 1rem", fontFamily: "'Raleway', sans-serif", fontSize: "0.9rem", outline: "none", transition: "border-color 0.2s, box-shadow 0.2s", boxSizing: "border-box" };

  return (
    <div style={{ background: "linear-gradient(135deg, #fffbf2, #fdf3e3)", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1.5rem", fontFamily: "'Raleway', sans-serif" }}>
      <div style={{ background: "#fff", border: "1px solid #e8d5b0", borderRadius: 20, padding: "clamp(2rem, 5vw, 3rem)", width: "100%", maxWidth: 430, boxShadow: "0 8px 40px rgba(201,137,10,0.1)" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <span style={{ fontSize: "2.5rem" }}>🐄</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a", fontSize: "1.8rem", marginTop: "0.5rem", marginBottom: "0.25rem" }}>Welcome Back</h1>
          <p style={{ color: "#aaa", fontSize: "0.85rem" }}>Sign in to your QurbaniHat account</p>
        </div>

        {error && (
          <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", color: "#991b1b", padding: "0.75rem 1rem", borderRadius: 8, fontSize: "0.85rem", marginBottom: "1.25rem", textAlign: "center" }}>
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {[{ key: "email", label: "Email Address", placeholder: "example@email.com", type: "email" }, { key: "password", label: "Password", placeholder: "••••••••", type: "password" }].map((field) => (
            <div key={field.key} style={{ marginBottom: "1.2rem" }}>
              <label style={{ display: "block", color: "#555", fontSize: "0.83rem", fontWeight: 600, marginBottom: "0.4rem" }}>{field.label}</label>
              <input type={field.type} placeholder={field.placeholder} value={form[field.key]}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = "#c9890a"; e.target.style.boxShadow = "0 0 0 3px rgba(201,137,10,0.1)"; }}
                onBlur={(e) => { e.target.style.borderColor = "#e8d5b0"; e.target.style.boxShadow = "none"; }} />
            </div>
          ))}
          <button type="submit" disabled={loading}
            style={{ width: "100%", background: loading ? "#ddd" : "linear-gradient(135deg, #c9890a, #e8a020)", border: "none", color: "#fff", padding: "0.9rem", borderRadius: 10, cursor: loading ? "not-allowed" : "pointer", fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "1rem", marginTop: "0.5rem" }}>
            {loading ? "⏳ Signing in..." : "Sign In →"}
          </button>
        </form>
        <p style={{ textAlign: "center", marginTop: "1.5rem", color: "#aaa", fontSize: "0.87rem" }}>
          Don't have an account?{" "}
          <Link to="/register" style={{ color: "#c9890a", textDecoration: "none", fontWeight: 700 }}>Register here</Link>
        </p>
      </div>
    </div>
  );
}

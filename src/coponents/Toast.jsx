import { useEffect } from "react";

export default function Toast({ message, type = "success", onClose }) {
  useEffect(() => { const t = setTimeout(onClose, 3500); return () => clearTimeout(t); }, [onClose]);
  return (
    <div style={{
      position: "fixed", bottom: "2rem", right: "2rem", zIndex: 9999,
      background: type === "success" ? "#f0fdf4" : "#fef2f2",
      border: `1.5px solid ${type === "success" ? "#22c55e" : "#ef4444"}`,
      color: type === "success" ? "#166534" : "#991b1b",
      padding: "1rem 1.4rem", borderRadius: 12, fontFamily: "'Raleway', sans-serif", fontSize: "0.92rem",
      boxShadow: "0 8px 30px rgba(0,0,0,0.12)", display: "flex", alignItems: "center", gap: "0.75rem",
      animation: "slideIn 0.3s ease", maxWidth: 360,
    }}>
      <span style={{ fontSize: "1.2rem" }}>{type === "success" ? "✅" : "❌"}</span>
      <span>{message}</span>
      <button onClick={onClose} style={{ background: "transparent", border: "none", color: "inherit", cursor: "pointer", fontSize: "1rem", marginLeft: "auto", opacity: 0.6 }}>✕</button>
    </div>
  );
}

import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  if (!user) return null;

  return (
    <div style={{ background: "#f9f9f9", minHeight: "100vh", fontFamily: "'Raleway', sans-serif", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: 580, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: "#c9890a", fontSize: "0.78rem", letterSpacing: "0.15em", fontWeight: 700, marginBottom: "0.5rem" }}>— MY PROFILE —</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a", fontSize: "2rem" }}>My Profile</h1>
        </div>

        <div style={{ background: "#fff", border: "1px solid #e8d5b0", borderRadius: 20, padding: "2.5rem", textAlign: "center", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
          <div style={{ position: "relative", display: "inline-block", marginBottom: "1.5rem" }}>
            <img src={user.photo} alt={user.name} style={{ width: 110, height: 110, borderRadius: "50%", border: "3px solid #c9890a", objectFit: "cover", boxShadow: "0 4px 16px rgba(201,137,10,0.2)" }} />
            <div style={{ position: "absolute", bottom: 4, right: 4, width: 20, height: 20, background: "#22c55e", borderRadius: "50%", border: "2px solid #fff" }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a", fontSize: "1.5rem", marginBottom: "0.4rem" }}>{user.name}</h2>
          <p style={{ color: "#aaa", fontSize: "0.88rem", marginBottom: "2rem" }}>{user.email}</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem", marginBottom: "2rem", textAlign: "left" }}>
            {[{ icon: "👤", label: "Name", value: user.name }, { icon: "📧", label: "Email", value: user.email }, { icon: "✅", label: "Status", value: "Active" }, { icon: "🛡️", label: "Account", value: "Verified" }].map((item) => (
              <div key={item.label} style={{ background: "#fdf3e3", border: "1px solid #e8d5b0", borderRadius: 10, padding: "0.9rem" }}>
                <div style={{ fontSize: "1.2rem", marginBottom: "0.25rem" }}>{item.icon}</div>
                <div style={{ fontSize: "0.68rem", color: "#aaa", marginBottom: "0.15rem" }}>{item.label}</div>
                <div style={{ color: "#1a1a1a", fontSize: "0.86rem", fontWeight: 700, wordBreak: "break-all" }}>{item.value}</div>
              </div>
            ))}
          </div>

          <button onClick={() => navigate("/update-profile")}
            style={{ width: "100%", background: "linear-gradient(135deg, #c9890a, #e8a020)", border: "none", color: "#fff", padding: "0.9rem", borderRadius: 12, cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "1rem" }}>
            ✏️ Update Information
          </button>
        </div>
      </div>
    </div>
  );
}

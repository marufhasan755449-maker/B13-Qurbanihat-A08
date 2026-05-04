import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Toast from "../components/Toast";

export default function UpdateProfilePage() {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: user?.name || "", photo: user?.photo || "" });
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) { setToast({ message: "Please enter your name.", type: "error" }); return; }
    setLoading(true);
    setTimeout(() => {
      updateProfile(form.name, form.photo || user.photo);
      setLoading(false);
      setToast({ message: "Profile updated successfully!", type: "success" });
      setTimeout(() => navigate("/my-profile"), 2000);
    }, 800);
  };

  const inputStyle = { width: "100%", background: "#fff", border: "1.5px solid #e8d5b0", borderRadius: 10, color: "#333", padding: "0.8rem 1rem", fontFamily: "'Raleway', sans-serif", fontSize: "0.9rem", outline: "none", boxSizing: "border-box", transition: "border-color 0.2s" };

  return (
    <div style={{ background: "#f9f9f9", minHeight: "100vh", fontFamily: "'Raleway', sans-serif", padding: "4rem 1.5rem" }}>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      <div style={{ maxWidth: 480, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: "#c9890a", fontSize: "0.78rem", letterSpacing: "0.15em", fontWeight: 700, marginBottom: "0.5rem" }}>— UPDATE PROFILE —</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a", fontSize: "2rem" }}>Update Information</h1>
        </div>

        <div style={{ background: "#fff", border: "1px solid #e8d5b0", borderRadius: 20, padding: "2.5rem", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <img src={form.photo || user?.photo} alt="Preview"
              style={{ width: 90, height: 90, borderRadius: "50%", border: "2px solid #c9890a", objectFit: "cover" }}
              onError={(e) => { e.target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`; }} />
            <p style={{ color: "#aaa", fontSize: "0.72rem", marginTop: "0.4rem" }}>Photo Preview</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1.2rem" }}>
              <label style={{ display: "block", color: "#555", fontSize: "0.83rem", fontWeight: 600, marginBottom: "0.4rem" }}>New Name</label>
              <input type="text" placeholder="Enter your name" value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#c9890a")}
                onBlur={(e) => (e.target.style.borderColor = "#e8d5b0")} />
            </div>
            <div style={{ marginBottom: "2rem" }}>
              <label style={{ display: "block", color: "#555", fontSize: "0.83rem", fontWeight: 600, marginBottom: "0.4rem" }}>Photo URL</label>
              <input type="url" placeholder="https://example.com/photo.jpg" value={form.photo}
                onChange={(e) => setForm({ ...form, photo: e.target.value })}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#c9890a")}
                onBlur={(e) => (e.target.style.borderColor = "#e8d5b0")} />
              <p style={{ color: "#bbb", fontSize: "0.72rem", marginTop: "0.35rem" }}>* Paste a direct image URL (compatible with better-auth updateUser API)</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              <button type="button" onClick={() => navigate("/my-profile")}
                style={{ background: "#fff", border: "1.5px solid #c9890a", color: "#c9890a", padding: "0.8rem", borderRadius: 10, cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>
                Cancel
              </button>
              <button type="submit" disabled={loading}
                style={{ background: loading ? "#ddd" : "linear-gradient(135deg, #c9890a, #e8a020)", border: "none", color: "#fff", padding: "0.8rem", borderRadius: 10, cursor: loading ? "not-allowed" : "pointer", fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>
                {loading ? "Updating..." : "✅ Update"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

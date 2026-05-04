import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import animals from "../data/animals";
import { useAuth } from "../context/AuthContext";
import Toast from "../components/Toast";

export default function DetailsPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const animal = animals.find((a) => a.id === parseInt(id));
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
  const [toast, setToast] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  if (!animal) return (
    <div style={{ background: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", fontFamily: "'Raleway', sans-serif" }}>
        <div style={{ fontSize: "4rem" }}>😢</div>
        <h2 style={{ color: "#1a1a1a", fontFamily: "'Playfair Display', serif", marginTop: "1rem" }}>Animal Not Found</h2>
        <button onClick={() => navigate("/animals")} style={{ marginTop: "1.5rem", background: "linear-gradient(135deg, #c9890a, #e8a020)", border: "none", color: "#fff", padding: "0.75rem 2rem", borderRadius: 8, cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>View All Animals</button>
      </div>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.address) { setToast({ message: "Please fill in all fields!", type: "error" }); return; }
    setSubmitting(true);
    setTimeout(() => {
      setForm({ name: "", email: "", phone: "", address: "" });
      setToast({ message: `Booking confirmed for "${animal.name}"! We will contact you shortly.`, type: "success" });
      setSubmitting(false);
    }, 1000);
  };

  const inputStyle = { width: "100%", background: "#fff", border: "1.5px solid #e8d5b0", borderRadius: 8, color: "#333", padding: "0.75rem 1rem", fontFamily: "'Raleway', sans-serif", fontSize: "0.9rem", outline: "none", transition: "border-color 0.2s", boxSizing: "border-box" };

  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "'Raleway', sans-serif" }}>
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1.5rem" }}>
        <button onClick={() => navigate(-1)} style={{ background: "#fff", border: "1px solid #e8d5b0", color: "#666", padding: "0.5rem 1rem", borderRadius: 8, cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontSize: "0.83rem", marginBottom: "2rem" }}>← Go Back</button>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
          <div>
            <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #e8d5b0", marginBottom: "1.5rem" }}>
              <img src={animal.image} alt={animal.name} style={{ width: "100%", height: 320, objectFit: "cover" }} />
            </div>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
              <span style={{ background: "#c9890a", color: "#fff", padding: "3px 12px", borderRadius: 20, fontSize: "0.73rem", fontWeight: 700 }}>{animal.type}</span>
              <span style={{ background: "#fdf3e3", border: "1px solid #e8d5b0", color: "#666", padding: "3px 12px", borderRadius: 20, fontSize: "0.73rem" }}>{animal.category}</span>
              <span style={{ background: "#f0fdf4", border: "1px solid #22c55e44", color: "#166534", padding: "3px 12px", borderRadius: 20, fontSize: "0.73rem" }}>✅ Halal Certified</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a", fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1rem" }}>{animal.name}</h1>
            <p style={{ color: "#666", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "1.5rem" }}>{animal.description}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {[{ label: "Breed", value: animal.breed }, { label: "Weight", value: `${animal.weight} kg` }, { label: "Age", value: `${animal.age} years` }, { label: "Location", value: animal.location }].map((item) => (
                <div key={item.label} style={{ background: "#fdf3e3", border: "1px solid #e8d5b0", borderRadius: 10, padding: "0.75rem 1rem" }}>
                  <div style={{ fontSize: "0.68rem", color: "#aaa", marginBottom: "0.2rem" }}>{item.label}</div>
                  <div style={{ color: "#1a1a1a", fontWeight: 700, fontSize: "0.92rem" }}>{item.value}</div>
                </div>
              ))}
            </div>
            <div style={{ background: "linear-gradient(135deg, #fffbf2, #fdf3e3)", border: "2px solid #c9890a", borderRadius: 12, padding: "1.25rem", marginTop: "1.25rem", textAlign: "center" }}>
              <div style={{ fontSize: "0.75rem", color: "#aaa", marginBottom: "0.2rem" }}>Price</div>
              <div style={{ fontFamily: "'Playfair Display', serif", color: "#c9890a", fontSize: "2rem", fontWeight: 700 }}>৳ {animal.price.toLocaleString()}</div>
            </div>
          </div>
          <div>
            <div style={{ background: "#fff", border: "1px solid #e8d5b0", borderRadius: 16, padding: "2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a", fontSize: "1.5rem", marginBottom: "0.4rem" }}>Book This Animal</h2>
              <p style={{ color: "#aaa", fontSize: "0.83rem", marginBottom: "1.75rem" }}>Fill in your details and we will contact you shortly.</p>

              {!user ? (
                <div style={{ textAlign: "center", padding: "2rem" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔒</div>
                  <p style={{ color: "#666", marginBottom: "1.5rem", lineHeight: 1.6 }}>You must be logged in to place a booking.</p>
                  <button onClick={() => navigate("/login")} style={{ background: "linear-gradient(135deg, #c9890a, #e8a020)", border: "none", color: "#fff", padding: "0.8rem 2rem", borderRadius: 10, cursor: "pointer", fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "0.95rem", width: "100%" }}>
                    Login to Book
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {[{ key: "name", label: "Full Name", placeholder: "e.g. Mohammad Rahim", type: "text" }, { key: "email", label: "Email Address", placeholder: "example@email.com", type: "email" }, { key: "phone", label: "Phone Number", placeholder: "01XXXXXXXXX", type: "tel" }, { key: "address", label: "Delivery Address", placeholder: "Enter your full address", type: "text" }].map((field) => (
                    <div key={field.key} style={{ marginBottom: "1.1rem" }}>
                      <label style={{ display: "block", color: "#555", fontSize: "0.83rem", fontWeight: 600, marginBottom: "0.4rem" }}>{field.label}</label>
                      <input type={field.type} placeholder={field.placeholder} value={form[field.key]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "#c9890a")}
                        onBlur={(e) => (e.target.style.borderColor = "#e8d5b0")} />
                    </div>
                  ))}
                  <button type="submit" disabled={submitting} style={{ width: "100%", background: submitting ? "#ccc" : "linear-gradient(135deg, #c9890a, #e8a020)", border: "none", color: "#fff", padding: "0.9rem", borderRadius: 10, cursor: submitting ? "not-allowed" : "pointer", fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: "1rem", marginTop: "0.5rem" }}>
                    {submitting ? "⏳ Processing..." : "🐄 Confirm Booking"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

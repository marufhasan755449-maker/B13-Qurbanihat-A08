import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "./pages/HomePage";
import AnimalsPage from "./pages/AnimalsPage";
import DetailsPage from "./pages/DetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import UpdateProfilePage from "./pages/UpdateProfilePage";

function Layout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/animals" element={<Layout><AnimalsPage /></Layout>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/animals/:id" element={<Layout><DetailsPage /></Layout>} />
          <Route path="/my-profile" element={<PrivateRoute><Layout><ProfilePage /></Layout></PrivateRoute>} />
          <Route path="/update-profile" element={<PrivateRoute><Layout><UpdateProfilePage /></Layout></PrivateRoute>} />
          <Route path="*" element={
            <Layout>
              <div style={{ background: "#fff", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", fontFamily: "'Raleway', sans-serif", textAlign: "center", padding: "2rem" }}>
                <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>🐄</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#1a1a1a", fontSize: "2rem", marginBottom: "0.5rem" }}>404 - Page Not Found</h2>
                <p style={{ color: "#aaa", marginBottom: "1.5rem" }}>The page you are looking for does not exist.</p>
                <a href="/" style={{ background: "linear-gradient(135deg, #c9890a, #e8a020)", color: "#fff", padding: "0.75rem 2rem", borderRadius: 10, textDecoration: "none", fontWeight: 700 }}>Go to Home</a>
              </div>
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

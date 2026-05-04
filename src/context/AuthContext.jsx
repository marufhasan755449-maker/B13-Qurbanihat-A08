import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("qurbanihat_user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (email, password) => {
    // Simulated login - in real app use better-auth
    const userData = {
      name: email.split("@")[0].replace(/\./g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      email,
      photo: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
    };
    setUser(userData);
    localStorage.setItem("qurbanihat_user", JSON.stringify(userData));
    return true;
  };

  const register = (name, email, password) => {
    const userData = {
      name,
      email,
      photo: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
    };
    setUser(userData);
    localStorage.setItem("qurbanihat_user", JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("qurbanihat_user");
  };

  const updateProfile = (name, photo) => {
    const updated = { ...user, name, photo };
    setUser(updated);
    localStorage.setItem("qurbanihat_user", JSON.stringify(updated));
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

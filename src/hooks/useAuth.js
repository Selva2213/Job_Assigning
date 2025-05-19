import { useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (username, role) => {
    const userData = { username, role };
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return {
    user,
    isAuthenticated: !!user,
    login,
    logout,
  };
}

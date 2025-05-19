import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import Login from "./pages/Login";  // import your Login.jsx

import "./App.css";
import SkillsWithJobs from "./Components/SkillsWithJob";
import SkillAdmin from "./pages/SkillAdmin";

function App() {
  const [user, setUser] = useState(null); // {name, email, password}
  const [role, setRole] = useState(""); // "admin" or "employee"

  const handleLogin = (userData, userRole) => {
    setUser(userData);
    setRole(userRole);
  };

  const handleLogout = () => {
    setUser(null);
    setRole("");
  };

  if (!user) {
    return (
      <div className="login-screen">
        <Login onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="home">
      <div className="app-header">
        <h1>Job Assigning App</h1>
        <p>Welcome, {user.name} ({role})</p>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            role === "admin" ? (
              <AdminDashboard />
            ) : (
              <EmployeeDashboard username={user.name} />
            )
          }
        />
        <Route path="/skills" element={<SkillsWithJobs />} />
        <Route
          path="/manage-skills"
          element={role === "admin" ? <SkillAdmin /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;

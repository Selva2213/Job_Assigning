// components/Login.jsx
import React, { useState } from "react";
import "../login.css";
function Login({ onLogin }) {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const ADMIN_EMAIL = "admin@example.com";
  const EMPLOYEE_EMAIL = "employee@example.com";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email === ADMIN_EMAIL) {
      onLogin(user, "admin");
    } else if (user.email === EMPLOYEE_EMAIL) {
      onLogin(user, "employee");
    } else {
      alert("Access denied: unknown user");
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Sign In</h2>

        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;

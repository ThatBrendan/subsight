"use client";

import { useState } from "react";

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="login-page">
      <div className="tabs">
        <button
          className={activeTab === "login" ? "active-tab" : ""}
          onClick={() => handleTabChange("login")}
        >
          Login
        </button>
        <button
          className={activeTab === "signup" ? "active-tab" : ""}
          onClick={() => handleTabChange("signup")}
        >
          Signup
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "login" && (
          <div className="login-form">
            <h2 className="white-text tab-title">Welcome Back!</h2>
            <form className="row no-gutter">
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
            </form>
            <p className="forgot-password white-text text-underline">
              Forgot Password?
            </p>
          </div>
        )}

        {activeTab === "signup" && (
          <div className="signup-form">
            <h2 className="white-text tab-title">Register for free</h2>
            <form>
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Signup</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;

import React from "react";
import robot from "../assets/Medi-Assist healthcare logo design.png";

/**
 * Layout Wrapper for Auth Pages (Signup/Login)
 * Keeps UI consistent across authentication pages
 */

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="auth-container">
      
      {/* LEFT SIDE (FORM) */}
      <div className="auth-left">
        {children}
      </div>

      {/* RIGHT SIDE (BRANDING) */}
      <div className="auth-right">
        <h1 className="logo-text">Medi-Assist</h1>

        {/* Robot Image */}
        <img src={robot} alt="robot" className="robot-image" />

        <h2>Welcome To Medi-Assist</h2>
        <p>Let’s Get You Started</p>

        <ul>
          <li>&#10004; 24/7 AI Medical Support</li>
          <li>&#10004; Instant Doctor Connection</li>
          <li>&#10004; Secure and Private</li>
        </ul>

        <p className="tagline">Your Health, Simplified.</p>
      </div>
    </div>
  );
};

export default AuthLayout;
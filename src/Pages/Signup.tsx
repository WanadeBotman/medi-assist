import React from "react";
import InputField from "../Components/InputField";
import SocialButton from "../Components/SocialButton";
import AuthLayout from "../Components/AuthLayout";
import "../styles/signup.css";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

/**
 * Signup Page
 * Frontend Dev Note:
 * - This page collects user data
 * - Will connect to backend authentication API
 */

const Signup: React.FC = () => {

{/* navigation to the login page */}
const navigate = useNavigate();
  
  // FUNCTION: Handle form submission
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    /**
     * BACKEND CONNECTION POINT:
     * ----------------------------------
     * Collect form data here and send to backend
     * Example:
     * 
     * fetch("/api/auth/signup", {
     *   method: "POST",
     *   headers: { "Content-Type": "application/json" },
     *   body: JSON.stringify({
     *     fullName,
     *     email,
     *     password,
     *   }),
     * });
     *
     * Backend Team:
     * - Endpoint expected: POST /api/auth/signup
     * - Return JWT token + user object
     */

    /**
     * NAVIGATION NOTE FOR TEAM:
     * ------------------------
     * - Clicking "Sign In" redirects user to /login route
     * - Login page will handle authentication logic
     * - Backend endpoint expected: POST /api/auth/login
     * - On success: return JWT + user data
     */


    console.log("Signup clicked");
  };

  return (
    <AuthLayout>
      <div className="signup-box">
        
        <h2>Create an Account</h2>
        <p>Sign up now to get started</p>

        {/* GOOGLE SIGNUP */}
        <SocialButton
          text="Sign up with Google"
          icon="https://developers.google.com/identity/images/g-logo.png"
        />

        <div className="divider">OR</div>

        {/* FORM */}
        <form onSubmit={handleSignup}>
          
          <InputField
            type="text"
            placeholder="Full Name"
            icon={<FaUser />}
            name="fullName"
          />

          <InputField
            type="email"
            placeholder="Email"
            icon={<FaEnvelope />}
            name="email"
          />

          <InputField
            type="password"
            placeholder="Password"
            icon={<FaLock />}
            name="password"
          />

          <InputField
            type="password"
            placeholder="Confirm Password"
            icon={<FaLock />}
            name="confirmPassword"
          />

          {/* TERMS */}
          <div className="terms">
            <input type="checkbox" required />
            <span>I agree to Terms of Service</span>
          </div>

          {/* SUBMIT */}
          <button type="submit" className="signup-btn">
            Get Started
          </button>
        </form>

          <p className="signin-link">
           Already have an account?{" "}
           <span onClick={() => navigate("/login")}>
            Sign In
           </span>
          </p>

      </div>
    </AuthLayout>
  );
};

export default Signup;
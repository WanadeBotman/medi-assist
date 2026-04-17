import React from "react";
import InputField from "../Components/InputField";
import SocialButton from "../Components/SocialButton";
import AuthLayout from "../Components/AuthLayout";
import "../Styles/Signup.css";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

/**
 * Signup Page
 * Frontend Dev Note:
 * - This page collects user data
 * - Will connect to backend authentication API
 */





const Signup: React.FC = () => {
  // navigation to the login page
  const navigate = useNavigate();

  // FORM STATE (stores all user inputs)
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // HANDLE INPUT CHANGES
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    /**
     * BACKEND TEAM NOTE:
     * ------------------
     * Field names MUST match backend DTO:
     * fullName, email, password
     */
  };

  // FUNCTION: Handle form submission
  
  const [loading, setLoading] = React.useState(false);

  // FUNCTION: Handle form submission
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
          }),
        },
      );

      let data;
      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
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
            value={formData.fullName}
            onChange={handleChange}
         />

          <InputField
            type="email"
            placeholder="Email"
            icon={<FaEnvelope />}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <InputField
            type="password"
            placeholder="Password"
            icon={<FaLock />}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <InputField
            type="password"
            placeholder="Confirm Password"
            icon={<FaLock />}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          {/* TERMS */}
          <div className="terms">
            <input type="checkbox" required />
            <span className="agree-on-terms">I agree to Terms of Service</span>
          </div>

          {/* SUBMIT */}
          <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? "Creating..." : "Get Started"}
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
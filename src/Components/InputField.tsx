import React from "react";

/**
 * Reusable Input Field Component
 * This will be used across the entire app (Signup, Login, Settings, etc.)
 * Backend Dev Note:
 * - The "name" prop will match backend DTO fields (e.g., email, password)
 */

interface InputFieldProps {
  type: string;
  placeholder: string;
  icon?: React.ReactNode;
  name: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, icon, name }) => {
  return (
    <div className="input-container">
      {/* Icon (left side) */}
      <span className="input-icon">{icon}</span>

      {/* Input field */}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="input-field"
      />

      {/* 
        BACKEND CONNECTION POINT:
        - This input will later be connected using react-hook-form or Formik
        - Data will be sent via API POST request to backend:
        Example: POST /api/auth/signup
      */}
    </div>
  );
};

export default InputField;
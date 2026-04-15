import React from "react";

/**
 * Social Login Button (Google, etc.)
 * Backend Dev Note:
 * - This will trigger OAuth flow (Google Auth API)
 */

interface Props {
  text: string;
  icon: string;
}

const SocialButton: React.FC<Props> = ({ text, icon }) => {
  return (
    <button className="social-button">
      <img src={icon} alt="social-icon" />
      {text}
    </button>
  );
};

export default SocialButton;
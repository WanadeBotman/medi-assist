import React from "react";
import "../Styles/Dashboard.css";
import {
  FaBell,
  FaUserCircle,
  FaHome,
  FaComments,
  FaVideo,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { logout } from "../Utils/auth";

interface User {
  fullName: string;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  // 🔥 FETCH USER FROM BACKEND
  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/auth/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();

        if (res.ok) {
          setUser(data.user);
        } else {
          logout();
          navigate("/login");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  // 🔥 LOGOUT FUNCTION
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (loading) {
    return <div className="loader">Loading dashboard...</div>;
  }

  return (
    <div className="dashboard-container">

      {/* TOPBAR */}
      <div className="topbar">
        <h1 className="logo">Medi-Assist</h1>

        <div className="top-icons">
          <FaBell />
          <FaUserCircle />
          <FaSignOutAlt onClick={handleLogout} className="logout" />
        </div>
      </div>

      {/* BODY */}
      <div className="dashboard-body">

        {/* SIDEBAR */}
        <div className="sidebar">
          <FaHome />
          <FaComments />
          <FaVideo />
          <FaFileAlt />
          <FaCog />
        </div>

        {/* MAIN */}
        <div className="main-content">
          <h2>Hello {user?.fullName}</h2>

          <div className="card big">
            <h3>AI Symptom Checker</h3>
            <p>Describe your symptoms and get instant AI triage guidance</p>
            <button>Start Assessment</button>
          </div>

          <div className="card-row">
            <div className="card">Book Appointment</div>
            <div className="card">Medical History</div>
          </div>

          <div className="card">
            <h4>Last Assessment</h4>
            <p className="risk">Moderate Risk</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="right-panel">
          <h2>Medi-Assist</h2>
          <p>Welcome back, {user?.fullName}</p>

          <ul>
            <li>24/7 AI Medical Support</li>
            <li>Instant Doctor Connection</li>
            <li>Secure and Private</li>
          </ul>

          <h3>Your Health, Simplified.</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
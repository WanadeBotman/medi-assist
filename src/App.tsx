import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
/**
 * ROOT APPLICATION ROUTING FILE
 * --------------------------------
 * This is where all page navigation is controlled
 * Frontend Dev Note:
 * - All routes must be registered here
 * - This connects pages like Signup, Login, Dashboard, etc.
 */

export default function App() {
  return (
    <BrowserRouter>
      <main style={{ flexGrow: 1, padding: "20px" }}>
        <Routes>
          {/* Login Page (Default Page) */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

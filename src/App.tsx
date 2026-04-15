import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

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
          {/* Signup Page (Default Page) */}
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

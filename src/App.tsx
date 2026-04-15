import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
// import Login from "./pages/Login"; <-- will work after teammate pushes


/**
 * ROOT APPLICATION ROUTING FILE
 * --------------------------------
 * This is where all page navigation is controlled
 * Frontend Dev Note:
 * - All routes must be registered here
 * - This connects pages like Signup, Login, Dashboard, etc.
 */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Signup Page (Default Page) */}
        <Route path="/" element={<Signup />} />
        
        {/* TEMP Login Route (until teammate pushes real page) */}
        <Route path="/login" element={<div>Login Page Coming Soon</div>} />

        {/* 
          TEAM NOTE:
          --------------------------------
          Replace the above route once Login page is available:

          import Login from "./pages/Login";

          <Route path="/login" element={<Login />} />
        */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
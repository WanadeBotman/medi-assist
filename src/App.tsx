import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
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
=======
import Login from "./pages/Login";

export default function App() {
    return (
    <BrowserRouter>
        
        {/* Main content area where routes are rendered */}
        <main style={{ flexGrow: 1, padding: "20px" }}>
        <Routes>
            <Route path="/" element={<Login />} />
            {/*<Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />*/}
        </Routes>
        </main>
    </BrowserRouter>
    );
}
>>>>>>> 9ca543bf54eb1e15727feee8b461ef9f8bb6a6bb

import { BrowserRouter, Routes, Route } from "react-router-dom";
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
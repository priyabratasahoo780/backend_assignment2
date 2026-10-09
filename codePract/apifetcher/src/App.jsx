import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Api1 from "./pages/Api1.jsx";
import Api2 from "./pages/Api2.jsx";
import Api3 from "./pages/Api3.jsx";
import Api4 from "./pages/Api4.jsx";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api1" element={<Api1 />} />
            <Route path="/api2" element={<Api2 />} />
            <Route path="/api3" element={<Api3 />} />
            <Route path="/api4" element={<Api4 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
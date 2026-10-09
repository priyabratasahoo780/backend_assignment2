import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        ⚡ API Fetcher
      </NavLink>
      <div className="nav-links">
        <NavLink 
          to="/" 
          end 
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Home
        </NavLink>
        <NavLink 
          to="/api1" 
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Api 1 (App.jsx)
        </NavLink>
        <NavLink 
          to="/api2" 
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Api 2
        </NavLink>
        <NavLink 
          to="/api3" 
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Api 3
        </NavLink>
        <NavLink 
          to="/api4" 
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Api 4
        </NavLink>
      </div>
    </nav>
  );
}

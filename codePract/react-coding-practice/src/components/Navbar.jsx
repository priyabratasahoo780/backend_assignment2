import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <h2>My Website</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}
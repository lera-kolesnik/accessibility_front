import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="Header">
      <div className="Header-wrapper">
        <Link to="/" className="Header-logo Header-link">A11Y Checker</Link>
        <Link to="/about-us" className="Header-about Header-link">О проекте</Link>
      </div>
    </header>
  );
}

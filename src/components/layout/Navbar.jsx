import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`navbar ${isOpen ? "navbar-nav-open" : ""}`} id="navbar">
      <a className="skip-to-content" href="#content">

        Aller au contenu
      </a>
      <NavLink to="/" className="navbar-left">
        <div className="navbar-brand ellipsis">My carrer</div>
      </NavLink>
      
      <nav className="navbar-nav" id="nav-menu">
        <NavLink to="/projects" className={({ isActive }) => isActive ? "navbar-link navbar-link-active" : "navbar-link"}>
          Projects
        </NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? "navbar-link navbar-link-active" : "navbar-link"}>
          Skills
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive ? "navbar-link navbar-link-active" : "navbar-link"}>
          About
        </NavLink>

        <NavLink
          to="/contact"
          className="btn btn-primary navbar-cta-mobile"
        >
          Contact
        </NavLink>
      </nav>
      <div className="navbar-right">
        <NavLink to="/contact" className="btn btn-primary navbar-cta-desktop">
          Contact
        </NavLink>
        <button
          className="navbar-hamburger"
          id="hamburger"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;

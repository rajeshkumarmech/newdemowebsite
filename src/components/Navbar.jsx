import { Link } from "react-router-dom";
import { navigationController } from "../controllers/navigationController";

export default function Navbar() {
  function handleNavClick() {
    navigationController.closeMenu();
  }

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/#home" className="brand" onClick={handleNavClick}>
          <img
  src="/tritox_logo.png"
  
  
  className="brand-logo"
/>

          <span>
            Tritox <small>Technologies</small>
          </span>
        </Link>

        <nav className="nav-links main-nav-links">
          <Link to="/#home" onClick={handleNavClick}>
            Home
          </Link>

          <Link to="/#services" onClick={handleNavClick}>
            Services
          </Link>

          <Link to="/#about" onClick={handleNavClick}>
            About Us
          </Link>
          <Link to="/#testimonials" onClick={handleNavClick}>
  Testimonials
</Link>

          <Link to="/#contact" onClick={handleNavClick}>
            Contact
          </Link>
        </nav>

        <Link
          to="/#contact"
          className="nav-cta"
          onClick={handleNavClick}
        >
          Request Consultation
        </Link>

        <button
          type="button"
          className="mobile-menu"
          aria-label="Toggle navigation menu"
          aria-expanded="false"
          onClick={navigationController.toggleMenu}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
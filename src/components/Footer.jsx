import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link to="/#home" className="brand">
           <img
  src="/tritox_logo.png"
  
  
  className="brand-logo"
/>

          <span>
            Tritox <small>Technologies</small>
          </span>
        </Link>

        <p>Operational support for insurance agencies.</p>

        <span>© 2026 Tritox Technologies</span>
      </div>
    </footer>
  );
}
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-brand">
        Go Business
      </div>

      <div className="footer-links">
        <Link to="#">About</Link>
        <Link to="#">Contact</Link>
        <Link to="#">Privacy</Link>
        <Link to="#">Terms</Link>
      </div>

      <div className="footer-copy">
        © 2024 Go Business, Inc.
      </div>

    </footer>
  );
}

export default Footer;
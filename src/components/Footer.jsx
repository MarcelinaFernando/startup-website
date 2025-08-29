// src/components/Footer.jsx
import footerIcons from "../assets/icons/footer-icons.svg"
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={footerIcons} alt="Social midia icons"className="footer-icons" />
      <p className="section-description footer-text">© Start, 2022. All rights reserved.</p>
    </footer>
  );
}
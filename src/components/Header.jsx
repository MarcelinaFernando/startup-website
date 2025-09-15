// Header.jsx
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/icons/logo.svg";
import menuIcon from "../assets/icons/menu.svg";
import closeIcon from "../assets/icons/close.png"; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="Logo Start" />
        </Link>

        {/* Nav para desktop */}
        <nav className="desktop-nav">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          
        </nav>

        {/* Botão hamburger (só aparece no mobile) */}
        <button
          className="menu-toggle"
          aria-label="Abrir menu"
          onClick={() => setIsOpen(true)}
        >
          <img src={menuIcon} alt="Menu" />
        </button>
      </div>

      {/* Overlay do menu (mobile) */}
      {isOpen && (
        <div className="menu-overlay">
          <div className="menu-header">
            <img src={logo} alt="Logo Start" className="logo" />

            {/* Botão fechar */}
            <button
              className="menu-close"
              aria-label="Fechar menu"
              onClick={() => setIsOpen(false)}
            >
              <img src={closeIcon} alt="Fechar menu" />
            </button>
          </div>

          <nav className="menu-nav">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

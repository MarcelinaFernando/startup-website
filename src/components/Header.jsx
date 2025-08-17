// Header.jsx
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/icons/logo.svg";
import menuIcon from "../assets/icons/menu.svg";
import closeIcon from "../assets/icons/close.png"; // ← importa teu ícone X

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="Logo Start" />
        </Link>

        {/* Botão do menu (hamburguer) */}
        <button
          className="menu-toggle"
          aria-label="Abrir menu"
          onClick={() => setIsOpen(true)}
        >
          <img src={menuIcon} alt="Menu" />
        </button>
      </div>

      {/* Overlay do menu */}
      {isOpen && (
        <div className="menu-overlay">
          <div className="menu-header">
            <img src={logo} alt="Logo Start" className="logo" />
            
            {/* Botão fechar com o ícone X */}
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
          </nav>
        </div>
      )}
    </header>
  );
}

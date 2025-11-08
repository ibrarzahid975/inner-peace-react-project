import React from "react";

function Header() {
  const toggleMenu = () => {};

  return (
    <header className="header">
      <nav>
        <a href="#hero" className="logo">
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#667eea", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#764ba2", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <circle cx="20" cy="20" r="18" fill="none" stroke="url(#logoGradient)" strokeWidth="2" />
            <circle cx="20" cy="20" r="14" fill="none" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.7" />
            <circle cx="20" cy="20" r="10" fill="none" stroke="url(#logoGradient)" strokeWidth="1" opacity="0.5" />
            <circle cx="20" cy="20" r="6" fill="none" stroke="url(#logoGradient)" strokeWidth="0.5" opacity="0.3" />
            <circle cx="20" cy="20" r="3" fill="url(#logoGradient)" />
          </svg>
          <span className="logo-text">Inner Peace</span>
        </a>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="nav-links">
          <li><a href="#hero" className="nav-link active">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#practices" className="nav-link">Practices</a></li>
          <li><a href="#resources" className="nav-link">Resources</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

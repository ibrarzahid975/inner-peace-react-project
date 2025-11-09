import React, { useState, useEffect } from "react";

const sections = ["hero", "about", "practices", "resources", "contact"];

function Header() {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  // Update active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        return el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight;
      });
      if (current && current !== active) setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  // Smooth scroll to section
  const handleClick = (section) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <nav className="nav-container">
        {/* Logo */}
        <a
          href="#hero"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            handleClick("hero");
          }}
        >
          {/* Simple SVG Logo */}
          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" fill="#667eea" />
            <circle cx="20" cy="20" r="10" fill="#764ba2" />
            <circle cx="20" cy="20" r="4" fill="#fff" />
          </svg>
          <span className="logo-text">Inner Peace</span>
        </a>

        {/* Mobile Menu Toggle */}
        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`nav-link ${active === section ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(section);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

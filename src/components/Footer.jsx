import React from "react";

function Footer() {
    const footerLinks = [
    { id: 1, href: "#privacy", label: "Privacy Policy" },
    { id: 2, href: "#terms", label: "Terms of Service" },
    { id: 3, href: "#support", label: "Support" },
  ];
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          {footerLinks.map((link) => (
            <a key={link.id} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="copyright">
          <p>
            &copy; 2025 Inner Peace. All rights reserved. Nurturing minds, one breath at a time. 
            Designed by{" "}
            <a
              href="https://www.tooplate.com"
              target="_blank"
              rel="nofollow noopener"
            >
              Tooplate
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#support">Support</a>
        </div>
        <div className="copyright">
          <p>
            &copy; 2025 Inner Peace. All rights reserved. Nurturing minds, one breath at a time. 
            Designed by{" "}
            <a
              href="https://www.tooplate.com"
              target="_blank"
              rel="nofollow noopener"
              style={{ color: "var(--accent)", textDecoration: "none", transition: "color 0.3s ease" }}
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

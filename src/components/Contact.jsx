import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2 className="section-title">Connect With Us</h2>

        <div className="contact-wrapper">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Get in Touch</h3>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h4>Visit Us</h4>
                <p>
                  123 Wellness Street
                  <br />
                  Mindful City, MC 12345
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-text">
                <h4>Email</h4>
                <p>
                  hello@innerpeace.com
                  <br />
                  support@innerpeace.com
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-text">
                <h4>Phone</h4>
                <p>
                  +1 (555) 123-4567
                  <br />
                  Mon-Fri, 9am-6pm EST
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">💬</div>
              <div className="info-text">
                <h4>Live Chat</h4>
                <p>Available 24/7 for urgent support</p>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link">f</a>
              <a href="#" className="social-link">t</a>
              <a href="#" className="social-link">i</a>
              <a href="#" className="social-link">l</a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3 style={{ color: "var(--primary)", fontSize: "1.8rem", marginBottom: "2rem" }}>
              Send a Message
            </h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

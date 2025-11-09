import React from "react";

function Contact() {
  const contactInfo = [
    {
      icon: "📍",
      title: "Visit Us",
      details: (
        <>
          123 Wellness Street
          <br />
          Mindful City, MC 12345
        </>
      ),
    },
    {
      icon: "📧",
      title: "Email",
      details: (
        <>
          hello@innerpeace.com
          <br />
          support@innerpeace.com
        </>
      ),
    },
    {
      icon: "📞",
      title: "Phone",
      details: (
        <>
          +1 (555) 123-4567
          <br />
          Mon-Fri, 9am-6pm EST
        </>
      ),
    },
    {
      icon: "💬",
      title: "Live Chat",
      details: "Available 24/7 for urgent support",
    },
  ];

  const socialLinks = ["f", "t", "i", "l"];

  const formFields = [
    { label: "Your Name", id: "name", type: "text" },
    { label: "Email Address", id: "email", type: "email" },
    { label: "Subject", id: "subject", type: "text" },
  ];

  return (
    <section id="contact">
      <div className="contact-container">
        <h2 className="section-title">Connect With Us</h2>

        <div className="contact-wrapper">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Get in Touch</h3>
            {contactInfo.map((item, index) => (
              <div className="info-item" key={index}>
                <div className="info-icon">{item.icon}</div>
                <div className="info-text">
                  <h4>{item.title}</h4>
                  <p>
                    {item.details}
                  </p>
                </div>
              </div>
            ))}

            <div className="social-links">
              {socialLinks.map((symbol, index) => (
                <a key={index} href="#" className="social-link">{symbol}</a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3>
              Send a Message
            </h3>
            <form>

              {formFields.map((field) => (
                <div className="form-group" key={field.id}>
                  <label htmlFor={field.id}>{field.label}</label>
                  <input type={field.type} id={field.id} name={field.id} required />
                </div>
              ))}
              <div className="form-group" >
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

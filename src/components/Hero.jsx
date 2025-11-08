import React from "react";

function Hero() {
  return (
    <section id="hero">
      {/* Network Background */}
      <div className="network-bg">
        <div className="network-line"></div>
        <div className="network-line"></div>
        <div className="network-line"></div>
        <div className="network-line"></div>
        <div className="network-line"></div>
        <div className="network-line"></div>
        <div className="network-line"></div>
        <div className="network-line"></div>
        <div className="network-dot"></div>
        <div className="network-dot"></div>
        <div className="network-dot"></div>
        <div className="network-dot"></div>
        <div className="network-dot"></div>
        <div className="network-dot"></div>
        <div className="network-dot"></div>
        <div className="network-dot"></div>
        <div className="network-dot"></div>
        <div className="network-dot"></div>
        <div className="network-dot"></div>
        <div className="network-dot"></div>
      </div>

      <div className="peace-bg">
        <div className="breathing-circle"></div>
        <div className="breathing-circle"></div>
        <div className="breathing-circle"></div>
        <div className="breathing-circle"></div>
      </div>

      <div className="floating-elements">
        <div className="zen-stone"></div>
        <div className="zen-stone"></div>
        <div className="zen-stone"></div>
      </div>

      <div className="mandala-bg">
        <div className="mandala-circle"></div>
        <div className="mandala-circle"></div>
        <div className="mandala-circle"></div>
      </div>

      <div className="hero-content">
        <h1>Find Your Inner Peace</h1>
        <p>Journey towards mental wellness through mindfulness, meditation, and self-discovery</p>
        <a href="#about" className="cta-button">Begin Your Journey</a>
      </div>
    </section>
  );
}

export default Hero;

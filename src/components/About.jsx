import React from "react";

function About() {
  return (
    <section id="about">
      <h2 className="section-title">Discover Mindfulness</h2>
      <p className="section-subtitle">
        Transform your mind, transform your life
      </p>

      {/* Floating Cards Design */}
      <div className="about-floating-cards">
        <div className="floating-card">
          <div className="card-icon">
            <div className="icon-wrapper">🧠</div>
          </div>
          <h3>Rewire Your Brain</h3>
          <p>
            Neuroplasticity in action - just 10 minutes daily physically
            reshapes your brain for better focus and emotional control.
          </p>
        </div>

        <div className="floating-card">
          <div className="card-icon">
            <div className="icon-wrapper">⚡</div>
          </div>
          <h3>Instant Calm</h3>
          <p>
            Access immediate stress relief through proven breathing techniques
            that activate your parasympathetic nervous system.
          </p>
        </div>

        <div className="floating-card">
          <div className="card-icon">
            <div className="icon-wrapper">🎯</div>
          </div>
          <h3>Peak Performance</h3>
          <p>
            Achieve flow states more easily and unlock your full potential in
            work, creativity, and personal growth.
          </p>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="stats-banner">
        <div className="stat-block">
          <div className="stat-value">85%</div>
          <div className="stat-desc">Stress Reduction</div>
        </div>
        <div className="stat-block">
          <div className="stat-value">3X</div>
          <div className="stat-desc">Better Focus</div>
        </div>
        <div className="stat-block">
          <div className="stat-value">10K+</div>
          <div className="stat-desc">Happy Members</div>
        </div>
        <div className="stat-block">
          <div className="stat-value">4.9★</div>
          <div className="stat-desc">User Rating</div>
        </div>
      </div>

      {/* Feature Showcase */}
      <div className="feature-showcase">
        <div className="showcase-content">
          <h3>Why Choose Inner Peace?</h3>
          <ul className="feature-list">
            <li>
              <span className="feature-check">✓</span>
              <span>Science-backed techniques proven by neuroscience</span>
            </li>
            <li>
              <span className="feature-check">✓</span>
              <span>Personalized journey adapted to your needs</span>
            </li>
            <li>
              <span className="feature-check">✓</span>
              <span>Expert guidance from certified instructors</span>
            </li>
            <li>
              <span className="feature-check">✓</span>
              <span>Track your progress with real metrics</span>
            </li>
            <li>
              <span className="feature-check">✓</span>
              <span>Brought to you by Tooplate website</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;

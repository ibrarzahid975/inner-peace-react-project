import React from "react";

function About() {

  const cards = [
    {
      icon: "🧠",
      title: "Rewire Your Brain",
      text: "Neuroplasticity in action - just 10 minutes daily physically reshapes your brain for better focus and emotional control.",
    },
    {
      icon: "⚡",
      title: "Instant Calm",
      text: "Access immediate stress relief through proven breathing techniques that activate your parasympathetic nervous system.",
    },
    {
      icon: "🎯",
      title: "Peak Performance",
      text: "Achieve flow states more easily and unlock your full potential in work, creativity, and personal growth.",
    },
  ];

  const stats = [
    { value: "85%", desc: "Stress Reduction" },
    { value: "3X", desc: "Better Focus" },
    { value: "10K+", desc: "Happy Members" },
    { value: "4.9★", desc: "User Rating" },
  ];

  const features = [
    "Science-backed techniques proven by neuroscience",
    "Personalized journey adapted to your needs",
    "Expert guidance from certified instructors",
    "Track your progress with real metrics",
    "Brought to you by Tooplate website",
  ];


  return (
    <section id="about">
      <h2 className="section-title">Discover Mindfulness</h2>
      <p className="section-subtitle">
        Transform your mind, transform your life
      </p>

      {/* Floating Cards Design */}
      <div className="about-floating-cards">
        {cards.map((card, index) => (
          <div className="floating-card" key={index}>
            <div className="card-icon">
              <div className="icon-wrapper">{card.icon}</div>
            </div>
            <h3>{card.title}</h3>
            <p>
              {card.text}
            </p>
          </div>
        ))}
      </div>

      {/* Stats Banner */}
      <div className="stats-banner">
        {stats.map((stat, index) => (
          <div className="stat-block" key={index}>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-desc">{stat.desc}</div>
          </div>
        ))}

      </div>

      {/* Feature Showcase */}
      <div className="feature-showcase">
        <div className="showcase-content">
          <h3>Why Choose Inner Peace?</h3>
          <ul className="feature-list">
            {features.map((feature, index) => (

              <li key={index}>
                <span className="feature-check">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;

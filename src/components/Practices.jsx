import React, { useState } from "react";

function Practices() {
  const [activeStep, setActiveStep] = useState(0); // track active timeline point

  const timelineLabels = ["Foundation", "Breathing", "Awareness", "Integration"];
const practices = [
  {
    icon: "🧘",
    title: "Foundation Meditation",
    duration: "10-20 minutes daily",
    description:
      "Begin your journey with guided meditation sessions designed specifically for beginners. Learn the fundamental techniques of sitting meditation, including proper posture, attention anchoring, and working with wandering thoughts. Our progressive approach ensures you build a solid foundation without feeling overwhelmed.",
    benefits: ["Stress Reduction", "Mental Clarity", "Emotional Balance", "Better Sleep"],
  },
  {
    icon: "🌬️",
    title: "Conscious Breathing",
    duration: "5-10 minutes as needed",
    description:
      "Master the art of breath awareness with techniques that instantly calm your nervous system. From box breathing to 4-7-8 patterns, discover how different breathing exercises can energize, relax, or center you throughout your day. Perfect for managing anxiety and stress in real-time.",
    benefits: ["Instant Calm", "Energy Boost", "Focus Enhancement", "Anxiety Relief"],
  },
  {
    icon: "📝",
    title: "Mindful Awareness",
    duration: "15 minutes daily",
    description:
      "Develop meta-awareness through journaling and body scan practices. Learn to observe your thoughts, emotions, and physical sensations without judgment. This practice includes gratitude exercises, emotional check-ins, and reflective writing to deepen self-understanding.",
    benefits: ["Self-Discovery", "Emotional Intelligence", "Pattern Recognition", "Gratitude"],
  },
  {
    icon: "🚶",
    title: "Living Mindfully",
    duration: "Throughout the day",
    description:
      "Integrate mindfulness into every aspect of your daily life. From mindful eating to walking meditation, learn how to transform routine activities into opportunities for presence. Discover how to maintain awareness during work, conversations, and even challenging situations.",
    benefits: ["Present Living", "Joy in Simple Things", "Mindful Communication", "Work-Life Balance"],
  },
];
  

  return (
    <section id="practices">
      <div className="practices-container">
        <h2 className="section-title">Mindfulness Practices</h2>
        <p className="section-subtitle">
          Master these core practices to build your mindfulness toolkit
        </p>

        <div className="practice-layout">
          {/* Timeline */}
          <div className="timeline-track">
            <div className="timeline-progress"></div>
            <div className="timeline-points">
              {timelineLabels.map((label, index) => (
                <div
                  key={index}
                  className={`timeline-point ${activeStep === index ? "active" : ""}`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="futuristic-label">
                    <span className="label-text">{label}</span>
                  </div>
                  <div className="timeline-indicator"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="practice-content-area">
            {practices.map((practice, index) => (
              <div key={index} className="practice-card-new">
                <div className="practice-header">
                  <div className="practice-icon-new">{practice.icon}</div>
                  <div className="practice-info">
                    <h3>{practice.title}</h3>
                    <span className="practice-duration">{practice.duration}</span>
                  </div>
                </div>
                <p className="practice-description">{practice.description}</p>
                <div className="practice-benefits">
                  {practice.benefits.map((benefit, i) => (
                    <a key={i} href="#" className="benefit-tag">{benefit}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Practices;

// src/components/Resources.js
import React, { useState } from "react";
import "../assets/css/style.css"; // Make sure your CSS has all the background-image classes

function Resources() {
  const [activeTab, setActiveTab] = useState("meditations");

  const tabs = [
    { id: "meditations", label: "Meditations" },
    { id: "courses", label: "Courses" },
    { id: "tools", label: "Tools" },
  ];

  const resourcesData = {
    meditations: [
      {
        title: "Morning Meditation",
        description:
          "Start your day with clarity and intention through our 15-minute morning practice.",
        thumbnailClass: "morning-meditation",
      },
      {
        title: "Stress Relief Session",
        description:
          "Quick 10-minute guided meditation for immediate stress and anxiety relief.",
        thumbnailClass: "stress-relief",
      },
      {
        title: "Sleep Meditation",
        description:
          "Peaceful bedtime meditation to help you unwind and prepare for restful sleep.",
        thumbnailClass: "sleep-meditation",
      },
    ],
    courses: [
      {
        title: "8-Week MBSR Program",
        description:
          "Comprehensive Mindfulness-Based Stress Reduction course with certified instructors.",
        thumbnailClass: "mbsr-course",
      },
      {
        title: "Mindful Leadership",
        description:
          "Develop presence and emotional intelligence for effective leadership.",
        thumbnailClass: "leadership-course",
      },
      {
        title: "Beginner's Journey",
        description:
          "30-day introduction to mindfulness with daily lessons and practices.",
        thumbnailClass: "beginner-course",
      },
    ],
    tools: [
      {
        title: "Meditation Timer",
        description:
          "Customizable timer with ambient sounds and interval bells for your practice.",
        thumbnailClass: "timer-tool",
      },
      {
        title: "Mood Tracker",
        description:
          "Monitor your emotional patterns and see how mindfulness impacts your well-being.",
        thumbnailClass: "mood-tracker",
      },
      {
        title: "Breathing Exercises",
        description:
          "Interactive breathing patterns for different situations and energy levels.",
        thumbnailClass: "breathing-tool",
      },
    ],
  };

  return (
    <section id="resources">
      <h2 className="section-title">Resources & Tools</h2>
      <p className="section-subtitle">
        Everything you need to support your mindfulness practice
      </p>

      <div className="resource-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content active">
        <div className="resource-list">
          {resourcesData[activeTab].map((item, index) => (
            <div key={index} className="resource-card">
              <div className="resource-image">
                <div className={`resource-thumbnail ${item.thumbnailClass}`}></div>
              </div>
              <div className="resource-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resources;

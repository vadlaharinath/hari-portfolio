import { memo, useState } from "react";
import { FaArrowRight, FaArrowLeft, FaCheck } from "react-icons/fa";
import { experienceData } from "../data/experienceData";
import "../styles/Experience.css";

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToMilestone = (index) => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    if (activeIndex < experienceData.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const currentItem = experienceData[activeIndex] || experienceData[0];
  const Icon = currentItem.icon;
  const progressPercent = (activeIndex / (experienceData.length - 1)) * 100;

  return (
    <section className="experience-section" id="experience">
      <div
        className="experience-inner-container"
        style={{
          "--active-color": currentItem.badgeColor,
        }}
      >
        {/* Top Section Header */}
        <div className="experience-header-bar">
          <div>
            <div className="section-tag">
              <span className="tag-dot" />
              <span>EXPERIENCE &amp; JOURNEY</span>
            </div>
            <h2 className="experience-main-title">
              Career &amp; <span className="experience-title-gradient">Milestones</span>
            </h2>
          </div>

          {/* Step Counter */}
          <div className="experience-step-counter">
            <span className="step-num-active">{currentItem.step}</span>
            <span className="step-num-total">/ 05</span>
          </div>
        </div>

        {/* Three Column Grid: Left Info + Middle Line + Right Static ID Card */}
        <div className="experience-three-col-grid">
          {/* 1. Left Side: Synchronized Metadata */}
          <div className="experience-left-side">
            <div className="left-period-badge">
              <span className="period-dot-pulse" />
              <span>{currentItem.period}</span>
            </div>

            <h3 className="left-org-name">{currentItem.organization}</h3>

            <div className="left-meta-row">
              <span className="left-category-pill">{currentItem.category}</span>
              <span className="left-score-pill">{currentItem.gradeBadge}</span>
            </div>

            <span className="left-location-text">{currentItem.location}</span>
          </div>

          {/* 2. Middle Line: Central Spine with Milestone Nodes */}
          <div className="experience-middle-line-col">
            {/* Background Track Line */}
            <div className="middle-line-track" />

            {/* Active Filled Gradient Line */}
            <div
              className="middle-line-progress"
              style={{
                height: `calc(${progressPercent}% * 0.9 + 14px)`,
              }}
            />

            {/* Interactive Milestone Nodes */}
            {experienceData.map((item, index) => (
              <button
                key={item.id}
                className={`middle-milestone-node ${
                  index === activeIndex ? "is-active" : ""
                }`}
                onClick={() => goToMilestone(index)}
                title={`${item.shortTitle} — ${item.organization}`}
              >
                {index === activeIndex && <div className="node-pulse-ring" />}
                {index < activeIndex ? <FaCheck /> : item.step}
              </button>
            ))}
          </div>

          {/* 3. Right Side: Clean, Stable ID Badge Card (No Moving/Tilting) */}
          <div className="experience-right-side">
            {/* Lanyard Strap & Clip */}
            <div className="id-lanyard-hanger">
              <div className="id-lanyard-strap" />
              <div className="id-lanyard-clip" />
            </div>

            {/* Stable ID Badge Card */}
            <div className="id-card-frame">
              {/* Top Badge Slot Bar */}
              <div className="id-card-top-slot">
                <span className="id-badge-label">
                  VH-PASS // {currentItem.step}
                </span>
                <div className="id-badge-hole" />
                <span className="id-badge-label">VERIFIED</span>
              </div>

              {/* Accent Ribbon */}
              <div className="id-card-ribbon" />

              {/* Card Body */}
              <div className="id-card-body">
                <div className="id-card-header">
                  <div className="id-card-emblem">
                    <Icon />
                  </div>
                  <span className="id-grade-pill">{currentItem.gradeBadge}</span>
                </div>

                <h4 className="id-card-role">{currentItem.role}</h4>
                <p className="id-card-tagline">{currentItem.tagline}</p>
                <p className="id-card-desc">{currentItem.description}</p>

                {/* Skills Chips */}
                <div className="id-card-skills">
                  {currentItem.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="id-skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Card Footer: Prev / Step Dots / Next Arrow or CTA */}
                <div className="id-card-footer">
                  {/* Previous Button */}
                  {activeIndex > 0 ? (
                    <button
                      className="id-arrow-btn id-prev-btn"
                      onClick={handlePrev}
                      title="Previous Milestone"
                    >
                      <FaArrowLeft />
                      <span>Prev</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {/* Progress Step Dots */}
                  <div className="id-nav-dots">
                    {experienceData.map((_, dotIdx) => (
                      <span
                        key={dotIdx}
                        className={`nav-dot ${
                          dotIdx === activeIndex ? "is-active" : ""
                        }`}
                        onClick={() => goToMilestone(dotIdx)}
                      />
                    ))}
                  </div>

                  {/* Next Arrow OR Compact CTA for 'Your Company' */}
                  {currentItem.isFuture ? (
                    <a href="#contact" className="id-cta-btn">
                      <span>Contact Me</span>
                      <FaArrowRight />
                    </a>
                  ) : (
                    <button
                      className="id-arrow-btn"
                      onClick={handleNext}
                      title="Next Milestone"
                    >
                      <span>Next</span>
                      <FaArrowRight />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Experience);

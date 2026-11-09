import { memo, useState, useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaArrowRight,
  FaArrowLeft,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { experienceData } from "../data/experienceData";
import "../styles/Experience.css";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef(null);
  const pinContainerRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const activeIndexRef = useRef(0);

  const totalSlides = experienceData.length;

  // Jump to specific milestone via scroll-driven positioning
  const scrollToMilestone = useCallback(
    (index) => {
      const st = scrollTriggerRef.current;
      if (!st) return;

      const targetProgress = index / (totalSlides - 1);
      const targetY = st.start + targetProgress * (st.end - st.start);

      if (window.__lenis) {
        window.__lenis.scrollTo(targetY, { duration: 0.85 });
      } else {
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
    },
    [totalSlides]
  );

  const handleNext = useCallback(() => {
    if (activeIndexRef.current < totalSlides - 1) {
      scrollToMilestone(activeIndexRef.current + 1);
    }
  }, [totalSlides, scrollToMilestone]);

  const handlePrev = useCallback(() => {
    if (activeIndexRef.current > 0) {
      scrollToMilestone(activeIndexRef.current - 1);
    }
  }, [scrollToMilestone]);

  // Set up GSAP + ScrollTrigger pinned section with hysteresis debouncing
  useEffect(() => {
    const section = sectionRef.current;
    const pinContainer = pinContainerRef.current;

    if (!section || !pinContainer) return;

    const timer = setTimeout(() => {
      const st = ScrollTrigger.create({
        trigger: section,
        pin: pinContainer,
        start: "top top",
        end: () => `+=${window.innerHeight * 2.8}`, // 2.8 viewports for a comfortable, smooth scroll pace
        scrub: 0.5,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Stable index mapping with 0.2 width per milestone (no edge flickering)
          const newIndex = Math.min(
            totalSlides - 1,
            Math.max(0, Math.round(self.progress * (totalSlides - 1)))
          );

          if (newIndex !== activeIndexRef.current) {
            activeIndexRef.current = newIndex;
            setActiveIndex(newIndex);
          }
        },
      });

      scrollTriggerRef.current = st;
      ScrollTrigger.refresh();
    }, 120);

    const handleKeyDown = (e) => {
      const rect = section.getBoundingClientRect();
      const inView = rect.top <= 100 && rect.bottom >= 100;
      if (!inView) return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        handleNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
    };
  }, [totalSlides, handleNext, handlePrev]);

  const currentItem = experienceData[activeIndex] || experienceData[0];
  const middleLineProgressPercent = (activeIndex / (totalSlides - 1)) * 100;

  return (
    <section className="experience-pinned-section" id="experience" ref={sectionRef}>
      {/* Pinned Viewport Container (GSAP ScrollTrigger Pinned) */}
      <div className="experience-pin-container" ref={pinContainerRef}>
        <div className="experience-inner-content">
          {/* Top Header Bar */}
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

            {/* Step Counter & Nav Controls */}
            <div className="experience-header-controls">
              <div className="experience-step-counter">
                <span className="step-num-active">{currentItem.step}</span>
                <span className="step-num-total">/ 0{totalSlides}</span>
              </div>

              <div className="experience-nav-arrows">
                <button
                  className="exp-arrow-btn"
                  onClick={handlePrev}
                  disabled={activeIndex === 0}
                  title="Previous Milestone"
                  aria-label="Previous Milestone"
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="exp-arrow-btn"
                  onClick={handleNext}
                  disabled={activeIndex === totalSlides - 1}
                  title="Next Milestone"
                  aria-label="Next Milestone"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>

          {/* Three Column Layout: Left Content + Middle Line + Right ID Card */}
          <div className="experience-three-col-grid">
            {/* 1. Left Side: Smooth Stacked Narrative Panels */}
            <div className="experience-left-stage">
              {experienceData.map((item, idx) => {
                const isActive = idx === activeIndex;
                const isPrev = idx < activeIndex;
                const stateClass = isActive ? "is-active" : isPrev ? "is-prev" : "is-next";

                return (
                  <div
                    key={item.id}
                    className={`experience-slide-panel ${stateClass}`}
                    aria-hidden={!isActive}
                  >
                    <div className="left-period-badge">
                      <span className="period-dot-pulse" />
                      <span>{item.period}</span>
                    </div>

                    <h3 className="left-org-name">{item.organization}</h3>

                    <div className="left-meta-row">
                      <span className="left-category-pill">{item.category}</span>
                      <span className="left-score-pill">{item.gradeBadge}</span>
                    </div>

                    <div className="left-location-row">
                      <FaMapMarkerAlt className="location-pin-icon" />
                      <span>{item.location}</span>
                    </div>

                    <div className="left-role-zone">
                      <h4 className="left-role-title">{item.role}</h4>
                    </div>

                    {/* Action Buttons for Milestone 5 */}
                    {item.isFuture && (
                      <div className="left-cta-row">
                        <a href="#contact" className="left-primary-cta">
                          <span>Let&apos;s Connect &amp; Hire</span>
                          <FaArrowRight />
                        </a>
                        <a
                          href="/harinath_resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="left-secondary-cta"
                        >
                          <span>View Resume</span>
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* 2. Middle Column: Central Connected Spine Line */}
            <div className="experience-middle-line-col">
              <div className="middle-line-track" />
              <div
                className="middle-line-progress"
                style={{
                  height: `${middleLineProgressPercent}%`,
                }}
              />

              {experienceData.map((item, index) => {
                const isActive = index === activeIndex;
                const isCompleted = index < activeIndex;
                return (
                  <button
                    key={item.id}
                    className={`middle-milestone-node ${
                      isActive ? "is-active" : ""
                    } ${isCompleted ? "is-completed" : ""}`}
                    onClick={() => scrollToMilestone(index)}
                    title={`${item.step}: ${item.shortTitle} — ${item.organization}`}
                  >
                    {isActive && <div className="node-pulse-ring" />}
                    {isCompleted ? <FaCheck /> : item.step}
                  </button>
                );
              })}
            </div>

            {/* 3. Right Side: Authentic Cotton Lanyard & ID Pass Card */}
            <div className="experience-right-side">
              {/* Lanyard System: Real Smooth Woven Cotton Strap + Swivel Lobster Clasp */}
              <div className="id-lanyard-hanger">
                <div className="id-cotton-strap" />
                <div className="id-metal-crimp" />
                <div className="id-swivel-clasp">
                  <div className="id-clasp-ring" />
                </div>
              </div>

              {/* ID Badge Card Frame */}
              <div className="id-card-frame">
                {/* Top Acrylic Slot Header */}
                <div className="id-card-top-slot">
                  <div className="id-badge-hole" />
                </div>

                {/* Classic Royal Indigo Ribbon */}
                <div className="id-card-ribbon" />

                {/* Card Body */}
                <div className="id-card-body">
                  {/* Stable Profile Header */}
                  <div className="id-profile-header">
                    <div className="id-avatar-frame">
                      <img
                        src="/hari.jpeg"
                        alt="Vadla Harinath"
                        className="id-avatar-img"
                      />
                      <span className="id-avatar-verified" />
                    </div>
                    <div className="id-profile-info">
                      <span className="id-holder-name">Vadla Harinath</span>
                      <span className="id-holder-title">Full Stack Developer</span>
                    </div>
                  </div>

                  {/* Smooth Stacked ID Milestone Zone */}
                  <div className="id-card-stage">
                    {experienceData.map((item, idx) => {
                      const isActive = idx === activeIndex;
                      const isPrev = idx < activeIndex;
                      const stateClass = isActive ? "is-active" : isPrev ? "is-prev" : "is-next";

                      return (
                        <div
                          key={item.id}
                          className={`id-slide-panel ${stateClass}`}
                          aria-hidden={!isActive}
                        >
                          <div className="id-milestone-zone">
                            <div className="id-milestone-tag">
                              {item.category}
                            </div>
                            <div className="id-milestone-title-row">
                              <h4 className="id-card-role">{item.role}</h4>
                              <span className="id-grade-pill">
                                {item.gradeBadge}
                              </span>
                            </div>
                            <p className="id-card-tagline">{item.tagline}</p>
                            <p className="id-card-desc">{item.description}</p>
                          </div>

                          {/* Skills Chips */}
                          <div className="id-card-skills">
                            {item.skills.map((skill, sIdx) => (
                              <span key={sIdx} className="id-skill-chip">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Card Bottom Quick Controls */}
                  <div className="id-card-footer">
                    {activeIndex > 0 ? (
                      <button
                        className="id-footer-btn id-footer-prev"
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
                    <div className="id-footer-dots">
                      {experienceData.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          className={`footer-dot ${
                            dotIdx === activeIndex ? "is-active" : ""
                          }`}
                          onClick={() => scrollToMilestone(dotIdx)}
                          title={`Milestone ${dotIdx + 1}`}
                          aria-label={`Milestone ${dotIdx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Next Arrow or CTA */}
                    {currentItem.isFuture ? (
                      <a href="#contact" className="id-footer-cta">
                        <span>Contact</span>
                        <FaArrowRight />
                      </a>
                    ) : (
                      <button
                        className="id-footer-btn"
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
      </div>
    </section>
  );
}

export default memo(Experience);

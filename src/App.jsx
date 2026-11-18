import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/App.css";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

gsap.registerPlugin(ScrollTrigger);

// High-performance ScrollTrigger config (Crontle-inspired responsiveness)
ScrollTrigger.config({
  limitCallbacks: true,
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
});

function App() {
  useEffect(() => {
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Ultra-smooth hardware-accelerated scroll physics across the entire website
    // Native responsive touch on mobile, smooth momentum on mouse wheel
    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0 : 0.95,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !prefersReducedMotion,
      syncTouch: false, // Preserves native 120Hz mobile touch scrolling
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      infinite: false,
    });

    window.__lenis = lenis;

    // Connect Lenis to GSAP ScrollTrigger ticker for 120fps sync
    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    // Smooth out micro-lag and prevent scroll freezing if frame rates fluctuate
    gsap.ticker.lagSmoothing(500, 33);

    // Smooth-scroll all internal anchor links (#about, #skills, #experience, #projects, #contact)
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const targetId = anchor.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const offset = targetId === "#experience" ? 0 : -65;
          lenis.scrollTo(targetElement, { offset, duration: 0.95 });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Fast-scroll safe section reveals:
    // 1. Content is never hidden permanently
    // 2. Triggers 89% down viewport (before reaching center)
    // 3. fastScrollEnd forces immediate finish during fast scrolling
    const timer = setTimeout(() => {
      if (prefersReducedMotion) return;

      const revealTargets = [
        { selector: ".about-container", trigger: "#about" },
        { selector: ".skills-header, .skills-columns-grid", trigger: "#skills" },
        { selector: ".projects-header, .projects-slider-wrapper", trigger: "#projects" },
        { selector: ".contact-header, .contact-content-grid", trigger: "#contact" },
      ];

      revealTargets.forEach(({ selector, trigger }) => {
        const trigEl = document.querySelector(trigger);
        const targetEls = document.querySelectorAll(selector);
        if (trigEl && targetEls.length > 0) {
          gsap.fromTo(
            targetEls,
            { y: 20, opacity: 0.35 },
            {
              y: 0,
              opacity: 1,
              duration: 0.45,
              stagger: 0.06,
              ease: "power2.out",
              scrollTrigger: {
                trigger: trigEl,
                start: "top 89%",
                toggleActions: "play none none none",
                fastScrollEnd: true, // Instantly snaps to 100% on fast scroll
                preventOverlaps: true,
              },
            }
          );
        }
      });

      ScrollTrigger.refresh();
    }, 120);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return (
    <div className="app-wrapper">
      {/* Top Animated Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Ambient background light orbs */}
      <div className="ambient-glow ambient-glow-1" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-2" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-3" aria-hidden="true" />
      <div className="ambient-glow ambient-glow-4" aria-hidden="true" />

      {/* Main sections */}
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

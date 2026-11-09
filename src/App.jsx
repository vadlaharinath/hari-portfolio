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

function App() {
  useEffect(() => {
    // Ultra-smooth hardware-accelerated scroll physics across the entire website
    // Exponential momentum decay curve (Apple / Awwwards standard)
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.6,
      infinite: false,
    });

    window.__lenis = lenis;

    // Connect Lenis to GSAP ScrollTrigger ticker for 120fps sync
    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

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
          lenis.scrollTo(targetElement, { offset, duration: 1.25 });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Global smooth scroll reveal for sections and cards across the website
    const timer = setTimeout(() => {
      const revealTargets = [
        { selector: ".about-container", trigger: "#about" },
        { selector: ".skills-header, .skills-categories-grid", trigger: "#skills" },
        { selector: ".projects-header, .projects-slider-wrapper", trigger: "#projects" },
        { selector: ".contact-header, .contact-content-grid", trigger: "#contact" },
      ];

      revealTargets.forEach(({ selector, trigger }) => {
        const trigEl = document.querySelector(trigger);
        const targetEls = document.querySelectorAll(selector);
        if (trigEl && targetEls.length > 0) {
          gsap.fromTo(
            targetEls,
            { y: 32, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: trigEl,
                start: "top 82%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      ScrollTrigger.refresh();
    }, 200);

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

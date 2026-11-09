import { memo, useEffect, useRef } from "react";
import "../styles/ScrollProgress.css";

function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    // Synchronize with Lenis smooth scroll for sub-pixel 120fps accuracy
    const updateFromLenis = (e) => {
      if (barRef.current && typeof e.progress === "number") {
        barRef.current.style.transform = `scaleX(${e.progress})`;
      }
    };

    // Fallback if Lenis is not yet mounted
    const updateFallback = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    if (window.__lenis) {
      window.__lenis.on("scroll", updateFromLenis);
    } else {
      window.addEventListener("scroll", updateFallback, { passive: true });
    }

    // Initial check
    updateFallback();

    return () => {
      if (window.__lenis) {
        window.__lenis.off("scroll", updateFromLenis);
      }
      window.removeEventListener("scroll", updateFallback);
    };
  }, []);

  return (
    <div className="scroll-progress-track" aria-hidden="true">
      <div className="scroll-progress-fill" ref={barRef} />
    </div>
  );
}

export default memo(ScrollProgress);

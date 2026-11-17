import {
  memo,
  useEffect,
  useRef,
  useMemo,
  isValidElement,
  cloneElement,
  Children,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/ScrollRevealText.css";

gsap.registerPlugin(ScrollTrigger);

// Helper to extract clean plain text for screen-reader accessibility
function extractPlainText(children) {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }
  if (Array.isArray(children)) {
    return children.map(extractPlainText).join("");
  }
  if (isValidElement(children)) {
    return extractPlainText(children.props.children);
  }
  return "";
}

// Helper to wrap each word in a .scroll-reveal-word span while preserving whitespace & styles
function wrapWords(node, keyPrefix = "w") {
  if (typeof node === "string" || typeof node === "number") {
    const text = String(node);
    const parts = text.split(/(\s+)/);
    return parts.map((part, index) => {
      if (!part) return null;
      if (/^\s+$/.test(part)) {
        return part;
      }
      return (
        <span key={`${keyPrefix}-${index}`} className="scroll-reveal-word">
          {part}
        </span>
      );
    });
  }

  if (isValidElement(node)) {
    const hasCustomColor = Boolean(node.props?.style?.color);
    return cloneElement(
      node,
      {
        ...node.props,
        key: node.key || keyPrefix,
        className: `${node.props.className || ""} ${
          hasCustomColor ? "has-custom-color" : ""
        }`.trim(),
      },
      Children.map(node.props.children, (child, idx) =>
        wrapWords(child, `${keyPrefix}-${idx}`)
      )
    );
  }

  return node;
}

function ScrollRevealText({
  children,
  as: Component = "p",
  className = "",
  start = "top 85%",
  end = "bottom 50%",
  scrub = 0.4,
  stagger = 0.08,
  mutedOpacity = 0.22,
  activeOpacity = 1.0,
  mutedColor = "#94a3b8",
  activeColor = "#0f172a",
  triggerSelector = null,
  style = {},
  ...rest
}) {
  const containerRef = useRef(null);

  const plainText = useMemo(() => extractPlainText(children), [children]);
  const processedContent = useMemo(
    () => Children.map(children, (child, idx) => wrapWords(child, `w-${idx}`)),
    [children]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Accessibility check
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const words = el.querySelectorAll(".scroll-reveal-word");
    if (!words.length) return;

    const defaultWords = [];
    words.forEach((w) => {
      if (
        !w.closest(".has-custom-color") &&
        !w.closest(".institution") &&
        !w.closest(".highlight")
      ) {
        defaultWords.push(w);
      }
    });

    const triggerElement = triggerSelector
      ? document.querySelector(triggerSelector) || el
      : el;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: start,
          end: end,
          scrub: typeof scrub === "number" ? scrub : 0.4,
          invalidateOnRefresh: true,
        },
      });

      // 1. All words smoothly transition opacity word-by-word
      tl.fromTo(
        words,
        { opacity: mutedOpacity },
        {
          opacity: activeOpacity,
          stagger: stagger,
          ease: "power1.inOut",
        },
        0
      );

      // 2. Default words smoothly transition color from muted grey to active color
      if (defaultWords.length) {
        tl.fromTo(
          defaultWords,
          { color: mutedColor },
          {
            color: activeColor,
            stagger: stagger,
            ease: "power1.inOut",
          },
          0
        );
      }
    }, el);

    return () => ctx.revert();
  }, [
    start,
    end,
    scrub,
    stagger,
    mutedOpacity,
    activeOpacity,
    mutedColor,
    activeColor,
    triggerSelector,
  ]);

  return (
    <Component
      ref={containerRef}
      className={`scroll-reveal-root ${className}`.trim()}
      style={style}
      {...rest}
    >
      <span className="scroll-reveal-words" aria-hidden="true">
        {processedContent}
      </span>
      {/* Full uninterrupted sentence for screen readers */}
      <span className="sr-only">{plainText}</span>
    </Component>
  );
}

export default memo(ScrollRevealText);

import { memo, useMemo, useEffect, useRef } from "react";
import "./SkillsOrbit.css";
import EarthBackground, { EARTH_RADIUS } from "../EarthBackground/EarthBackground";

// Import authentic technology icons
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiBootstrap,
  SiMongodb,
  SiJsonwebtokens,
  SiSpring,
  SiSpringboot,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import {
  FaJava,
  FaAws,
  FaCube,
  FaTrophy,
  FaGraduationCap,
  FaCss3Alt,
} from "react-icons/fa";
import {
  TbApi,
  TbBinaryTree,
  TbRepeat,
  TbInfinity,
  TbBrandVscode,
} from "react-icons/tb";

/* =========================================================================
   MANUAL TUNING CONSTANTS (EASILY ADJUST SIZES AND DISTANCES HERE)
   ========================================================================= */

// 1. Earth base radius (matches EarthBackground.jsx)
// Change this to increase/decrease Earth size (e.g. 1.4 = medium, 1.65 = balanced, 1.9 = big)
export const EARTH_SIZE = EARTH_RADIUS || 1.65;

// 2. Space / Gap between the Earth and the skill icons
// Increase this number to push skills FURTHER AWAY from the Earth
// Decrease this number to bring skills CLOSER to the Earth
export const SPACE_BETWEEN_EARTH_AND_SKILLS = 0.85;

// 3. Rotation speed (radians per second, e.g. 0.08 = slow, 0.11 = medium, 0.16 = fast)
export const ROTATION_SPEED = 0.11;

/* =========================================================================
   25 Skills distributed all around the 3D Earth (top, middle, bottom, space)
   with authentic brand icons & colors
   ========================================================================= */
const SKILLS_CONFIG = [
  // Upper Northern Hemisphere & High Space (top)
  {
    name: "React.js",
    icon: SiReact,
    color: "#61DAFB",
    lat: (48 * Math.PI) / 180,
    lon: 0,
    extraDistance: 0.05,
  },
  {
    name: "VS Code",
    icon: TbBrandVscode,
    color: "#007ACC",
    lat: (55 * Math.PI) / 180,
    lon: (72 * Math.PI) / 180,
    extraDistance: 0.28,
  },
  {
    name: "AWS",
    icon: FaAws,
    color: "#FF9900",
    lat: (44 * Math.PI) / 180,
    lon: (144 * Math.PI) / 180,
    extraDistance: 0.38,
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#0284C7", // Vibrant sky/royal blue (non-black)
    lat: (58 * Math.PI) / 180,
    lon: (216 * Math.PI) / 180,
    extraDistance: 0.18,
  },
  {
    name: "Spring",
    icon: SiSpring,
    color: "#6DB33F",
    lat: (42 * Math.PI) / 180,
    lon: (288 * Math.PI) / 180,
    extraDistance: 0.06,
  },

  // Mid-Northern Hemisphere (upper-middle)
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    lat: (26 * Math.PI) / 180,
    lon: (36 * Math.PI) / 180,
    extraDistance: 0.15,
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    color: "#6DB33F",
    lat: (22 * Math.PI) / 180,
    lon: (108 * Math.PI) / 180,
    extraDistance: 0.32,
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "#A855F7",
    lat: (32 * Math.PI) / 180,
    lon: (180 * Math.PI) / 180,
    extraDistance: 0.35,
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    lat: (24 * Math.PI) / 180,
    lon: (252 * Math.PI) / 180,
    extraDistance: 0.05,
  },
  {
    name: "SDLC",
    icon: TbRepeat,
    color: "#818CF8",
    lat: (30 * Math.PI) / 180,
    lon: (324 * Math.PI) / 180,
    extraDistance: 0.25,
  },

  // Equatorial Band (middle)
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26",
    lat: (5 * Math.PI) / 180,
    lon: (18 * Math.PI) / 180,
    extraDistance: 0.05,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    lat: (-4 * Math.PI) / 180,
    lon: (90 * Math.PI) / 180,
    extraDistance: 0.10,
  },
  {
    name: "REST API",
    icon: TbApi,
    color: "#38BDF8",
    lat: (8 * Math.PI) / 180,
    lon: (162 * Math.PI) / 180,
    extraDistance: 0.30,
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#00758F",
    lat: (-6 * Math.PI) / 180,
    lon: (234 * Math.PI) / 180,
    extraDistance: 0.05,
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#8B5CF6", // Vibrant electric purple (non-black)
    lat: (4 * Math.PI) / 180,
    lon: (306 * Math.PI) / 180,
    extraDistance: 0.28,
  },

  // Mid-Southern Hemisphere (lower-middle)
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "#1572B6",
    lat: (-24 * Math.PI) / 180,
    lon: (54 * Math.PI) / 180,
    extraDistance: 0.16,
  },
  {
    name: "Java",
    icon: FaJava,
    color: "#ED8B00",
    lat: (-28 * Math.PI) / 180,
    lon: (126 * Math.PI) / 180,
    extraDistance: 0.18,
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
    lat: (-22 * Math.PI) / 180,
    lon: (198 * Math.PI) / 180,
    extraDistance: 0.12,
  },
  {
    name: "Agile",
    icon: TbInfinity,
    color: "#10B981",
    lat: (-26 * Math.PI) / 180,
    lon: (270 * Math.PI) / 180,
    extraDistance: 0.14,
  },
  {
    name: "Hackathon",
    icon: FaTrophy,
    color: "#F59E0B",
    lat: (-20 * Math.PI) / 180,
    lon: (342 * Math.PI) / 180,
    extraDistance: 0.32,
  },

  // Lower Southern Hemisphere & Deep Space (bottom)
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#539E43",
    lat: (-45 * Math.PI) / 180,
    lon: 0,
    extraDistance: 0.08,
  },
  {
    name: "JWT",
    icon: SiJsonwebtokens,
    color: "#D63AFF",
    lat: (-54 * Math.PI) / 180,
    lon: (72 * Math.PI) / 180,
    extraDistance: 0.16,
  },
  {
    name: "OOP",
    icon: FaCube,
    color: "#A855F7",
    lat: (-48 * Math.PI) / 180,
    lon: (144 * Math.PI) / 180,
    extraDistance: 0.28,
  },
  {
    name: "DSA",
    icon: TbBinaryTree,
    color: "#06B6D4",
    lat: (-56 * Math.PI) / 180,
    lon: (216 * Math.PI) / 180,
    extraDistance: 0.36,
  },
  {
    name: "Training",
    icon: FaGraduationCap,
    color: "#EC4899",
    lat: (-44 * Math.PI) / 180,
    lon: (288 * Math.PI) / 180,
    extraDistance: 0.22,
  },
];

const STAR_COLORS = [
  "#38bdf8",
  "#60a5fa",
  "#818cf8",
  "#a78bfa",
  "#c084fc",
  "#22d3ee",
];

function SkillsOrbit() {
  const wrapperRef = useRef(null);
  const rotationRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isPausedRef = useRef(false);
  const dragStartRef = useRef({ x: 0, rot: 0 });

  const stars = useMemo(
    () =>
      Array.from({ length: 90 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${1 + Math.random() * 2}px`,
        delay: `${Math.random() * 8}s`,
        duration: `${8 + Math.random() * 12}s`,
        color: STAR_COLORS[index % STAR_COLORS.length],
      })),
    []
  );

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const elements = [
      ...wrapper.querySelectorAll("[data-orbit-skill]"),
    ];

    let frameId;
    let previousTime = 0;

    const animate = (time) => {
      if (!previousTime) previousTime = time;

      const delta = Math.min((time - previousTime) / 1000, 0.04);
      previousTime = time;

      // Auto-rotate Earth and attached skills when not dragging or hovered
      if (!isDraggingRef.current && !isPausedRef.current && !document.hidden) {
        rotationRef.current += delta * ROTATION_SPEED;
      }

      const rot = rotationRef.current;
      const height = wrapper.clientHeight || 800;

      // 1 unit in pixels based on camera distance (8.5) and vertical FOV (42)
      const unit = height / 6.526;

      // Earth radius in screen pixels
      const earthRadiusPx = EARTH_SIZE * unit;

      elements.forEach((element) => {
        const index = Number(element.dataset.index);
        const item = SKILLS_CONFIG[index];
        if (!item) return;

        // Spherical 3D coordinates anchored to the rotating Earth
        // Radius includes Earth radius + Space between Earth and skills + extra altitude
        const worldRadius =
          EARTH_SIZE + SPACE_BETWEEN_EARTH_AND_SKILLS + (item.extraDistance || 0);
        const radiusPx = worldRadius * unit;

        const angle = item.lon + rot;
        const cosLat = Math.cos(item.lat);
        const sinLat = Math.sin(item.lat);

        // x: horizontal coordinate
        const x = radiusPx * cosLat * Math.sin(angle);
        // y: vertical coordinate (-y is top, +y is bottom in screen space)
        const y = -radiusPx * sinLat;
        // z: depth coordinate relative to Earth center (z > 0 is front, z < 0 is back)
        const z = radiusPx * cosLat * Math.cos(angle);

        const side = element.dataset.side;
        const isFront = z >= 0;

        if (side === "front") {
          if (!isFront) {
            element.style.display = "none";
            return;
          }

          element.style.display = "block";
          const depth = z / (radiusPx * cosLat || 1); // 0 (edge) to 1 (front center)
          const scale = 0.88 + depth * 0.16;
          const opacity = 0.80 + depth * 0.20;
          const zIndex = Math.round(1000 + depth * 500);

          element.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
          element.style.opacity = String(opacity);
          element.style.zIndex = String(zIndex);
        } else {
          // side === 'back'
          if (isFront) {
            element.style.display = "none";
            return;
          }

          // Check if occluded behind the Earth globe
          const distFromCenter = Math.sqrt(x * x + y * y);
          const innerOcclusion = earthRadiusPx - 10;
          const outerVisible = earthRadiusPx + 18;

          if (distFromCenter < innerOcclusion) {
            element.style.display = "none";
            return;
          }

          element.style.display = "block";
          const depth = Math.abs(z) / (radiusPx * cosLat || 1);
          const scale = 0.76 + (1 - depth) * 0.10;

          // Smooth edge fade as it passes behind Earth's atmosphere
          let edgeFactor = 1;
          if (distFromCenter < outerVisible) {
            edgeFactor =
              (distFromCenter - innerOcclusion) /
              (outerVisible - innerOcclusion);
          }

          const opacity = Math.max(0, Math.min(1, 0.58 * edgeFactor));
          const zIndex = Math.round(100 + (1 - depth) * 400);

          element.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
          element.style.opacity = String(opacity);
          element.style.zIndex = String(zIndex);
        }
      });

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);

  // Pointer drag to manually rotate the Earth with gesture isolation
  // (Prevents locking or sticking page vertical scrolling on touch & trackpads)
  const handlePointerDown = (e) => {
    // Only capture primary mouse click or touch
    if (e.button && e.button !== 0) return;

    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      rot: rotationRef.current,
      pointerId: e.pointerId,
      isDragging: false,
    };
  };

  const handlePointerMove = (e) => {
    if (!dragStartRef.current) return;

    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;

    // Disambiguate horizontal rotation intent vs vertical page scroll intent
    if (!dragStartRef.current.isDragging) {
      // If user is swiping vertically (page scroll), cancel drag so page scrolls smoothly
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 5) {
        dragStartRef.current = null;
        isDraggingRef.current = false;
        if (wrapperRef.current) {
          wrapperRef.current.classList.remove("is-dragging");
        }
        return;
      }

      // If user moved horizontally > 7px, confirm intentional Earth rotation
      if (Math.abs(dx) > 7 && Math.abs(dx) > Math.abs(dy)) {
        dragStartRef.current.isDragging = true;
        isDraggingRef.current = true;
        if (wrapperRef.current) {
          wrapperRef.current.classList.add("is-dragging");
        }
        try {
          e.currentTarget.setPointerCapture?.(e.pointerId);
        } catch {}
      } else {
        return;
      }
    }

    if (dragStartRef.current.isDragging) {
      rotationRef.current = dragStartRef.current.rot + dx * 0.005;
    }
  };

  const handlePointerUp = (e) => {
    if (dragStartRef.current?.pointerId !== undefined) {
      try {
        e.currentTarget.releasePointerCapture?.(e.pointerId);
      } catch {}
    }
    dragStartRef.current = null;
    isDraggingRef.current = false;
    if (wrapperRef.current) {
      wrapperRef.current.classList.remove("is-dragging");
    }
  };

  const handleBadgeMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleBadgeMouseLeave = () => {
    isPausedRef.current = false;
  };

  const renderSkills = (side) =>
    SKILLS_CONFIG.map((item, index) => {
      const Icon = item.icon;
      return (
        <div
          key={`${side}-${item.name}`}
          className="skill-orbit-node"
          data-orbit-skill
          data-side={side}
          data-index={index}
          onMouseEnter={handleBadgeMouseEnter}
          onMouseLeave={handleBadgeMouseLeave}
        >
          <div
            className="orbit-skill-orb"
            data-skill={item.name}
            style={{
              "--skill-color": item.color,
            }}
          >
            <div className="orbit-skill-icon">
              <Icon />
            </div>
            <span className="orbit-skill-name">{item.name}</span>
          </div>
        </div>
      );
    });

  return (
    <section className="skills-orbit-section" id="skills-orbit">
      <div
        className="orbit-wrapper"
        ref={wrapperRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Rear half of the orbits (behind the Earth) */}
        <div className="orbit-scene orbit-scene-back">
          {renderSkills("back")}
        </div>

        {/* 3D Rotating Earth (synchronized with rotationRef) */}
        <EarthBackground
          rotationRef={rotationRef}
          rotationSpeed={ROTATION_SPEED}
        />

        {/* Space stars */}
        <div className="orbit-stars" aria-hidden="true">
          {stars.map((star) => (
            <span
              key={star.id}
              className="orbit-star"
              style={{
                "--star-left": star.left,
                "--star-top": star.top,
                "--star-size": star.size,
                "--star-delay": star.delay,
                "--star-duration": star.duration,
                "--star-color": star.color,
              }}
            />
          ))}
        </div>

        {/* Front half of the orbits (in front of the Earth) */}
        <div className="orbit-scene orbit-scene-front">
          {renderSkills("front")}
        </div>

        <div className="orbit-vignette" aria-hidden="true" />
      </div>
    </section>
  );
}

export default memo(SkillsOrbit);

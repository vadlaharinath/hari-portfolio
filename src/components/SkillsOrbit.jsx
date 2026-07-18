import { memo, useMemo } from "react";
import "../styles/SkillsOrbit.css";
import skillsData from "../data/skillsData";

const colors = [
  "gradient-red",
  "gradient-blue",
  "gradient-green",
  "gradient-pink",
  "gradient-purple",
  "gradient-yellow",
  "gradient-cyan",
  "gradient-orange",
  "gradient-indigo",
  "gradient-teal",
];

function SkillsOrbit() {
  const stars = useMemo(() => {
    return Array.from({ length: 70 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${8 + Math.random() * 10}s`,
    }));
  }, []);

  return (
    <div className="orbit-wrapper">
      {/* Background Stars */}

      <div className="stars">
        {stars.map((star) => (
          <span
            key={star.id}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      {/* Orbit */}

      <div className="scene">

        {/* Center */}

        <div className="center-circle">


          <p>FULL STACK</p>

          <span>Developer</span>

        </div>

        {/* Rings */}

        {skillsData.map((ring, ringIndex) => (
          <div
            key={ringIndex}
            className={`orbit-ring ${
              ring.direction === "clockwise"
                ? "rotate-cw"
                : "rotate-ccw"
            }`}
            style={{
              width: ring.radius * 2,
              height: ring.radius * 2,
              animationDuration: `${ring.speed}s`,
            }}
          >
            {ring.skills.map((skill, skillIndex) => {
              const angle =
                (360 / ring.skills.length) * skillIndex;

              return (
                <div
                  key={skill}
                  className={`skill ${
                    colors[
                      (ringIndex * 3 + skillIndex) %
                        colors.length
                    ]
                  }`}
                  style={{
                    transform: `rotate(${angle}deg)
                    translate(${ring.radius}px)
                    rotate(-${angle}deg)`,
                  }}
                >
                  {skill}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(SkillsOrbit);
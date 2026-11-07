import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

import earthTexture from "./textures/earth.jpg";
import "./EarthBackground.css";

/* =========================================================================
   EARTH SIZE CONFIGURATION (MANUAL TUNING)
   - Change EARTH_RADIUS to increase or decrease the Earth globe size:
     1.2 = small | 1.65 = recommended balanced | 2.0 = large
   ========================================================================= */
export const EARTH_RADIUS = 2.3;

/* =====================================================
   REALISTIC ROTATING EARTH
===================================================== */

function Earth({ rotationRef, rotationSpeed = 0.11 }) {
  const earthRef = useRef(null);

  const texture = useLoader(
    THREE.TextureLoader,
    earthTexture
  );

  // Correct texture color representation.
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;

  // Rotate the Earth (synchronized with rotationRef if provided).
  useFrame((_, delta) => {
    if (earthRef.current) {
      if (rotationRef && rotationRef.current !== undefined) {
        earthRef.current.rotation.y = rotationRef.current;
      } else {
        earthRef.current.rotation.y += delta * rotationSpeed;
      }
    }
  });

  return (
    <group ref={earthRef}>

      {/* Main Earth globe */}
      <mesh>
        <sphereGeometry args={[EARTH_RADIUS, 96, 96]} />

        <meshStandardMaterial
          map={texture}
          roughness={0.95}
          metalness={0}
        />
      </mesh>

      {/* Blue atmospheric rim */}
      <mesh scale={1.035}>
        <sphereGeometry args={[EARTH_RADIUS, 64, 64]} />

        <meshBasicMaterial
          color="#258bff"
          transparent
          opacity={0.14}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Soft outer atmosphere */}
      <mesh scale={1.09}>
        <sphereGeometry args={[EARTH_RADIUS, 48, 48]} />

        <meshBasicMaterial
          color="#176bce"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

    </group>
  );
}

/* =====================================================
   SPACE SCENE
===================================================== */

function SpaceScene({ rotationRef, rotationSpeed }) {
  return (
    <>

      {/* General illumination */}
      <ambientLight intensity={0.7} />

      {/* Light source illuminating Earth */}
      <directionalLight
        position={[5, 3, 5]}
        intensity={2.6}
        color="#ffffff"
      />

      {/* Subtle blue rim illumination */}
      <directionalLight
        position={[-4, 0, -5]}
        intensity={0.5}
        color="#328cff"
      />

      {/* Earth */}
      <Suspense fallback={null}>
        <Earth rotationRef={rotationRef} rotationSpeed={rotationSpeed} />
      </Suspense>

      {/* Distant space stars */}
      <Stars
        radius={45}
        depth={35}
        count={500}
        factor={1.1}
        saturation={0}
        fade
        speed={0.1}
      />

    </>
  );
}

/* =====================================================
   EARTH BACKGROUND COMPONENT
===================================================== */

function EarthBackground({ rotationRef, rotationSpeed }) {
  return (
    <div className="earth-background">

      {/* Background atmospheric glow */}
      <div className="earth-space-glow" />

      {/* Three.js canvas */}
      <Canvas
        camera={{
          position: [0, 0, 8.5],
          fov: 42,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <SpaceScene rotationRef={rotationRef} rotationSpeed={rotationSpeed} />
      </Canvas>

      {/* Dark vignette */}
      <div className="earth-vignette" />

    </div>
  );
}

export default EarthBackground;

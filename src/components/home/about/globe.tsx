"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useSpring, useMotionValue } from "framer-motion";
import { useTheme } from "next-themes";

interface GlobeProps {
  width?: number;
  height?: number;
}

export default function Globe({ width = 500, height = 500 }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const { theme } = useTheme();

  const rotation = useMotionValue(0);
  const spring = useSpring(rotation, {
    damping: 40,
    stiffness: 280,
    mass: 1,
  });

  useEffect(() => {
    const phi = 2;

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: height * 2,
      phi: phi,
      theta: -0.25,
      dark: theme === "dark" ? 1 : 0,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: theme === "dark" ? [0.3, 0.3, 0.3] : [1, 1, 1],
      markerColor: [1, 0.3, 0.3],
      glowColor: theme === "dark" ? [0.2, 0.2, 0.2] : [1, 1, 1],
      markers: [{ location: [7.0736, 125.611], size: 0.06 }],
      onRender: (state) => {
        state.phi = phi + spring.get();
        state.width = width * 2;
        state.height = height * 2;
      },
    });

    // Scroll rotation handler
    const handleScroll = () => {
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      // Multiply by 0.2 to make it rotate only 20% of a full rotation on full scroll
      rotation.set(scrollPercent * 0.05 * Math.PI * 2);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      globe.destroy();
    };
  }, [width, height, spring, theme, rotation]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: width,
        height: height,
        cursor: "none",
        contain: "layout paint size",
      }}
      onPointerDown={(e) => {
        pointerInteracting.current =
          e.clientX - pointerInteractionMovement.current;
      }}
      onPointerUp={() => {
        pointerInteracting.current = null;
      }}
      onPointerOut={() => {
        pointerInteracting.current = null;
      }}
      onMouseMove={(e) => {
        if (pointerInteracting.current !== null) {
          const delta = e.clientX - pointerInteracting.current;
          pointerInteractionMovement.current = delta;
          rotation.set(delta / 200);
        }
      }}
    />
  );
}

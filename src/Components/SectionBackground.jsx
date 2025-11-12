"use client";

import { useState, useEffect, useRef } from "react";

const SectionBackground = ({ className }) => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      target.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      target.current = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    });

    let animationFrameId;

    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (target.current.x - prev.x) * 0.1,
        y: prev.y + (target.current.y - prev.y) * 0.1,
      }));
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 ${className}`}>
      <div
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          width: 1000,
          height: 1000,
          borderRadius: "50%",
          background:"radial-gradient(circle, rgba(100,180,255,0.5) 0%, rgba(100,180,255,0) 60%)",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
        }}
      ></div>

      <div
        className="absolute top-[-12.5%] left-[-12.5%] w-[125%] h-[125%] z-[2] pointer-events-none"
        style={{
          backgroundImage: "url('/noise.png')",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          opacity: 0.75,
          animation: "noiseMovement 0.09s steps(6) infinite",
        }}
      />

      <style>{`
        @keyframes noiseMovement {
          0%, 100%  { transform: translate(0,0); }
          10%       { transform: translate(0%,-10%); }
          30%       { transform: translate(-10%,5%); }
          50%       { transform: translate(0%,10%); }
          70%       { transform: translate(10%,-5%); }
          90%       { transform: translate(10%,5%); }
        }
      `}</style>
    </div>
  );
};

export default SectionBackground;

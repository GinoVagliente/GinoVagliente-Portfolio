const TopographicBackground = ({ className }) => {
  return (
    <div className={`absolute top-0 left-0 w-full h-full z-0 ${className || ""}`}>
      {/* Fondo topográfico SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-full h-full"
      >
        <filter id="topographyFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves="1"
            seed="1"
            result="turb"
          />

          <feComponentTransfer in="turb" result="alpha">
            <feFuncA type="discrete" tableValues="1 0 1 0 1 0 1 0 1 0" />
          </feComponentTransfer>

          <feConvolveMatrix
            in="alpha"
            result="edges"
            kernelMatrix="1 1 1
                          1 -8 1
                          1 1 1"
          />
          <feMorphology in="edges" operator="dilate" radius="1" result="thickerEdges" />

          <feFlood floodColor="#D2D2CC" result="lineColor" />
          <feComposite in="lineColor" in2="thickerEdges" operator="in" />
        </filter>

        <rect width="100%" height="100%" fill="transparent" filter="url(#topographyFilter)" />
      </svg>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          backgroundImage: "url('/noise.webp')",
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
          opacity: 0.6,
          mixBlendMode: "overlay",
          animation: "grainMove 8s linear infinite",
        }}
      />
    </div>
  );
};

export default TopographicBackground;

/*
this effect was inspired by https://codepen.io/finnhvman/pen/XWMNWpG THANK YOU SO MUCH.
*/

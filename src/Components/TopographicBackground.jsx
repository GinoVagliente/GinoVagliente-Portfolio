// TopographicBackground.jsx
const TopographicBackground = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute top-0 left-0 w-full h-full z-0 ${className || ""}`}
    >
      <filter id="topographyFilter">
        <feTurbulence baseFrequency="0.005" numOctaves="5" result="turb" />
        <feComponentTransfer in="turb" result="alpha">
          <feFuncA type="discrete" tableValues="1 0 1 0 1 0 1 0 1 0" />
        </feComponentTransfer>
        <feConvolveMatrix
          in="alpha"
          result="edges"
          kernelMatrix="1 0 1
                        0 -4 0
                        1 0 1"
        />
        <feColorMatrix
          in="edges"
          type="matrix"
          values="0 0 0 0 1
                  0 0 0 0 1
                  0 0 0 0 1
                  0 0 0 1 0"
        />
      </filter>

      {/* Rect transparente para dejar ver el fondo */}
      <rect width="100%" height="100%" fill="black" filter="url(#topographyFilter)" />
    </svg>
  );
};

export default TopographicBackground;

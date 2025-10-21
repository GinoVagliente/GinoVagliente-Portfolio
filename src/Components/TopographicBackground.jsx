const TopographicBackground = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute top-0 left-0 w-full h-full z-0 ${className || ""}`}
    >
      <filter id="topographyFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="1" seed="1" result="turb" />
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.01"
          numOctaves="1"
          seed="10"
          result="moveNoise"
        >
          <animate
            attributeName="baseFrequency"
            values="0.01;0.012;0.01"
            dur="60s"
            repeatCount="indefinite"
          />
        </feTurbulence>
        <feDisplacementMap
          in="turb"
          in2="moveNoise"
          scale="50"
          xChannelSelector="R"
          yChannelSelector="G"
          result="moved"
        />
        <feComponentTransfer in="moved" result="alpha">
          <feFuncA type="discrete" tableValues="1 0 1 0 1 0 1 0 1 0" />
        </feComponentTransfer>

        <feConvolveMatrix
          in="alpha"
          result="edges"
          kernelMatrix="1 1 1
                        1 -8 1
                        1 1 1"
        />
        <feMorphology in="blurEdges" operator="dilate" radius="1" result="thickerEdges" />

        <feFlood floodColor="#F2E888" result="lineColor" />
        <feComposite in="lineColor" in2="thickerEdges" operator="in" />
      </filter>

      <rect width="100%" height="100%" fill="transparent" filter="url(#topographyFilter)" />
    </svg>
  );
};

export default TopographicBackground;
/*
this effect was inspired by https://codepen.io/finnhvman/pen/XWMNWpG THANK YOU SO MUCH.
*/

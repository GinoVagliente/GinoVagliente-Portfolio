import { useEffect, useRef, useState } from "react";
import "./BackgroundRippleEffect.css";

export const BackgroundRippleEffect = ({ cellSize = 56, skewAngle = -10 }) => {
  const containerRef = useRef(null);
  const [gridSize, setGridSize] = useState({ rows: 0, cols: 0 });
  const [clickedCell, setClickedCell] = useState(null);
  const [rippleKey, setRippleKey] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(Date.now());
  const [cellColors, setCellColors] = useState({});
  const [colorIndex, setColorIndex] = useState(0);

  const colorPairs = [
    ["rgba(0,128,255,0.3)", "rgba(0,64,255,0.3)"],
    ["rgba(255,128,0,0.3)", "rgba(255,64,0,0.3)"],
    ["rgba(0,255,128,0.3)", "rgba(0,200,64,0.3)"],
    ["rgba(255,215,0,0.5)", "rgba(255,200,0,0.5)"],
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    const updateGrid = () => {
      const { clientWidth, clientHeight } = containerRef.current;
      const cols = Math.ceil(clientWidth / cellSize);
      const rows = Math.ceil(clientHeight / cellSize);
      setGridSize({ rows, cols });
    };
    updateGrid();
    const observer = new ResizeObserver(updateGrid);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [cellSize]);

  useEffect(() => {
    if (gridSize.rows === 0 || gridSize.cols === 0) return;

    const now = Date.now();
    const elapsed = now - lastClickTime;
    const remaining = Math.max(0, 5000 - elapsed);

    const timeout = setTimeout(() => {
      const row = Math.floor(Math.random() * gridSize.rows);
      const col = Math.floor(Math.random() * gridSize.cols);
      handleRipple(row, col);
    }, remaining);

    return () => clearTimeout(timeout);
  }, [gridSize, lastClickTime]);

  const handleRipple = (row, col) => {
    setClickedCell({ row, col });
    setRippleKey((k) => k + 1);
    setLastClickTime(Date.now());

    const currentIndex = colorIndex;
    const nextIndex = (currentIndex + 1) % colorPairs.length;
    setColorIndex(nextIndex);

    const finalColor = colorPairs[currentIndex][1];

    for (let r = 0; r < gridSize.rows; r++) {
      for (let c = 0; c < gridSize.cols; c++) {
        const distance = Math.hypot(r - row, c - col);
        const delay = distance * 50;
        setTimeout(() => {
          setCellColors((prev) => ({ ...prev, [`${r}-${c}`]: finalColor }));
        }, delay);
      }
    }
  };

  return (
    <div ref={containerRef} className="absolute inset-0 h-full w-full overflow-hidden">
      {gridSize.rows > 0 && gridSize.cols > 0 && (
        <DivGrid
          key={`base-${rippleKey}`}
          className="mask-radial-from-50% mask-radial-at-top opacity-90"
          rows={gridSize.rows}
          cols={gridSize.cols}
          cellSize={cellSize}
          clickedCell={clickedCell}
          skewAngle={skewAngle}
          cellColors={cellColors}
        />
      )}
    </div>
  );
};

const DivGrid = ({
  rows,
  cols,
  cellSize,
  borderColor = "white",
  fillColor = "rgba(144, 145, 38, 0.41)",
  clickedCell,
  skewAngle = -10, cellColors }) => {

  const cells = Array.from({ length: rows * cols }, (_, idx) => idx);
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: "100%",
    height: "100%",
  };

  return (
    <div className="relative z-[3]" style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;
        const distance = clickedCell
          ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
          : 0;
        const delay = clickedCell ? Math.max(0, distance * 50) : 0;
        const duration = 300 + distance * 50;

        const style = {
          "--delay": `${delay}ms`,
          "--duration": `${duration}ms`,
          "--skew": `${skewAngle}deg`,
          "--animation": "rippleIsometric",
          backgroundColor: cellColors[`${rowIdx}-${colIdx}`] || "rgba(144,145,38,0.41)",
          transform: `skewX(${skewAngle}deg)`,
        };

        return (
          <div
            key={idx}
            className="cell relative border-[0.5px] opacity-30 animate-cell-ripple"
            style={{
              backgroundColor: fillColor,
              borderColor,
              transform: `skewX(${skewAngle}deg)`,
              ...style,
            }}
          />
        );
      })}
    </div>
  );
};

import { useEffect, useRef, useState } from "react";

export const BackgroundRippleEffect = ({ cellSize = 56 }) => {
  const containerRef = useRef(null);
  const [gridSize, setGridSize] = useState({ rows: 0, cols: 0 });
  const [clickedCell, setClickedCell] = useState(null);
  const [rippleKey, setRippleKey] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(Date.now());

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
      const randomRow = Math.floor(Math.random() * gridSize.rows);
      const randomCol = Math.floor(Math.random() * gridSize.cols);
      setClickedCell({ row: randomRow, col: randomCol });
      setRippleKey((k) => k + 1);
      setLastClickTime(Date.now());
    }, remaining);

    return () => clearTimeout(timeout);
  }, [gridSize, lastClickTime]);

  const handleClick = (row, col) => {
    setClickedCell({ row, col });
    setRippleKey((k) => k + 1);
    setLastClickTime(Date.now());
  };

  return (
    <div ref={containerRef} className="absolute inset-0 h-full w-full overflow-hidden">
      {gridSize.rows > 0 && gridSize.cols > 0 && (
        <DivGrid
          key={`base-${rippleKey}`}
          className="mask-radial-from-50% mask-radial-at-top opacity-60"
          rows={gridSize.rows}
          cols={gridSize.cols}
          cellSize={cellSize}
          clickedCell={clickedCell}
          onCellClick={handleClick}
          interactive
        />
      )}
    </div>
  );
};

const DivGrid = ({
  className,
  rows,
  cols,
  cellSize,
  borderColor = "white",
  fillColor = "rgba(144, 145, 38, 0.41)",
  clickedCell,
  onCellClick,
  interactive = true,
}) => {
  const cells = Array.from({ length: rows * cols }, (_, idx) => idx);

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
    gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
    width: "100%",
    height: "100%",
  };

  return (
    <div className={`relative z-[3] ${className || ""}`} style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;
        const distance = clickedCell
          ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
          : 0;
        const delay = clickedCell ? Math.max(0, distance * 70) : 10;
        const duration = 200 + distance * 80;
        const style = clickedCell
          ? { "--delay": `${delay}ms`, "--duration": `${duration}ms` }
          : {};

        let cellClass =
          "cell relative border-[0.5px] opacity-30 hover:opacity-90";
        if (clickedCell) cellClass += " animate-cell-ripple ";
        if (!interactive) cellClass += " pointer-events-none";

        return (
          <div
            key={idx}
            className={cellClass}
            style={{ backgroundColor: fillColor, borderColor, ...style }}
            onClick={interactive ? () => onCellClick(rowIdx, colIdx) : undefined}
          />
        );
      })}
    </div>
  );
};

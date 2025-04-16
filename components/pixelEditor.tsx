import React, { useState } from "react";

const SIZE = 28;
const BRUSH_SIZE = 3;

export default function PixelEditor() {
  const [grid, setGrid] = useState(
    Array.from({ length: SIZE }, () => Array(SIZE).fill(false))
  );
  const [isDrawing, setIsDrawing] = useState(false);

  const drawPixel = (x: number, y: number) => {
    setGrid((prev) => {
      const newGrid = prev.map((row) => [...row]);
      for (let i = -Math.floor(BRUSH_SIZE / 2); i <= Math.floor(BRUSH_SIZE / 2); i++) {
        for (let j = -Math.floor(BRUSH_SIZE / 2); j <= Math.floor(BRUSH_SIZE / 2); j++) {
          const nx = x + i;
          const ny = y + j;
          if (nx >= 0 && ny >= 0 && nx < SIZE && ny < SIZE) {
            newGrid[ny][nx] = true;
          }
        }
      }
      return newGrid;
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing) return;
    const target = e.target as HTMLElement;
    const x = Number(target.dataset.x);
    const y = Number(target.dataset.y);
    if (!isNaN(x) && !isNaN(y)) {
      drawPixel(x, y);
    }
  };

  return (
    <div
      className="flex justify-center items-center w-fit h-fit border border-gray-300 border-1"
      onMouseDown={() => setIsDrawing(true)}
      onMouseUp={() => setIsDrawing(false)}
      onMouseLeave={() => setIsDrawing(false)}
    >
      <div
        className="grid select-none"
        style={{
          gridTemplateColumns: `repeat(${SIZE}, 10px)`,
          gridTemplateRows: `repeat(${SIZE}, 10px)`,
        }}
        onMouseMove={handleMouseMove}
      >
        {grid.map((row, y) =>
          row.map((cell, x) => (
            <div
              key={`${x}-${y}`}
              data-x={x}
              data-y={y}
              onMouseDown={() => drawPixel(x, y)}
              className={`w-[10px] h-[10px] cursor-crosshair ${
                cell ? "bg-black" : "bg-white"
              }`}
            />
          ))
        )}
      </div>
    </div>
  );
}

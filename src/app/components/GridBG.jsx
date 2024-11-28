"use client";
import { useEffect, useState } from "react";

export default function GridBG() {
    const cellSize = 145;
    const [dimensions, setDimensions] = useState({ rows:0, cols:0 });

    useEffect(() => {
        const updateGrid = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            setDimensions({
                cols: Math.ceil(width / cellSize) + 1,
                rows: Math.ceil(height / cellSize) + 1,
            });
        };

        updateGrid();

        window.addEventListener("resize", updateGrid);
        return () => window.removeEventListener("resize", updateGrid);
    }, [cellSize]);

    return (
        <div
        className="grid w-screen h-screen bg-zinc-900"
        style={{
            gridTemplateColumns: `repeat(${dimensions.cols}, 1fr)`,
            gridTemplateRows: `repeat(${dimensions.rows}, 1fr)`,
        }}
        >
            {Array.from({ length: dimensions.rows * dimensions.cols }).map((_, index) => (
                <div
                key={index}
                className="w-full h-full border-[0.1px] border-zinc-800 transition-colors duration-2000 hover:bg-neutral-100 ease-out"
                ></div>
            ))}
        </div>
    );
};
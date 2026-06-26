"use client";

import { useEffect, useState } from "react";

export default function Particles() {
  const [pts, setPts] = useState([]);

  useEffect(() => {
    // Random particle layout only after mount (avoids SSR / hydration mismatch).
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only init
    setPts(
      Array.from({ length: 35 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 1.2 + Math.random() * 2.5,
        dur: `${4 + Math.random() * 5}s`,
        delay: `${Math.random() * 6}s`,
      })),
    );
  }, []);

  if (pts.length === 0) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {pts.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--tertiary)]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animation: `twinkle ${p.dur} ${p.delay} infinite alternate ease-in-out`,
          }}
        />
      ))}
    </div>
  );
}

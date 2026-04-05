"use client";

import { useEffect, useState } from "react";

export default function Sparks() {
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only init
    setSparks(
      Array.from({ length: 35 }, (_, i) => ({
        id: i,
        left: `${8 + Math.random() * 84}%`,
        delay: `${Math.random() * 4.5}s`,
        dur: `${3.2 + Math.random() * 2.8}s`,
        size: 2.5 + Math.random() * 3.5,
      })),
    );
  }, []);

  if (sparks.length === 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden
    >
      {sparks.map((s) => (
        <div
          key={s.id}
          className="absolute top-[-10px] rounded-full bg-[var(--gold)] opacity-0"
          style={{
            left: s.left,
            width: s.size,
            height: s.size,
            animation: `sparkFall ${s.dur} ${s.delay} infinite ease-in`,
          }}
        />
      ))}
    </div>
  );
}

"use client";

import { useState } from "react";
import Divider from "./Divider";

export default function PhotoGallery({ photos }) {
  const [broken, setBroken] = useState({});

  return (
    <section className="mx-auto max-w-[1120px] px-8 py-24">
      <div className="mb-16 text-center">
        <p className="font-sans-ui mb-4 text-[0.65rem] uppercase tracking-[0.32em] font-bold bg-gradient-to-r from-[var(--tertiary)] to-[var(--primary)] bg-clip-text text-transparent">
          📸 Memories & Moments 📸
        </p>
        <h2 className="font-serif text-[clamp(2rem,5vw,3.2rem)] font-bold tracking-[0.04em] text-[var(--primary)]">
          Our Precious Moments Together
        </h2>
        <Divider />
      </div>

   <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
  {photos.map((photo, i) => (
    <div
      key={`${i}-${photo.url}`}
      className="break-inside-avoid photo-card opacity-0 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[var(--secondary)]"
      style={{ animation: `fadeIn 0.9s ${0.08 + i * 0.12}s ease both` }}
    >
      {broken[i] ? (
        <div className="flex h-[290px] items-center justify-center text-[0.62rem] uppercase tracking-[0.22em] bg-gradient-to-br from-[var(--primary)] to-[var(--tertiary)] text-white font-bold">
          {photo.type === "video" ? "YOUR VIDEO" : "YOUR PHOTO"}
        </div>
      ) : photo.type === "video" ? (
        <video
          src={photo.url}
          className="w-full object-cover rounded-lg"
          controls
          onError={() => setBroken((b) => ({ ...b, [i]: true }))}
        />
      ) : (
        <img
          src={photo.url}
          alt={`Memory ${i + 1}`}
          className="w-full object-cover rounded-lg "
          onError={() => setBroken((b) => ({ ...b, [i]: true }))}
        />
      )}
    </div>
  ))}
</div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Divider from "./Divider";

export default function PhotoGallery({ photos }) {
  const [broken, setBroken] = useState({});

  return (
    <section className="mx-auto max-w-[1120px] px-8 py-24">
      <div className="mb-16 text-center">
        <p className="font-sans-ui mb-4 text-[0.65rem] uppercase tracking-[0.32em] text-[var(--gold)]">
          Memories
        </p>
        <h2 className="font-serif text-[clamp(2rem,5vw,3.2rem)] font-light tracking-[0.04em] text-[var(--text)]">
          Our Moments Together
        </h2>
        <Divider />
        <p className="font-sans-ui text-[0.7rem] tracking-[0.1em] text-[rgba(201,168,76,0.28)]">
          Replace the photos in <code className="text-[0.65em]">app/data/config.js</code> with your
          Cloudinary links
        </p>
      </div>

   <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
  {photos.map((photo, i) => (
    <div
      key={`${i}-${photo.url}`}
      className="break-inside-avoid photo-card opacity-0"
      style={{ animation: `fadeIn 0.9s ${0.08 + i * 0.12}s ease both` }}
    >
      {broken[i] ? (
        <div className="flex h-[290px] items-center justify-center text-[0.62rem] uppercase tracking-[0.22em] text-[rgba(201,168,76,0.28)]">
          {photo.type === "video" ? "YOUR VIDEO" : "YOUR PHOTO"}
        </div>
      ) : photo.type === "video" ? (
        <video
          src={photo.url}
          className="w-full object-cover rounded-lg mb-4"
          controls
          onError={() => setBroken((b) => ({ ...b, [i]: true }))}
        />
      ) : (
        <img
          src={photo.url}
          alt={`Memory ${i + 1}`}
          className="w-full object-cover rounded-lg mb-4"
          onError={() => setBroken((b) => ({ ...b, [i]: true }))}
        />
      )}
    </div>
  ))}
</div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Particles from "./Particles";
import Divider from "./Divider";
import { getBirthdayAudio, startBirthdayAudio } from "../lib/birthdayAudio";

export default function IntroScreen() {
  const router = useRouter();
  const [showName, setShowName] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    getBirthdayAudio();
    const t1 = setTimeout(() => setShowName(true), 2000);
    const t2 = setTimeout(() => setShowBtn(true), 3500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const handleOpen = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("bday_audio", "1");
      startBirthdayAudio();
    }
    router.push("/birthday");
  };

  return (
    <div className="font-serif relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50">
      <Particles />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 72% 62% at 50% 50%, rgba(124,58,237,.08) 0%, transparent 68%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 100%, rgba(124,58,237,.15) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-[5] max-w-[560px] px-8 py-8 text-center">
        <p
          className="font-sans-ui anim-fade-in-delay mb-12 text-[0.65rem] uppercase tracking-[0.38em] font-bold bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--tertiary)] bg-clip-text text-transparent"
        >
          ✨ A Birthday Surprise ✨
        </p>

        <div
          className="mb-9 text-[2.2rem] leading-none opacity-100"
          style={{ animation: "giftPulse 3s ease-in-out infinite" }}
          aria-hidden
        >
          ✦
        </div>

        <h1
          className="text-[clamp(1.75rem,4.8vw,3.1rem)] font-bold leading-[1.5] tracking-[0.04em] opacity-0 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--tertiary)] bg-clip-text text-transparent"
          style={{ animation: "fadeUp 1s 0.5s ease both" }}
        >
          A little celebration made
          <br />
          <em className="font-bold italic" style={{ fontWeight: 700 }}>
            for you... 🎉
          </em>
        </h1>

        <Divider delay="0.9s" />

        <div
          className="mt-[3.2rem] transition-[opacity,transform] duration-1000 ease-in-out"
          style={{
            opacity: showBtn ? 1 : 0,
            transform: showBtn ? "translateY(0)" : "translateY(14px)",
          }}
        >
          <button type="button" className="open-btn" onClick={handleOpen}>
            Open Your Surprise
          </button>
        </div>
      </div>
    </div>
  );
}

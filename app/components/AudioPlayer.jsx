"use client";

import { useEffect, useRef, useState } from "react";
import { audioUrl } from "../data/config";

function getInitialMuted() {
  if (typeof window === "undefined") return true;
  return sessionStorage.getItem("bday_audio") !== "1";
}

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(getInitialMuted);

  useEffect(() => {
    const a = new Audio(audioUrl);
    a.loop = true;
    a.volume = 0.4;
    a.muted = muted;
    audioRef.current = a;
    
    a.play().catch((err) => {
      console.warn("Audio autoplay blocked:", err);
    });
    
    if (sessionStorage.getItem("bday_audio") === "1") {
      sessionStorage.removeItem("bday_audio");
    }
    
    return () => {
      a.pause();
      a.src = "";
      audioRef.current = null;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps -- single Audio instance; muted is initial-only

  const toggleMute = () => {
    const a = audioRef.current;
    if (!a) return;
    const next = !muted;
    a.muted = next;
    setMuted(next);
    if (!next) {
      a.play().catch(() => {});
    }
  };

  return (
    <button
      type="button"
      className="audio-btn"
      onClick={toggleMute}
      title={muted ? "Play music" : "Mute"}
      aria-label={muted ? "Play music" : "Mute music"}
    >
      {muted ? "♪" : "♫"}
    </button>
  );
}

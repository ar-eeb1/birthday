"use client";

import { useEffect, useState } from "react";
import {
  getBirthdayAudio,
  isBirthdayAudioMuted,
  setBirthdayAudioMuted,
  startBirthdayAudio,
} from "../lib/birthdayAudio";

function getInitialMuted() {
  if (typeof window === "undefined") return true;
  if (sessionStorage.getItem("bday_audio") === "1") return false;
  return isBirthdayAudioMuted();
}

export default function AudioPlayer() {
  const [muted, setMuted] = useState(getInitialMuted);

  useEffect(() => {
    const a = getBirthdayAudio();
    if (!a) return;

    a.muted = muted;

    if (sessionStorage.getItem("bday_audio") === "1") {
      sessionStorage.removeItem("bday_audio");
      startBirthdayAudio();
      setMuted(false);
      return;
    }

    if (!muted) {
      startBirthdayAudio();
    } else {
      a.play().catch(() => {});
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleMute = () => {
    const next = !muted;
    setBirthdayAudioMuted(next);
    setMuted(next);
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

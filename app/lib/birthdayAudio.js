import { audioUrl } from "../data/config";

let audio = null;

export function getBirthdayAudio() {
  if (typeof window === "undefined") return null;
  if (!audio) {
    audio = new Audio(audioUrl);
    audio.loop = true;
    audio.volume = 0.4;
    audio.preload = "auto";
  }
  return audio;
}

export function startBirthdayAudio() {
  const a = getBirthdayAudio();
  if (!a) return Promise.resolve();
  a.muted = false;
  return a.play().catch((err) => {
    console.warn("Audio play failed:", err);
  });
}

export function setBirthdayAudioMuted(muted) {
  const a = getBirthdayAudio();
  if (!a) return;
  a.muted = muted;
  if (!muted) {
    a.play().catch(() => {});
  }
}

export function isBirthdayAudioMuted() {
  const a = getBirthdayAudio();
  return a ? a.muted : true;
}

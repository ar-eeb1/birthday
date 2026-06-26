import Divider from "./Divider";

export default function ClosingSection() {
  const year = new Date().getFullYear();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--tertiary)] px-8 py-36 text-center">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(255,255,255,.1) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-[2]">
        <p className="font-sans-ui mb-10 text-[0.65rem] uppercase tracking-[0.32em] text-white font-bold opacity-90">
          With Love From
        </p>

        <div className="relative inline-block">
          <h2 className="font-serif text-[clamp(3.8rem,10vw,7.5rem)] font-bold italic leading-none tracking-[0.06em] text-white drop-shadow-lg">
            Areeb - Zaid 
          </h2>
          <div
            className="mt-[0.7rem] h-[3px] bg-white/80 opacity-100"
            style={{
              width: 0,
              animation: "underline 1.6s 0.6s ease forwards",
              animationFillMode: "forwards",
            }}
          />
        </div>

        <Divider delay="0.9s" />

        <p className="font-serif mx-auto max-w-[400px] text-[clamp(1rem,2.5vw,1.3rem)] font-light italic leading-[1.85] tracking-[0.08em] text-white/90">
          Have the most extraordinary birthday.
          <br />
          You deserve every beautiful thing. 🎊
        </p>

        <p className="font-sans-ui mt-20 text-[0.58rem] uppercase tracking-[0.25em] text-white/60 font-semibold">
          Crafted with love & care · {year}
        </p>
      </div>
    </section>
  );
}

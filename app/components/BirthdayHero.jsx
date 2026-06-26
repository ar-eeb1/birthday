import Divider from "./Divider";

export default function BirthdayHero() {
  return (
    <section
      className="relative flex min-h-[100vh] flex-col items-center justify-center overflow-hidden border-b-4 border-[var(--primary)] px-8 py-16 text-center"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(124,58,237,.12) 0%, rgba(236,72,153,.08) 35%, transparent 65%)",
        }}
      />

      <p className="font-sans-ui anim-fade-in-delay mb-12 text-[0.65rem] uppercase tracking-[0.32em] font-bold bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--tertiary)] bg-clip-text text-transparent">
        ✨ With Best Wishes · From Areeb - Zaid ✨
      </p>

      <h1
        className="font-serif text-[clamp(3rem,9vw,6.5rem)] font-bold leading-[1.05] tracking-[0.06em] text-[var(--text)] opacity-0 text-center"
        style={{
          animation: "fadeUp 1.2s 0.4s ease both",
        }}
      >
        <span className="block">🎉 Happy</span>

        <span className="block bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--tertiary)] bg-clip-text text-transparent tracking-[0.08em] italic">
          Birthday
        </span>

        <span className="block mt-2 text-[clamp(2.2rem,6vw,4.2rem)] tracking-[0.12em] uppercase text-[var(--secondary)]">
          Khizra
        </span>
      </h1>

      <Divider delay="1.1s" />

      <p
        className="font-serif max-w-[440px] text-[clamp(1.1rem,2.8vw,1.5rem)] font-light italic leading-normal tracking-[0.08em] text-[var(--muted)] opacity-0"
        style={{ animation: "fadeUp 1s 1.2s ease both" }}
      >
        Today is yours. Every moment, every smile — all of it. 💖
      </p>

      <div
        className="absolute bottom-10 left-1/2 flex flex-col items-center gap-2"
        style={{ animation: "scrollBob 2.5s ease-in-out infinite" }}
      >
        <p className="font-sans-ui text-[0.58rem] uppercase tracking-[0.25em] text-[var(--muted)]">
          Scroll
        </p>
        <div
          className="h-9 w-px"
          style={{
            background: "linear-gradient(to bottom, var(--secondary), var(--tertiary), transparent)",
          }}
        />
      </div>
    </section>
  );
}

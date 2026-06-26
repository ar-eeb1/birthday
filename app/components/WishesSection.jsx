import Divider from "./Divider";

export default function WishesSection({ wishes }) {
  return (
    <section className="border-y-4 border-[var(--secondary)] bg-gradient-to-br from-[var(--bg2)] via-white to-[var(--bg3)] px-8 py-24">
      <div className="mx-auto max-w-[660px]">
        <div className="mb-16 text-center">
          <p className="font-sans-ui mb-4 text-[0.65rem] uppercase tracking-[0.32em] font-bold bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
            💝 From the Heart 💝
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.2rem)] font-bold tracking-[0.04em] bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
            A Few Words for You
          </h2>
          <Divider />
        </div>

        {wishes.map((wish, i) => (
          <div
            key={i}
            className="wish-item flex items-start gap-8 px-6 py-8 opacity-0 sm:gap-8 sm:px-5 rounded-lg bg-white/50 backdrop-blur  hover:bg-white/80 transition-all duration-300"
            style={{
              animation: `fadeUp 0.7s ${i * 0.14}s ease both`,
            }}
          >
            <p className="font-serif text-[clamp(1.15rem,2.5vw,1.38rem)] font-light italic leading-[1.78] tracking-[0.02em] text-[var(--text)]">
              {wish}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

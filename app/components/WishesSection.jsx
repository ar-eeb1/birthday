import Divider from "./Divider";

export default function WishesSection({ wishes }) {
  return (
    <section className="border-y border-[rgba(201,168,76,0.1)] bg-[var(--bg2)] px-8 py-24">
      <div className="mx-auto max-w-[660px]">
        <div className="mb-16 text-center">
          <p className="font-sans-ui mb-4 text-[0.65rem] uppercase tracking-[0.32em] text-[var(--gold)]">
            From the Heart
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.2rem)] font-light tracking-[0.04em] text-[var(--text)]">
            A Few Words for You
          </h2>
          <Divider />
        </div>

        {wishes.map((wish, i) => (
          <div
            key={i}
            className="wish-item flex items-start gap-8 px-6 py-8 opacity-0 sm:gap-8 sm:px-5"
            style={{
              animation: `fadeUp 0.7s ${i * 0.14}s ease both`,
            }}
          >
            <span className="font-sans-ui min-w-[26px] shrink-0 pt-1 text-[0.62rem] tracking-[0.14em] text-[var(--gold)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="font-serif text-[clamp(1.15rem,2.5vw,1.38rem)] font-light italic leading-[1.78] tracking-[0.02em] text-[var(--text)]">
              {wish}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

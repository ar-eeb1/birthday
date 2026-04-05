export default function Divider({ delay = "0s", w = 55 }) {
  return (
    <div
      className="mx-auto my-8 flex items-center justify-center gap-2.5"
      style={{ margin: "2rem auto" }}
    >
      <div
        className="h-px origin-right"
        style={{
          width: w,
          background: "linear-gradient(90deg, transparent, var(--gold))",
          animation: `lineGrow 0.9s ${delay} ease both`,
        }}
      />
      <div
        className="h-1 w-1 shrink-0 rounded-full bg-[var(--gold)]"
        style={{ animation: `fadeIn 0.5s ${delay} ease both` }}
      />
      <div
        className="h-px origin-left"
        style={{
          width: w,
          background: "linear-gradient(90deg, var(--gold), transparent)",
          animation: `lineGrow 0.9s ${delay} ease both`,
        }}
      />
    </div>
  );
}

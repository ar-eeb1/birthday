export default function Divider({ delay = "0s", w = 55 }) {
  return (
    <div
      className="mx-auto my-8 flex items-center justify-center gap-2.5"
      style={{ margin: "2rem auto" }}
    >
      <div
        className="h-1 origin-right rounded-full"
        style={{
          width: w,
          background: "linear-gradient(90deg, transparent, var(--secondary))",
          animation: `lineGrow 0.9s ${delay} ease both`,
        }}
      />
      <div
        className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--tertiary)]"
        style={{ animation: `fadeIn 0.5s ${delay} ease both` }}
      />
      <div
        className="h-1 origin-left rounded-full"
        style={{
          width: w,
          background: "linear-gradient(90deg, var(--tertiary), transparent)",
          animation: `lineGrow 0.9s ${delay} ease both`,
        }}
      />
    </div>
  );
}

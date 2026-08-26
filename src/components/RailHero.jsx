// Signature element: a converging rail-map diagram.
// Five service "lines" (AEPS, BBPS, DMT, Payouts, APIs) run in from the left
// and merge into a single trunk line — the visual thesis of "One Platform.
// Multiple Payment Capabilities." Draws itself in on load, then sits still.
export default function RailHero() {
  const stops = [
    { label: "AEPS", y: 30, color: "#D9A441" },
    { label: "BBPS", y: 70, color: "#2F7A6B" },
    { label: "DMT", y: 110, color: "#D9A441" },
    { label: "PAYOUTS", y: 150, color: "#2F7A6B" },
    { label: "API", y: 190, color: "#D9A441" },
  ];
  const trunkY = 110;
  const mergeX = 210;

  return (
    <svg
      viewBox="0 0 520 220"
      className="w-full h-auto max-w-[520px] text-basetext"
      role="img"
      aria-label="Diagram showing AEPS, BBPS, DMT, Payouts and API rails converging into one Xendpay platform line"
    >
      {stops.map((s, i) => (
        <g key={s.label}>
          <path
            d={`M 20 ${s.y} L ${mergeX - 30} ${s.y} Q ${mergeX} ${s.y} ${mergeX} ${trunkY + (s.y - trunkY) * 0.15}`}
            fill="none"
            stroke={s.color}
            strokeWidth="2.5"
            strokeLinecap="round"
            className="rail-draw"
            style={{ animationDelay: `${i * 90}ms` }}
          />
          <circle cx="20" cy={s.y} r="4" fill={s.color} />
          <text
            x="0"
            y={s.y - 10}
            fontFamily="'IBM Plex Mono', monospace"
            fontSize="10"
            fill="currentColor"
            letterSpacing="0.5"
          >
            {s.label}
          </text>
        </g>
      ))}
      <path
        d={`M ${mergeX} ${trunkY} L 480 ${trunkY}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="rail-draw"
        style={{ animationDelay: "450ms" }}
      />
      <circle cx="480" cy={trunkY} r="6" fill="currentColor" />
      <circle cx="480" cy={trunkY} r="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <text
        x="425"
        y={trunkY - 16}
        fontFamily="'IBM Plex Mono', monospace"
        fontSize="10"
        fill="currentColor"
        letterSpacing="0.5"
      >
        XENDPAY
      </text>

      <style>{`
        .rail-draw {
          stroke-dasharray: 260;
          stroke-dashoffset: 260;
          animation: draw 900ms ease-out forwards;
        }
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .rail-draw { animation: none; stroke-dashoffset: 0; }
        }
      `}</style>
    </svg>
  );
}

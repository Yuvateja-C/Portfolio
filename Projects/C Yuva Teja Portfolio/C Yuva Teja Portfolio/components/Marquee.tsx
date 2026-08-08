import { companies } from "@/lib/data";

export default function Marquee() {
  const items = [...companies, ...companies];
  return (
    <div className="relative border-y border-line py-6 overflow-hidden bg-surface/30">
      <div className="flex w-max" style={{ animation: "marquee 32s linear infinite" }}>
        {items.map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-6 px-8 font-mono text-[11px] uppercase tracking-widest2 text-muted whitespace-nowrap"
          >
            {c}
            <span className="w-1 h-1 bg-accent/60 rounded-full" />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

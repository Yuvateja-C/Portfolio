import { cn } from "@/lib/utils";

export function SystemFlow({
  steps,
  night = true,
}: {
  steps: readonly string[];
  night?: boolean;
}) {
  return (
    <ol
      className={cn(
        "system-flow mt-8 flex flex-wrap items-stretch gap-0",
        night ? "text-stone" : "text-muted",
      )}
      aria-label="System flow"
    >
      {steps.map((step, i) => (
        <li key={step} className="flex min-w-[7.5rem] flex-1 items-stretch">
          <div
            className={cn(
              "flex w-full flex-col justify-between border px-3 py-3",
              night ? "border-line-night" : "border-line",
            )}
          >
            <span className="meta opacity-70">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="mt-3 font-display text-sm font-semibold tracking-tight text-pretty">
              {step}
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
}

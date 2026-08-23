import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0, ready: false });
  const ring = useRef({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    let hovering = false;
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      pos.current.x = event.clientX;
      pos.current.y = event.clientY;
      if (!pos.current.ready) {
        pos.current.ready = true;
        ring.current.x = event.clientX;
        ring.current.y = event.clientY;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }
      const target = event.target as HTMLElement | null;
      const nextHover = Boolean(
        target?.closest("a, button, [data-cursor='hover'], [role='button']"),
      );
      if (nextHover !== hovering && ringRef.current) {
        hovering = nextHover;
        ringRef.current.classList.toggle("is-hover", hovering);
      }
    };

    const tick = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.18;
      ring.current.y += (pos.current.y - ring.current.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} className="cursor-ring opacity-0" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot opacity-0" aria-hidden="true" />
    </>
  );
}

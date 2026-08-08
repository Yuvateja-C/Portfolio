"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Precision reticle cursor.
 * Default: crosshair + center dot.
 * On elements with [data-cursor]: expands into a bracketed ring with a label.
 * Disabled entirely on touch / coarse pointers.
 */
export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    
    const checkPointer = () => {
      const isFine = mq.matches;
      setEnabled(isFine);
      if (isFine) {
        document.documentElement.classList.add("has-cursor");
      } else {
        document.documentElement.classList.remove("has-cursor");
      }
    };

    checkPointer();
    try {
      mq.addEventListener("change", checkPointer);
    } catch {
      mq.addListener(checkPointer);
    }

    if (!mq.matches) return () => {
      document.documentElement.classList.remove("has-cursor");
    };

    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.("[data-cursor]") as HTMLElement | null;
      if (target) {
        setActive(true);
        setLabel(target.getAttribute("data-cursor") || null);
      } else {
        setActive(false);
        setLabel(null);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      try {
        mq.removeEventListener("change", checkPointer);
      } catch {
        mq.removeListener(checkPointer);
      }
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed left-0 top-0 z-[10001] pointer-events-none"
        style={{
          width: 4,
          height: 4,
          borderRadius: "50%",
          background: "#FF5A1F",
        }}
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 z-[10000] pointer-events-none flex items-center justify-center"
        style={{
          width: active ? 74 : 30,
          height: active ? 74 : 30,
          borderRadius: "50%",
          border: active ? "1px solid rgba(255,90,31,0.9)" : "1px solid rgba(255,255,255,0.55)",
          transition: "width .28s cubic-bezier(.16,1,.3,1), height .28s cubic-bezier(.16,1,.3,1), border-color .2s ease",
        }}
      >
        {!active && (
          <>
            <span style={{ position: "absolute", width: 1, height: 7, background: "rgba(255,255,255,0.55)", top: -10 }} />
            <span style={{ position: "absolute", width: 1, height: 7, background: "rgba(255,255,255,0.55)", bottom: -10 }} />
            <span style={{ position: "absolute", height: 1, width: 7, background: "rgba(255,255,255,0.55)", left: -10 }} />
            <span style={{ position: "absolute", height: 1, width: 7, background: "rgba(255,255,255,0.55)", right: -10 }} />
          </>
        )}
        {active && label && (
          <span
            className="font-mono uppercase tracking-widest2"
            style={{ fontSize: 9, color: "#FF5A1F", letterSpacing: "0.14em" }}
          >
            {label}
          </span>
        )}
      </div>
    </>
  );
}

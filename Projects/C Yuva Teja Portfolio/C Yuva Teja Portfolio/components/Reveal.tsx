"use client";

import { useEffect, useRef, useState } from "react";

const variantsByDir = {
  up: { x: 0, y: 32 },
  left: { x: -32, y: 0 },
  right: { x: 32, y: 0 },
  none: { x: 0, y: 0 },
} as const;

export default function Reveal({
  children,
  dir = "up",
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  dir?: "up" | "left" | "right" | "none";
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const hidden = variantsByDir[dir];
  const style = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate3d(0, 0, 0)" : `translate3d(${hidden.x}px, ${hidden.y}px, 0)`,
    transition: "opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)",
    transitionDelay: `${delay}s`,
  } as const;

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

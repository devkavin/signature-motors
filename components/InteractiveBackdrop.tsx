"use client";

import { useEffect, useState } from "react";

export default function InteractiveBackdrop() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const next = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      setProgress(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl transition-transform duration-300"
        style={{ transform: `translate3d(${progress * 80}px, ${progress * 180}px, 0)` }}
      />
      <div
        className="absolute right-[-4rem] top-[35%] h-80 w-80 rounded-full bg-amber-300/20 blur-3xl transition-transform duration-300"
        style={{ transform: `translate3d(-${progress * 120}px, ${progress * 80}px, 0)` }}
      />
      <div
        className="absolute bottom-[-8rem] left-1/3 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl transition-transform duration-300"
        style={{ transform: `translate3d(${progress * 30}px, -${progress * 130}px, 0)` }}
      />
    </div>
  );
}

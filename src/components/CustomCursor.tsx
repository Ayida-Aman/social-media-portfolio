"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Only enable on fine pointer (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if target is interactive
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("a") ||
        target?.closest("button") ||
        target?.closest("[data-cursor='hover']") ||
        target?.getAttribute("role") === "button"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[#83c42e] transition-transform duration-75"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Desktop Trailing Custom Cursor Dot */}
      {isVisible && (
        <div
          className="pointer-events-none fixed left-0 top-0 z-[100] transition-transform duration-75 ease-out hidden md:block"
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          }}
        >
          <div
            className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ${
              isHovered
                ? "h-10 w-10 bg-[#83c42e]/35 ring-2 ring-[#83c42e] backdrop-blur-[1px]"
                : "h-3.5 w-3.5 bg-[#131310] ring-1 ring-white/50"
            }`}
          />
        </div>
      )}
    </>
  );
}

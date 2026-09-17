"use client";

import { useState, useRef, useCallback } from "react";
import { ArrowLeftRight, CheckCircle2, TrendingDown, TrendingUp, XCircle } from "lucide-react";

export default function StrategySlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="strategy" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="relative inline-block text-left">
            <span className="mb-3 flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.25em] text-[#575751]">
              <span className="h-0.5 w-6 bg-[#83c42e]" />
              03 · Strategy Shift
            </span>

            <div className="relative inline-block">
              <h2 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-black leading-none text-[#131310]">
                Before
              </h2>
              <span className="font-script pointer-events-none absolute -bottom-3 right-0 translate-x-[24%] text-[#83c42e] text-[clamp(2.6rem,6.5vw,5rem)] leading-none -rotate-6 select-none font-bold">
                after
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-3">
            <p className="max-w-xs text-sm text-[#575751]">
              Drag the slider to compare standard broadcast posting vs.
              data-backed, retention-engineered community growth.
            </p>
            {/* Quick preset buttons */}
            <div className="flex items-center gap-1.5 rounded-full border border-[#131310]/10 bg-white/70 p-1 text-xs font-medium">
              <button
                type="button"
                onClick={() => setSliderPosition(15)}
                className={`rounded-full px-3 py-1 transition-all ${
                  sliderPosition < 30
                    ? "bg-[#131310] text-white"
                    : "text-[#575751] hover:text-[#131310]"
                }`}
              >
                Before (15%)
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(50)}
                className={`rounded-full px-3 py-1 transition-all ${
                  sliderPosition >= 30 && sliderPosition <= 70
                    ? "bg-[#131310] text-white"
                    : "text-[#575751] hover:text-[#131310]"
                }`}
              >
                Split (50%)
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(85)}
                className={`rounded-full px-3 py-1 transition-all ${
                  sliderPosition > 70
                    ? "bg-[#131310] text-white"
                    : "text-[#575751] hover:text-[#131310]"
                }`}
              >
                After (85%)
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Comparison Container */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative aspect-[16/11] sm:aspect-[16/8] w-full cursor-ew-resize select-none overflow-hidden rounded-3xl border border-[#131310]/20 shadow-xl"
        >
          {/* Layer 2: AFTER (Full Background - Graded / High Performance) */}
          <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-[#10242b] via-[#14323b] to-[#0a181d] p-6 sm:p-12 text-white">
            <div className="flex items-start justify-between">
              <div className="rounded-full bg-[#83c42e] px-4 py-1 text-xs font-bold text-[#131310] shadow-sm">
                After · Growth-Engineered Hook
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                <TrendingUp className="h-3.5 w-3.5 text-[#83c42e]" />
                <span className="text-[#83c42e]">+2,300%</span>
                <span className="text-white/80">Compounded Reach</span>
              </div>
            </div>

            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-md bg-[#83c42e]/20 px-2.5 py-1 text-xs font-mono font-bold text-[#a6e22e] border border-[#83c42e]/30">
                0-3s HOOK: High Retention Problem/Curiosity
              </div>
              <h3 className="mt-3 font-display text-2xl sm:text-4xl font-black text-white leading-tight">
                &ldquo;Why 90% of tech events fail at member retention (and how we
                built 1,000+ active engineers)&rdquo;
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed">
                Relatable hook + structured 3-part storytelling + platform-native
                CapCut dynamic pacing + direct conversion funnel into Telegram
                discussions.
              </p>
            </div>

            {/* Performance Metric Dashboard */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-white/10 pt-4">
              <div>
                <p className="text-[10px] uppercase text-white/50 font-bold">
                  Views
                </p>
                <p className="font-display text-xl sm:text-2xl font-black text-[#83c42e]">
                  19.7K – 320K
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-white/50 font-bold">
                  Watch Completion
                </p>
                <p className="font-display text-xl sm:text-2xl font-black text-white">
                  74.2%
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-white/50 font-bold">
                  Community Inflow
                </p>
                <p className="font-display text-xl sm:text-2xl font-black text-[#83c42e]">
                  +1,000+
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-white/50 font-bold">
                  Engagement
                </p>
                <p className="font-display text-xl sm:text-2xl font-black text-white">
                  14.8%
                </p>
              </div>
            </div>
          </div>

          {/* Layer 1: BEFORE (Clipped Left Layer - Raw / Generic Approach) */}
          <div
            className="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-[#404344] to-[#2b2d2e] p-6 sm:p-12 text-white"
            style={{
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
            }}
          >
            <div className="flex items-start justify-between">
              <div className="rounded-full bg-white/20 px-4 py-1 text-xs font-bold text-white backdrop-blur-sm">
                Before · Generic Social Broadcast
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-white/70">
                <TrendingDown className="h-3.5 w-3.5 text-red-400" />
                <span>Flatlined Reach</span>
              </div>
            </div>

            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-md bg-white/10 px-2.5 py-1 text-xs font-mono font-bold text-white/60">
                NO HOOK: Static Flyer Announcement
              </div>
              <h3 className="mt-3 font-display text-2xl sm:text-4xl font-black text-white/60 leading-tight">
                &ldquo;Announcement: Join our workshop this Saturday at 2:00 PM.
                Link in bio.&rdquo;
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-white/50 leading-relaxed">
                Passive flyer graphic, zero hook, corporate tone. Scrolled past
                within 1.2 seconds with no audience motivation to engage.
              </p>
            </div>

            {/* Flatlined Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-white/10 pt-4">
              <div>
                <p className="text-[10px] uppercase text-white/40 font-bold">
                  Views
                </p>
                <p className="font-display text-xl sm:text-2xl font-black text-white/50">
                  124
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-white/40 font-bold">
                  Watch Completion
                </p>
                <p className="font-display text-xl sm:text-2xl font-black text-white/50">
                  8.4%
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-white/40 font-bold">
                  Community Inflow
                </p>
                <p className="font-display text-xl sm:text-2xl font-black text-white/50">
                  0-2
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase text-white/40 font-bold">
                  Engagement
                </p>
                <p className="font-display text-xl sm:text-2xl font-black text-white/50">
                  0.7%
                </p>
              </div>
            </div>
          </div>

          {/* Draggable Divider Handle Line */}
          <div
            className="absolute inset-y-0 z-20 w-1 bg-white shadow-2xl transition-transform"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Center Circular Button */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-[#131310] text-[#f4f4f0] shadow-2xl transition-transform duration-150 hover:scale-110 active:scale-95">
              <ArrowLeftRight className="h-5 w-5 text-[#83c42e]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

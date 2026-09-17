"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Database, TrendingUp, Users } from "lucide-react";

export default function About() {
  const stats = [
    {
      value: "320K+",
      label: "Peak Video Views",
      icon: TrendingUp,
      sub: "Organic viral reach on single post",
    },
    {
      value: "1,000+",
      label: "Community Members",
      icon: Users,
      sub: "Grown from zero on Telegram & LinkedIn",
    },
    {
      value: "19.7K+",
      label: "1st Month Peak",
      icon: Database,
      sub: "Rapid audience validation at Her Whispers",
    },
    {
      value: "3+",
      label: "Channels Scaled",
      icon: Code2,
      sub: "Tech community, brand & personal channel",
    },
  ];

  return (
    <section id="about" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Left: Framed Portrait Card with Designer Marks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-3xl border border-[#131310]/15 bg-[#131310] shadow-xl">
            {/* Portrait Image */}
            <Image
              src="/ayida-headshot.png"
              alt="Ayida A. Shifa - Community Growth Manager"
              fill
              className="object-cover object-top transition-transform duration-700 hover:scale-105"
              priority
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Floating Glass Pill Info Badge */}
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-[#131310]/80 p-4 backdrop-blur-md text-[#f4f4f0]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-lg font-bold">Ayida A. Shifa</p>
                  <p className="text-xs text-[#83c42e] font-medium">
                    Community Growth Lead &amp; Strategist
                  </p>
                </div>
                <div className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/90">
                  Addis Ababa
                </div>
              </div>
            </div>
          </div>

          {/* Designer Corner Crosshairs */}
          <span className="absolute -left-2 -top-2 h-3.5 w-3.5 rounded-xs border border-[#131310] bg-white shadow-xs" />
          <span className="absolute -right-2 -top-2 h-3.5 w-3.5 rounded-xs border border-[#131310] bg-white shadow-xs" />
          <span className="absolute -bottom-2 -left-2 h-3.5 w-3.5 rounded-xs border border-[#131310] bg-white shadow-xs" />
          <span className="absolute -bottom-2 -right-2 h-3.5 w-3.5 rounded-xs border border-[#131310] bg-white shadow-xs" />
        </motion.div>

        {/* Right: Editorial Bio & Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section Header */}
          <div className="relative inline-block text-left">
            <span className="mb-3 flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.25em] text-[#575751]">
              <span className="h-0.5 w-6 bg-[#83c42e]" />
              01 · Who I am
            </span>

            <div className="relative inline-block">
              <h2 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-black leading-none text-[#131310]">
                About
              </h2>
              <span className="font-script pointer-events-none absolute -bottom-3 right-0 translate-x-[24%] text-[#83c42e] text-[clamp(2.6rem,6.5vw,5rem)] leading-none -rotate-6 select-none font-bold">
                me
              </span>
            </div>
          </div>

          {/* Story Paragraphs */}
          <div className="mt-8 space-y-4 text-base sm:text-lg text-[#575751] leading-relaxed">
            <p className="font-medium text-[#131310] text-lg sm:text-xl">
              Building engaged, high-retention communities with systems, data,
              and compelling storytelling.
            </p>

            <p>
              I&apos;m Ayida, a growth-focused community builder with a proven track
              record of scaling accounts from zero to active, thriving audiences
              across Telegram, LinkedIn, Instagram, and TikTok.
            </p>

            <p>
              Currently studying Software Engineering at Jimma University, my
              technical foundation gives me a unique, data-literate edge. Rather
              than treating community building as guesswork, I build repeatable
              growth loops: hypothesis-driven content calendars, retention hooks,
              community rituals, and rigorous analytics reviews.
            </p>
          </div>

          {/* 4-Column Stats Grid */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-[#131310]/10 bg-white/70 p-4 sm:p-5 transition-all duration-300 hover:border-[#131310] hover:bg-white hover:shadow-md"
              >
                <div className="flex items-center justify-between text-[#83c42e] mb-2">
                  <stat.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="font-display text-3xl sm:text-4xl font-black text-[#131310] tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm font-bold text-[#131310]">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-[11px] text-[#575751]">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

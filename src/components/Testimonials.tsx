"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  initials: string;
  image?: string;
  role: string;
  organization: string;
  quote: string;
  rating: number;
  gradient: string;
}

const testimonials: Testimonial[] = [
  {
    id: "betel",
    name: "Betel Addisu",
    initials: "BA",
    image: "/testimonials/meron.png",
    role: "Ambassador",
    organization: "Women Techmakers Ethiopia",
    quote:
      "Ayida understands how to turn a community’s mission into content people actually want to engage with. She combines creativity with consistency, thinks about the audience, and makes sure our online presence reflects the work happening in the community.",
    rating: 5,
    gradient: "from-[#0d3b66] to-[#00a896]",
  },
  {
    id: "meron",
    name: "Meron Abate",
    initials: "MA",
    image: "/testimonials/betel.png",
    role: "Project Lead",
    organization: "Her Whispers",
    quote:
      "Ayida has been such a valuable part of the Her Whispers team. She’s creative, easy to work with, and really understands how to connect with people. Whether it’s sharing our message or keeping the community engaged, she brings thought and intention to what she does. I really appreciate the energy and care she brings to the project.",
    rating: 5,
    gradient: "from-[#6a0572] to-[#ab83a1]",
  },
  {
    id: "abdulfetah",
    name: "Abdulfetah Yishaq",
    initials: "AY",
    image: "/testimonials/abdulfetah.png",
    role: "Community & Audience Member",
    organization: "@ninjagirl_101",
    quote:
      "I love how Ayida shares her journey. It doesn’t feel like she’s trying to be a perfect tech person online—it feels like you’re actually following someone who’s learning, building, and figuring things out. Her content is relatable, and I’ve discovered a lot of useful things through her posts.",
    rating: 5,
    gradient: "from-[#1d2d44] to-[#3e5c76]",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const active = testimonials[activeIndex];

  return (
    <section id="testimonials" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="relative inline-block text-left">
            <span className="mb-3 flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.25em] text-[#575751]">
              <span className="h-0.5 w-6 bg-[#83c42e]" />
              04 · Kind words
            </span>

            <div className="relative inline-block">
              <h2 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-black leading-none text-[#131310]">
                Client
              </h2>
              <span className="font-script pointer-events-none absolute -bottom-3 right-0 translate-x-[24%] text-[#83c42e] text-[clamp(2.6rem,6.5vw,5rem)] leading-none -rotate-6 select-none font-bold">
                love
              </span>
            </div>
          </div>

          <p className="max-w-xs text-sm text-[#575751]">
            Endorsements from ambassadors, project leads, and community members
            I&apos;ve built and created for.
          </p>
        </div>

        {/* Testimonials Display Grid */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">
          {/* Left: Selector Tabs */}
          <div className="flex flex-col gap-3">
            {testimonials.map((t, idx) => {
              const isCurrent = idx === activeIndex;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`group flex items-center gap-4 rounded-2xl p-4 text-left transition-all duration-300 ${
                    isCurrent
                      ? "bg-white shadow-md border border-[#131310]/15"
                      : "bg-white/40 border border-transparent hover:bg-white/70 hover:border-[#131310]/10"
                  }`}
                >
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 transition-all">
                    {t.image ? (
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div
                        className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${t.gradient} font-display text-sm font-black text-white`}
                      >
                        {t.initials}
                      </div>
                    )}
                    {isCurrent && (
                      <span className="absolute inset-0 rounded-full ring-2 ring-[#83c42e]" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className={`font-display text-base font-bold truncate ${
                        isCurrent
                          ? "text-[#131310]"
                          : "text-[#575751] group-hover:text-[#131310]"
                      }`}
                    >
                      {t.name}
                    </p>
                    <p className="text-xs text-[#575751] truncate">
                      {t.organization}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-semibold text-[#83c42e]">
                    <Star className="h-3.5 w-3.5 fill-[#83c42e]" />
                    <span>5.0</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Quote Card */}
          <div className="relative rounded-3xl border border-[#131310]/15 bg-white p-8 sm:p-12 shadow-sm min-h-[300px] flex flex-col justify-between">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-5 left-6 font-serif text-8xl leading-none text-[#131310]/10 select-none"
            >
              “
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="relative z-10"
              >
                <div className="flex items-center gap-1 text-[#83c42e] mb-4">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#83c42e]" />
                  ))}
                </div>

                <blockquote className="font-sans text-lg sm:text-2xl font-normal leading-relaxed text-[#131310]">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>

                <div className="mt-8 flex items-center gap-4 border-t border-[#131310]/10 pt-4">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1 ring-[#131310]/15">
                    {active.image ? (
                      <Image
                        src={active.image}
                        alt={active.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div
                        className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${active.gradient} font-display text-xs font-black text-white`}
                      >
                        {active.initials}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-display text-lg font-black text-[#131310]">
                      {active.name}
                    </p>
                    <p className="text-xs sm:text-sm text-[#575751] font-medium">
                      {active.role} • {active.organization}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation Arrows */}
            <div className="mt-8 flex items-center justify-between border-t border-[#131310]/10 pt-4">
              <span className="font-mono text-xs text-[#575751]">
                0{activeIndex + 1} / 0{testimonials.length}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#131310]/15 bg-white text-[#131310] transition-colors hover:bg-[#131310] hover:text-white"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#131310]/15 bg-white text-[#131310] transition-colors hover:bg-[#131310] hover:text-white"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

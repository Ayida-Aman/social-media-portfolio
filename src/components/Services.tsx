"use client";

import { motion } from "framer-motion";

interface Service {
  number: string;
  title: string;
  script: string;
  description: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "Community",
    script: "Architecture",
    description:
      "Designing onboarding flows, recurring engagement rituals, and active discussion spaces across Telegram and LinkedIn that turn passive observers into brand champions.",
  },
  {
    number: "02",
    title: "Short-Form",
    script: "Viral Reels & TikTok",
    description:
      "Writing 3-second retention hooks, dynamic CapCut pacing, punchy typography captions, and audio trends optimized to beat algorithmic drop-off curves.",
  },
  {
    number: "03",
    title: "Data-Driven",
    script: "Growth Loops",
    description:
      "Bringing a software engineering analytical lens to social growth: hypothesis testing, funnel tracking, engagement rate benchmarking, and rapid content iteration.",
  },
  {
    number: "04",
    title: "Copywriting",
    script: "& Content Calendars",
    description:
      "Transforming technical startup products and community missions into relatable, high-converting social narratives scheduled across structured editorial calendars.",
  },
  {
    number: "05",
    title: "Cross-Platform",
    script: "Funnel Engineering",
    description:
      "Seamlessly directing top-of-funnel viral discovery from TikTok and Instagram Reels into high-trust Telegram groups and LinkedIn thought leadership networks.",
  },
  {
    number: "06",
    title: "Events & Digital",
    script: "Outreach Cadence",
    description:
      "Coordinating impactful virtual workshops, community highlights, and collaborative partner campaigns that drive recurring participation rather than one-time visits.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="relative mb-20 inline-block">
          <span className="font-script absolute -top-8 left-1 z-10 whitespace-nowrap text-[#83c42e] text-[clamp(2.4rem,6vw,4.5rem)] leading-none -rotate-6 select-none font-bold">
            What I
          </span>
          <h2 className="font-display text-[clamp(3.5rem,10vw,7.5rem)] font-black leading-none text-[#131310]">
            Do
          </h2>
        </div>

        {/* Designer Frame Container */}
        <div className="relative rounded-3xl border border-[#131310]/15 bg-white/50 p-6 sm:p-12 shadow-sm">
          {/* Outer dashed selection frame anchors */}
          <span className="absolute -left-1.5 -top-1.5 h-3 w-3 border border-[#131310] bg-white rounded-xs" />
          <span className="absolute -right-1.5 -top-1.5 h-3 w-3 border border-[#131310] bg-white rounded-xs" />
          <span className="absolute -left-1.5 -bottom-1.5 h-3 w-3 border border-[#131310] bg-white rounded-xs" />
          <span className="absolute -right-1.5 -bottom-1.5 h-3 w-3 border border-[#131310] bg-white rounded-xs" />

          {/* Grid of 6 Services */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative min-h-[160px]"
              >
                {/* Giant Watermark Number */}
                <span className="pointer-events-none absolute left-0 top-0 select-none font-display text-6xl sm:text-7xl font-black leading-[0.75] text-[#d6d5cd]/50 transition-colors duration-300 group-hover:text-[#83c42e]/30">
                  {service.number}
                </span>

                {/* Content Overlay */}
                <div className="relative z-10 pl-4 pt-10">
                  <div className="flex flex-wrap items-baseline gap-1.5">
                    <h3 className="font-display text-xl sm:text-2xl font-black text-[#131310]">
                      {service.title}
                    </h3>
                    <span className="font-script text-lg sm:text-xl font-bold text-[#83c42e] -rotate-3 transition-transform duration-300 group-hover:translate-x-1">
                      {service.script}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-[#575751] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

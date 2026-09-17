"use client";

import { motion } from "framer-motion";

interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverable: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Audit & Audience",
    subtitle: "Discovery",
    description:
      "Deep dive into existing community channels, member personas, and competitive landscape. We identify drop-off friction points and pinpoint where target members hang out.",
    deliverable: "Audience Persona & Channel Gap Map",
  },
  {
    number: "02",
    title: "Hook & Content",
    subtitle: "Architecture",
    description:
      "Developing 5–10 high-retention hook frameworks, brand tone guidelines, and a structured monthly content roadmap with platform-native video scripts and visual templates.",
    deliverable: "Content System & Hook Playbook",
  },
  {
    number: "03",
    title: "Cadence & Community",
    subtitle: "Activation",
    description:
      "Launching weekly discussion rituals, virtual/in-person event promotions, and community onboarding flows across Telegram and LinkedIn to convert passive viewers into active members.",
    deliverable: "Live Community Rituals & Calendar",
  },
  {
    number: "04",
    title: "Analytics Loop &",
    subtitle: "Iteration",
    description:
      "Applying software engineering systems thinking: tracking watch time, subscriber growth rate, and member engagement data to double down on what drives compound growth.",
    deliverable: "Weekly Metric Dashboard & Growth Sprints",
  },
];

export default function Process() {
  return (
    <section className="relative bg-[#131310] px-5 py-24 text-[#f4f4f0] sm:px-8 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <span className="mb-3 flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.25em] text-[#f4f4f0]/60">
            <span className="h-0.5 w-6 bg-[#83c42e]" />
            How it works
          </span>

          <h2 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-black leading-none text-[#f4f4f0]">
            The{" "}
            <span className="font-script text-[#83c42e] -rotate-3 inline-block font-bold">
              process
            </span>
          </h2>

          <p className="mt-4 max-w-lg text-sm sm:text-base text-[#f4f4f0]/70">
            A repeatable 4-stage framework taking startup communities from
            dormant or zero to predictable, compounding member engagement.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col justify-between bg-[#131310] p-6 sm:p-8 transition-colors duration-300 hover:bg-white/[0.04]"
            >
              <div>
                <span className="font-script text-3xl sm:text-4xl font-bold text-[#83c42e]">
                  {step.number}
                </span>

                <h3 className="mt-6 font-display text-xl sm:text-2xl font-black text-white">
                  {step.title}
                  <span className="block text-sm text-[#83c42e] font-sans font-medium mt-0.5">
                    {step.subtitle}
                  </span>
                </h3>

                <p className="mt-4 text-xs sm:text-sm text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-4">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-white/40">
                  Key Output
                </span>
                <span className="mt-1 block text-xs font-semibold text-white/90">
                  {step.deliverable}
                </span>
              </div>

              {/* Hover Line Accent */}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#83c42e] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

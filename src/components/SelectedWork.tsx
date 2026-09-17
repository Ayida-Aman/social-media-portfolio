"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles, TrendingUp, Users, Video } from "lucide-react";

interface Project {
  id: string;
  title: string;
  role: string;
  organization: string;
  period: string;
  category: "Tech Community" | "Brand Scaling" | "Personal Brand";
  summary: string;
  bullets: string[];
  metrics: { label: string; value: string }[];
  gradient: string;
  accentBadge: string;
  links: { label: string; url: string; primary?: boolean }[];
}

const projects: Project[] = [
  {
    id: "wtm-ethiopia",
    title: "Google Women Techmakers Ethiopia",
    role: "Community Growth Lead",
    organization: "Google WTM Ethiopia",
    period: "April 2025 – Present",
    category: "Tech Community",
    summary:
      "Scaling the premier tech community for women in Ethiopia across Telegram and LinkedIn from zero to over 1,000+ active members.",
    bullets: [
      "Grew Telegram channel & LinkedIn page from zero to 1,000+ followers/subscribers each within a year.",
      "Identified top-performing content and timing patterns to establish a predictable, repeatable sign-up engine.",
      "Coordinated inclusive virtual & in-person events and cross-promoted them across channels, turning one-off attendees into repeat members.",
    ],
    metrics: [
      { label: "Community Members", value: "1,000+" },
      { label: "Channels Scaled", value: "Tg + Li" },
      { label: "Growth Method", value: "100% Organic" },
    ],
    gradient: "from-[#0f283d] via-[#123e4d] to-[#0a524a]",
    accentBadge: "bg-[#229ED9]/20 text-[#60cdff] border-[#229ED9]/30",
    links: [
      {
        label: "Telegram Channel",
        url: "https://t.me/Womentechmakersethiopia",
        primary: true,
      },
      {
        label: "LinkedIn Page",
        url: "https://www.linkedin.com/company/google-women-techmakers-ethiopia/posts/?feedView=all",
      },
    ],
  },
  {
    id: "her-whispers",
    title: "Her Whispers — Brand Growth",
    role: "Growth & Content Manager",
    organization: "Her Whispers",
    period: "August 2026 – Present",
    category: "Brand Scaling",
    summary:
      "Taking menstrual health and wellness content from zero to high-retention viral loops on Instagram and TikTok.",
    bullets: [
      "Launched Instagram and TikTok accounts from scratch, testing 10+ hook formats until landing an educational-yet-engaging content tone.",
      "Achieved a single-video peak view count of 19.7K in the very first month, drastically outpacing initial follower size.",
      "Owned the full growth loop: content calendar, persuasive copywriting, CapCut reel editing, and weekly metric iteration.",
    ],
    metrics: [
      { label: "1st Month Peak", value: "19.7K" },
      { label: "Platforms", value: "IG + TikTok" },
      { label: "Focus", value: "Health Education" },
    ],
    gradient: "from-[#380b2a] via-[#4d1033] to-[#24061a]",
    accentBadge: "bg-[#f43f5e]/20 text-[#fda4af] border-[#f43f5e]/30",
    links: [
      {
        label: "Featured TikTok Video",
        url: "https://vt.tiktok.com/ZSqR7dngq/",
        primary: true,
      },
      {
        label: "Instagram",
        url: "https://www.instagram.com/herwhispers2026",
      },
      {
        label: "TikTok Account",
        url: "https://www.tiktok.com/@herwhispers2026",
      },
    ],
  },
  {
    id: "ninjagirl-101",
    title: "@ninjagirl_101 — Personal Tech Brand",
    role: "Founder & Creator",
    organization: "@ninjagirl_101",
    period: "August 2026 – Present",
    category: "Personal Brand",
    summary:
      "Documenting the software engineering journey and tech tutorials, generating over 320,000+ views on a single video.",
    bullets: [
      "Built a loyal audience around software engineering from zero to 1,000+ TikTok and 2,500+ Instagram followers.",
      "Created a breakout viral video reaching 320K+ views through hook testing and community-first storytelling.",
      "Ran the full growth pipeline solo: ideation, scripting, filming, CapCut editing, community comments management, and analytics tracking.",
    ],
    metrics: [
      { label: "Peak Video Views", value: "320K+" },
      { label: "Combined Audience", value: "3,500+" },
      { label: "Pipeline", value: "Solo Creator" },
    ],
    gradient: "from-[#172554] via-[#1e1b4b] to-[#111827]",
    accentBadge: "bg-[#83c42e]/20 text-[#a6e22e] border-[#83c42e]/30",
    links: [
      {
        label: "Viral Video (320K+ Views)",
        url: "https://vt.tiktok.com/ZSqRW3mNt/",
        primary: true,
      },
      {
        label: "TikTok Channel",
        url: "https://www.tiktok.com/@ninjagirl_101",
      },
      {
        label: "Instagram Profile",
        url: "https://www.instagram.com/ninjagirl_101",
      },
    ],
  },
];

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = [
    { label: "All", count: projects.length },
    {
      label: "Tech Community",
      count: projects.filter((p) => p.category === "Tech Community").length,
    },
    {
      label: "Brand Scaling",
      count: projects.filter((p) => p.category === "Brand Scaling").length,
    },
    {
      label: "Personal Brand",
      count: projects.filter((p) => p.category === "Personal Brand").length,
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="relative inline-block text-left">
            <span className="mb-3 flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.25em] text-[#575751]">
              <span className="h-0.5 w-6 bg-[#83c42e]" />
              02 · Selected
            </span>

            <div className="relative inline-block">
              <h2 className="font-display text-[clamp(2.75rem,8vw,6.5rem)] font-black leading-none text-[#131310]">
                Recent
              </h2>
              <span className="font-script pointer-events-none absolute -bottom-3 right-0 translate-x-[24%] text-[#83c42e] text-[clamp(2.6rem,6.5vw,5rem)] leading-none -rotate-6 select-none font-bold">
                work
              </span>
            </div>
          </div>

          <p className="max-w-xs text-sm text-[#575751]">
            A slice of communities and accounts scaled from zero. Filter by
            focus, explore the metrics, and click directly to verify live channels.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mb-10 flex flex-wrap gap-2.5">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.label;
            return (
              <button
                key={cat.label}
                type="button"
                onClick={() => setActiveFilter(cat.label)}
                className={`group flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-[#131310] bg-[#131310] text-[#f4f4f0] shadow-sm"
                    : "border-[#131310]/15 bg-white/60 text-[#575751] hover:border-[#131310] hover:text-[#131310]"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] tabular-nums ${
                    isActive
                      ? "bg-white/20 text-[#f4f4f0]"
                      : "bg-[#131310]/10 text-[#575751]"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-[#131310]/15 bg-white p-6 sm:p-10 shadow-sm transition-all duration-500 hover:border-[#131310] hover:shadow-xl"
              >
                {/* Visual Header Banner */}
                <div
                  className={`relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} p-6 sm:p-8 text-white`}
                >
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md ${project.accentBadge}`}
                      >
                        {project.category}
                      </span>
                      <span className="text-xs text-white/60 font-medium">
                        {project.period}
                      </span>
                    </div>

                    <div className="font-mono text-xs text-white/50">
                      0{index + 1} / 0{filteredProjects.length}
                    </div>
                  </div>

                  <div className="relative z-10 mt-6 sm:mt-10">
                    <p className="text-xs uppercase tracking-widest text-[#83c42e] font-bold">
                      {project.role}
                    </p>
                    <h3 className="mt-1 font-display text-2xl sm:text-4xl font-black text-white">
                      {project.title}
                    </h3>
                  </div>

                  {/* Decorative background glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
                </div>

                {/* Content Grid */}
                <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
                  <div>
                    <p className="text-base sm:text-lg font-medium text-[#131310]">
                      {project.summary}
                    </p>

                    <ul className="mt-4 space-y-2.5">
                      {project.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2.5 text-sm sm:text-base text-[#575751] leading-relaxed"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#83c42e]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Direct External Action Links */}
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group/link inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                            link.primary
                              ? "bg-[#131310] text-[#f4f4f0] hover:bg-[#83c42e] hover:text-[#131310]"
                              : "border border-[#131310]/15 bg-white text-[#131310] hover:border-[#131310] hover:bg-[#131310]/5"
                          }`}
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Right: Metrics Card */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 rounded-2xl border border-[#131310]/10 bg-[#f4f4f0]/60 p-5">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-xl bg-white p-4 border border-[#131310]/5"
                      >
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#575751]">
                          {metric.label}
                        </p>
                        <p className="mt-1 font-display text-2xl sm:text-3xl font-black text-[#131310]">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

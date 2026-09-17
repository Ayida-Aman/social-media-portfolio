"use client";

import { ArrowUp, ArrowUpRight, Mail, Phone } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/bintaman",
    },
    {
      label: "Telegram",
      url: "https://t.me/Ayida_A_Shifa",
    },
    {
      label: "TikTok",
      url: "https://www.tiktok.com/@ninjagirl_101",
    },
    {
      label: "Instagram ",
      url: "https://www.instagram.com/ninjagirl_101",
    },
    
  ];

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#131310] px-5 pb-12 pt-28 text-[#f4f4f0] sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* Top Tagline */}
        <span className="mb-6 flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
          <span className="h-0.5 w-6 bg-[#83c42e]" />
          Let&apos;s build something together
        </span>

        {/* Giant Headline */}
        <h2 className="font-display text-[clamp(2.8rem,9.5vw,7.5rem)] font-black leading-[0.92] text-white">
          <span>Ready to grow your</span>
          <br />
          <span className="inline-flex items-baseline gap-4 mt-2">
            <span className="font-script text-[#83c42e] -rotate-3 select-none">
              community?
            </span>
          </span>
        </h2>

        {/* Main Action CTAs */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            {/* Email Button */}
            <a
              href="mailto:amanayida1@gmail.com"
              className="group inline-flex items-center gap-3 rounded-full bg-[#83c42e] px-7 py-4 text-[#131310] shadow-lg transition-all duration-300 hover:bg-[#a6e22e] hover:scale-105"
            >
              <Mail className="h-5 w-5" />
              <span className="font-display text-base sm:text-lg font-black tracking-tight">
                amanayida1@gmail.com
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#131310] text-[#f4f4f0] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>

            {/* Direct Phone / WhatsApp */}
            <a
              href="tel:+251938876395"
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-[#83c42e]" />
              <span>+251 938876395</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white hover:text-[#131310]"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>

        {/* Social Links List */}
        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-xs sm:text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              <span>{social.label}</span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#83c42e] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Credits & Location */}
        <div className="mt-16 flex flex-col items-start justify-between gap-3 text-xs text-white/40 sm:flex-row sm:items-center border-t border-white/10 pt-6">
          <p>© {new Date().getFullYear()} Ayida A. Shifa. All rights reserved.</p>
          <p>Addis Ababa, Ethiopia • Available worldwide, remote & on-set.</p>
          <p className="text-white/60">Community &amp; Social Growth Specialist</p>
        </div>
      </div>

      {/* Giant Bottom Watermark */}
      <p
        aria-hidden="true"
        className="pointer-events-none mt-10 select-none text-center font-display text-[22vw] font-black leading-none text-white/[0.04]"
      >
        AYIDA
      </p>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 transition-all duration-300">
        <nav
          className={`flex w-full max-w-6xl items-center justify-between px-3 py-2 transition-all duration-300 ${
            scrolled
              ? "rounded-full bg-[#f4f4f0]/90 backdrop-blur-md border border-[#131310]/10 shadow-xs"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <a
            href="#top"
            className="font-display text-xl font-black tracking-tight text-[#131310] flex items-center group"
          >
            <span>Ayida</span>
            <span className="text-[#83c42e] transition-transform duration-300 group-hover:scale-125">
              .
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-sm font-semibold text-[#131310]/80 transition-colors hover:text-[#131310]"
              >
                {link.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-[#131310] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          {/* Let's talk CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-[#131310] px-6 py-2.5 text-sm font-bold text-[#f4f4f0] transition-all duration-300 hover:bg-[#83c42e] hover:text-[#131310]"
            >
              Let&apos;s talk
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#131310]/15 bg-white text-[#131310] md:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-between bg-[#f4f4f0] px-6 pb-12 pt-28 md:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-3xl font-bold tracking-tight text-[#131310] transition-colors hover:text-[#83c42e]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-[#131310]/10 pt-6">
            <a
              href="mailto:amanayida1@gmail.com"
              className="flex items-center justify-center gap-2 rounded-full bg-[#131310] py-3.5 text-sm font-bold text-[#f4f4f0] hover:bg-[#83c42e] hover:text-[#131310]"
            >
              <span>amanayida1@gmail.com</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

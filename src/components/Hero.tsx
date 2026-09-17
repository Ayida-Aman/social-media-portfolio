"use client";

import { motion } from "framer-motion";
import { Move } from "lucide-react";

interface FloatingTile {
  name: string;
  category: string;
  position: string;
  bg: string;
  textColor: string;
  svgIcon?: React.ReactNode;
  iconText?: string;
  duration: number;
  delay: number;
}

export default function Hero() {
  const tiles: FloatingTile[] = [
    // Top Left - Telegram
    {
      name: "Telegram",
      category: "Tech Community",
      position: "top-[18%] left-[7%] sm:left-[10%]",
      bg: "bg-[#229ED9]",
      textColor: "text-white",
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
        </svg>
      ),
      duration: 5.5,
      delay: 0,
    },
    // Top Center Left - TikTok (Authentic TikTok Music Note Logo)
    {
      name: "TikTok",
      category: "Viral Short-Form",
      position: "top-[12%] left-[23%] sm:left-[26%]",
      bg: "bg-[#0b0b0d] ring-1 ring-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.3)]",
      textColor: "text-white",
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.887 2.887 2.896 2.896 0 0 1-2.887-2.887 2.896 2.896 0 0 1 2.887-2.887c.28 0 .548.04.803.111V9.378a6.34 6.34 0 0 0-.803-.051C6.012 9.327 3.2 12.139 3.2 15.614c0 3.475 2.812 6.287 6.287 6.287 3.475 0 6.287-2.812 6.287-6.287V9.018a8.23 8.23 0 0 0 4.815 1.545v-3.45a4.78 4.78 0 0 1-1-.427z" />
        </svg>
      ),
      duration: 6.2,
      delay: 0.8,
    },
    // Mid Left - Canva
    {
      name: "Canva",
      category: "Creative Assets",
      position: "top-[48%] left-[5%] sm:left-[8%]",
      bg: "bg-gradient-to-tr from-[#00c4cc] to-[#7d2ae8]",
      textColor: "text-white",
      svgIcon: (
        <svg viewBox="0 0 80 30" fill="currentColor" className="w-8 h-4 text-white">
          <path d="M79.444 18.096c-.136 0-.26.088-.324.272-.82 2.34-1.928 3.732-2.84 3.732-.524 0-.736-.584-.736-1.5 0-2.292 1.372-7.152 2.064-9.368.08-.268.132-.508.132-.712 0-.644-.352-.96-1.224-.96-.94 0-1.952.368-2.936 2.092-.34-1.52-1.368-2.184-2.804-2.184-1.66 0-3.264 1.068-4.584 2.8-1.32 1.732-2.872 2.3-4.04 2.02.84-2.056 1.152-3.592 1.152-4.732 0-1.788-.884-2.868-2.312-2.868-2.172 0-3.424 2.072-3.424 4.252 0 1.684.764 3.416 2.444 4.256-1.408 3.184-3.464 6.064-4.244 6.064-1.008 0-1.304-4.932-1.248-8.46.036-2.024.204-2.128.204-2.74 0-.352-.228-.592-1.144-.592-2.136 0-2.796 1.808-2.896 3.884a10.233 10.233 0 0 1-.368 2.332c-.892 3.184-2.732 5.6-3.932 5.6-.556 0-.708-.556-.708-1.284 0-2.292 1.284-5.156 1.284-7.6 0-1.796-.788-2.932-2.272-2.932-1.748 0-4.06 2.08-6.248 5.976.72-2.984 1.016-5.872-1.116-5.872A2.886 2.886 0 0 0 36 9.916a.752.752 0 0 0-.432.728c.204 3.176-2.56 11.312-5.18 11.312-.476 0-.708-.516-.708-1.348 0-2.296 1.368-7.144 2.056-9.364.088-.288.136-.536.136-.752 0-.608-.376-.92-1.228-.92-.936 0-1.952.356-2.932 2.08-.344-1.52-1.372-2.184-2.808-2.184-2.356 0-4.988 2.492-6.144 5.74-1.548 4.336-4.668 8.524-8.868 8.524-3.812 0-5.824-3.172-5.824-8.184C4.068 8.312 9.38 2.4 13.32 2.4c1.884 0 2.784 1.2 2.784 3.04 0 2.228-1.244 3.264-1.244 4.112 0 .26.216.516.644.516 1.712 0 3.728-2.012 3.728-4.756S17.004.56 13.064.56C6.552.56 0 7.112 0 15.508c0 6.68 3.296 10.708 8.996 10.708 3.888 0 7.284-3.024 9.116-6.552.208 2.924 1.536 4.452 3.56 4.452 1.8 0 3.256-1.072 4.368-2.956.428 1.972 1.564 2.936 3.04 2.936 1.692 0 3.108-1.072 4.456-3.064-.02 1.564.336 3.036 1.692 3.036.64 0 1.404-.148 1.54-.708 1.428-5.904 4.956-10.724 6.036-10.724.32 0 .408.308.408.672 0 1.604-1.132 4.892-1.132 6.992 0 2.268.964 3.768 2.956 3.768 2.208 0 4.452-2.704 5.948-6.656.468 3.692 1.48 6.672 3.064 6.672 1.944 0 5.396-4.092 7.488-8.424.82.104 2.052.076 3.236-.76-.504 1.276-.8 2.672-.8 4.068 0 4.02 1.92 5.148 3.572 5.148 1.796 0 3.252-1.072 4.368-2.956.368 1.7 1.308 2.932 3.036 2.932 2.704 0 5.052-2.764 5.052-5.032 0-.6-.256-.964-.556-.964zM23.32 21.888c-1.092 0-1.52-1.1-1.52-2.74 0-2.848 1.948-7.604 4.008-7.604.9 0 1.24 1.06 1.24 2.356 0 2.892-1.852 7.988-3.728 7.988zm37.404-8.5c-.652-.776-.888-1.832-.888-2.772 0-1.16.424-2.14.932-2.14s.664.5.664 1.196c0 1.164-.416 2.864-.708 3.716zm8.468 8.5c-1.092 0-1.52-1.264-1.52-2.74 0-2.748 1.948-7.604 4.024-7.604.9 0 1.22 1.052 1.22 2.356 0 2.892-1.82 7.988-3.724 7.988z" />
        </svg>
      ),
      duration: 5.8,
      delay: 1.4,
    },
    // Top Center Right - CapCut
    {
      name: "CapCut",
      category: "Reels & Retention",
      position: "top-[14%] right-[23%] sm:right-[26%]",
      bg: "bg-[#0b0b0d] ring-1 ring-white/10",
      textColor: "text-white",
      svgIcon: (
        <svg viewBox="0 0 25 24" fill="currentColor" className="w-6 h-6 text-white">
          <path d="M24.189 6.442V2.671l-4.535 2.383V4.91c.002-1.505-1.078-2.411-2.638-2.411H2.64C.993 2.5 0 3.407 0 4.91V8.72L6.354 12 0 15.316v3.8C0 20.595 1 21.5 2.64 21.5h14.373c1.56 0 2.639-.907 2.639-2.382v-.197l4.536 2.409v-3.828L13.64 12 24.19 6.443zM9.982 13.873l7.797 4.083H2.157l7.825-4.083zm7.741-7.828l-7.742 4.057-7.825-4.057h15.567z" />
        </svg>
      ),
      duration: 6.6,
      delay: 0.4,
    },
    // Top Right - LinkedIn
    {
      name: "LinkedIn",
      category: "Thought Leadership",
      position: "top-[18%] right-[7%] sm:right-[10%]",
      bg: "bg-[#0A66C2]",
      textColor: "text-white",
      iconText: "in",
      duration: 5.2,
      delay: 1.1,
    },
    // Mid Right - Instagram
    {
      name: "Instagram",
      category: "Community Aesthetics",
      position: "top-[46%] right-[5%] sm:right-[8%]",
      bg: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]",
      textColor: "text-white",
      svgIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      duration: 6.0,
      delay: 1.7,
    },
  ];

  return (
    <section
      id="top"
      className="relative flex h-screen min-h-screen w-full items-center justify-center overflow-hidden bg-[#f4f4f0] px-4 sm:px-8"
    >
      {/* Continuous Floating Tiles (Pills) Layer */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        {tiles.map((tile) => (
          <motion.div
            key={tile.name}
            className={`pointer-events-auto absolute group ${tile.position}`}
            animate={{
              y: [0, -14, 0, 12, 0],
              x: [0, 7, 0, -7, 0],
              rotate: [0, 2.5, 0, -2.5, 0],
            }}
            transition={{
              duration: tile.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: tile.delay,
            }}
          >
            <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-115">
              {/* App Tile Icon */}
              <div
                className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[18px] font-display font-black shadow-lg ring-1 ring-black/10 cursor-pointer ${tile.bg} ${tile.textColor}`}
              >
                {tile.svgIcon ? (
                  tile.svgIcon
                ) : (
                  <span className="text-base sm:text-lg tracking-tight font-bold">
                    {tile.iconText}
                  </span>
                )}
              </div>

              {/* Tooltip on Hover */}
              <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#131310] px-2.5 py-1 text-[11px] font-medium text-[#f4f4f0] opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 z-30">
                <span className="font-bold">{tile.name}</span>
                <span className="text-[#83c42e] ml-1.5 font-normal">
                  {tile.category}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Center Giant Hero Selection Box (Scaled exactly like George's VIDEO EDITOR) */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <div className="relative inline-block px-6 py-4 sm:px-12 sm:py-8">
          {/* Dashed Selection Bounding Box */}
          <div className="pointer-events-none absolute inset-0 border border-dashed border-[#131310]/55">
            {/* 6 Square Anchor Handles (Black solid squares matching George's layout) */}
            <span className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-[#131310]" />
            <span className="absolute left-1/2 -top-1.5 -translate-x-1/2 h-3 w-3 bg-[#131310]" />
            <span className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-[#131310]" />
            <span className="absolute -left-1.5 -bottom-1.5 h-3 w-3 bg-[#131310]" />
            <span className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 h-3 w-3 bg-[#131310]" />
            <span className="absolute -right-1.5 -bottom-1.5 h-3 w-3 bg-[#131310]" />

            {/* Tag Badge: Green pill with "Ayida" matching "George" badge in screenshot */}
            <div className="absolute -top-7 left-2 sm:left-4 flex items-center rounded-md bg-[#83c42e] px-2.5 py-0.5 text-[11px] font-bold text-[#131310] shadow-sm">
              <span>Ayida</span>
            </div>

            {/* 4-Way Resize Arrow Icon at bottom right corner */}
            <div className="absolute -bottom-8 -right-3 sm:-right-4 text-[#131310]">
              <Move className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
          </div>

          {/* Sized typography: perfectly balanced inside the center box */}
          <h1 className="font-display font-black tracking-tight leading-[0.88] text-[#131310] select-none text-[clamp(2.75rem,7.5vw,6.8rem)]">
            <span className="block">COMMUNITY</span>
            <span className="relative inline-block mt-1 sm:mt-2">
              <span>GROWTH</span>
              {/* Handwritten Script Accent rotated at bottom right */}
              <span className="font-script absolute right-0 top-full -translate-y-3 sm:-translate-y-5 translate-x-1 sm:translate-x-3 rotate-[-6deg] whitespace-nowrap text-[#83c42e] text-[clamp(1.7rem,4.2vw,3.6rem)] font-bold tracking-normal select-none">
                &amp; social media manager
              </span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}

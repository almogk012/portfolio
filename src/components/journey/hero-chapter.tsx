"use client";

import { motion } from "framer-motion";
import { ArrowDownIcon } from "lucide-react";
import { HeroBackground } from "./topologies";
import { DATA } from "@/data/resume";

export function HeroChapter() {
  const first = DATA.name.split(" ")[0];
  const last = DATA.name.split(" ").slice(1).join(" ");

  return (
    <section
      id="chapter-hero"
      data-chapter
      data-label="Intro"
      data-year="—"
      className="relative h-svh w-full overflow-hidden snap-start"
    >
      <HeroBackground />

      {/* Marquee strip top */}
      <div className="absolute top-8 inset-x-0 z-10 marquee-mask opacity-60">
        <div className="flex w-max gap-12 animate-marquee whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.3em] text-white/30">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12">
              {[
                "Senior Software Engineer",
                "Full-stack · AI-native",
                "React · Node · Java · Cloud",
                `Based in ${DATA.location}`,
                "Currently building in stealth",
                "Portfolio v3 · 2026",
              ].map((t) => (
                <span key={`${k}-${t}`} className="flex items-center gap-12">
                  <span>◆</span>
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 pb-32 pt-20">
        <div className="flex w-full max-w-7xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-white/70">
              Heads down · Building in stealth
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-display italic text-white whitespace-nowrap"
            style={{
              fontSize: "clamp(2.75rem, 11.5vw, 10rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            {first} {last}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 max-w-xl text-balance text-sm text-white/70 sm:text-base"
          >
            {DATA.description}. 8+ years across cybersecurity, cloud, and
            AI-native systems — shipping software that real teams rely on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/55 sm:text-[11px]"
          >
            <span><span className="text-white">8+</span> years</span>
            <span className="text-white/25">·</span>
            <span><span className="text-white">5</span> chapters</span>
            <span className="text-white/25">·</span>
            <span><span className="text-white">∞</span> things shipped</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom corners */}
      <div className="absolute bottom-7 left-8 z-10 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-white/35 md:block">
        <div>{DATA.location}</div>
        <div>Portfolio · 2026</div>
      </div>
      <motion.a
        href="#chapter-stealth"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.4em] text-white/50 transition hover:text-white"
      >
        <span>Begin</span>
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDownIcon className="size-3" />
        </motion.span>
      </motion.a>
      <div className="absolute bottom-7 right-8 z-10 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-white/35 md:block">
        <div className="text-right">Chapter 00</div>
        <div>Prologue</div>
      </div>
    </section>
  );
}

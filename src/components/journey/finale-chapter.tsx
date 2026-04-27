"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { DATA } from "@/data/resume";

export function FinaleChapter() {
  return (
    <section
      id="chapter-contact"
      data-chapter
      data-label="Contact"
      data-year="Now"
      className="relative h-svh w-full overflow-hidden snap-start"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 70%), #050609",
          }}
        />
        <div className="absolute inset-0 grid-lines-fine opacity-25" />
      </div>

      {/* Floating skill marquee */}
      <div className="absolute top-1/2 inset-x-0 z-0 -translate-y-1/2 marquee-mask">
        <div className="flex w-max gap-12 animate-marquee-slow whitespace-nowrap font-display italic text-white/[0.06]"
          style={{ fontSize: "clamp(6rem, 14vw, 18rem)", lineHeight: 1 }}
        >
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12">
              {DATA.skills.map((s) => (
                <span key={`${k}-${s}`}>{s} ·</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center">
        <div className="flex max-w-4xl flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50"
          >
            <span className="inline-block h-px w-10 bg-white/40" />
            <span>End of journey · Start of conversation</span>
            <span className="inline-block h-px w-10 bg-white/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-8 font-display tracking-tightest text-white"
            style={{
              fontSize: "clamp(3.5rem, 12vw, 12rem)",
              lineHeight: 0.85,
              fontWeight: 600,
            }}
          >
            <span className="block italic">Let&apos;s</span>
            <span className="block">build something.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-xl text-balance text-white/65 sm:text-lg"
          >
            Got a hard problem, a small team, or a wild idea? I&apos;m good
            company on either side of the keyboard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:gap-5"
          >
            <Link
              href={`mailto:${DATA.contact.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-mono text-[12px] uppercase tracking-[0.3em] text-black transition hover:bg-white/90"
            >
              {DATA.contact.email}
              <span className="transition group-hover:translate-x-0.5">→</span>
            </Link>
            <Link
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 font-mono text-[12px] uppercase tracking-[0.3em] text-white/85 transition hover:border-white hover:text-white"
            >
              LinkedIn
            </Link>
            <Link
              href={DATA.contact.social.GitHub.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 font-mono text-[12px] uppercase tracking-[0.3em] text-white/85 transition hover:border-white hover:text-white"
            >
              GitHub
            </Link>
          </motion.div>

          <div className="mt-20 grid grid-cols-2 gap-10 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 sm:grid-cols-4 sm:gap-16">
            <div>
              <div className="text-white/55">Where</div>
              <div className="mt-1.5 text-white/85">{DATA.location}</div>
            </div>
            <div>
              <div className="text-white/55">Phone</div>
              <div className="mt-1.5 text-white/85">{DATA.contact.tel}</div>
            </div>
            <div>
              <div className="text-white/55">Status</div>
              <div className="mt-1.5 text-white/85">Open</div>
            </div>
            <div>
              <div className="text-white/55">Made with</div>
              <div className="mt-1.5 text-white/85">Care · 2026</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

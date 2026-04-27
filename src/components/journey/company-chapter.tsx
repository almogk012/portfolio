"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, type ReactElement } from "react";
import { ArrowUpRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  StealthBackground,
  ImpervaBackground,
  MicrosoftBackground,
  CyberXBackground,
  NetcraftBackground,
} from "./topologies";
import { useHighlight } from "./highlight-context";

type Theme = {
  background: string;
  surface: string;
  ink: string;
  muted: string;
  accent: string;
  accent2: string;
  glow: string;
};

type Work = {
  id: string;
  company: string;
  href: string;
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  year: string;
  chapter: string;
  tagline: string;
  kicker: string;
  description: string;
  highlights: readonly string[];
  stack: readonly string[];
  theme: Theme;
};

const BACKGROUNDS: Record<string, (props: { theme: Theme }) => ReactElement> = {
  stealth: StealthBackground,
  imperva: ImpervaBackground,
  microsoft: MicrosoftBackground,
  cyberx: CyberXBackground,
  netcraft: NetcraftBackground,
};

export function CompanyChapter({
  work,
  index,
  total,
}: {
  work: Work;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yShift = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const yearOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  const Background = BACKGROUNDS[work.id];

  return (
    <section
      ref={ref}
      id={`chapter-${work.id}`}
      data-chapter
      data-label={work.company}
      data-year={work.year}
      className="relative h-svh min-h-[640px] w-full overflow-hidden snap-start"
      style={
        {
          color: work.theme.ink,
          ["--accent" as never]: work.theme.accent,
          ["--accent2" as never]: work.theme.accent2,
        } as React.CSSProperties
      }
    >
      {Background ? <Background theme={work.theme} /> : null}

      {/* Top header strip */}
      <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between gap-4 px-5 sm:px-10 py-5 font-mono text-[10px] uppercase tracking-[0.3em]">
        <div
          className="flex items-center gap-3 truncate"
          style={{ color: `${work.theme.ink}99` }}
        >
          <span
            className="inline-block h-1 w-6 shrink-0"
            style={{ background: work.theme.accent }}
          />
          <span className="shrink-0">Chapter {work.chapter}</span>
          <span className="shrink-0" style={{ color: `${work.theme.ink}55` }}>
            ·
          </span>
          <span className="truncate">{work.kicker}</span>
        </div>
        <div
          className="hidden shrink-0 items-center gap-3 sm:flex"
          style={{ color: `${work.theme.ink}99` }}
        >
          <span>
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Side year (giant) */}
      <motion.div
        style={{ y: yShift, opacity: yearOpacity }}
        className="pointer-events-none absolute right-[-3vw] top-1/2 z-[5] -translate-y-1/2 select-none font-display tracking-tightest"
      >
        <span
          className="block text-right opacity-[0.06]"
          style={{
            fontSize: "clamp(12rem, 36vw, 36rem)",
            lineHeight: 0.85,
            color: work.theme.ink,
            fontWeight: 700,
          }}
        >
          {work.year}
        </span>
      </motion.div>

      {/* Content panel — bottom-left, fits any viewport.
          pb leaves room for the floating dock + footer line. */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 pb-24 sm:p-10 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="w-full max-w-[640px]"
        >
          {/* tagline */}
          <div
            className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] sm:text-[11px]"
            style={{ color: `${work.theme.ink}aa` }}
          >
            <span
              className="inline-flex h-2 w-2 rounded-full"
              style={{ background: work.theme.accent }}
            />
            <span>{work.tagline}</span>
          </div>

          {/* Company name + logo */}
          <div className="mt-3 flex items-end gap-4 sm:gap-5">
            {work.id === "stealth" ? (
              <div
                className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-white/5 sm:h-14 sm:w-14"
                style={{
                  borderColor: `${work.theme.accent}66`,
                  background: `linear-gradient(135deg, ${work.theme.accent}22 0%, ${work.theme.accent2}22 100%)`,
                }}
              >
                <span
                  className="font-display text-2xl font-bold sm:text-3xl"
                  style={{ color: work.theme.ink }}
                >
                  ?
                </span>
              </div>
            ) : (
              <div
                className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border bg-white/5 sm:h-14 sm:w-14"
                style={{ borderColor: `${work.theme.ink}22` }}
              >
                <Image
                  src={work.logoUrl}
                  alt={work.company}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
            )}
            <h2
              className="font-display tracking-tightest"
              style={{
                fontSize: "clamp(2.4rem, 7vw, 6rem)",
                lineHeight: 0.85,
                fontWeight: 600,
                color: work.theme.ink,
              }}
            >
              {work.company}
            </h2>
          </div>

          {/* meta line */}
          <div
            className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.25em] sm:text-[11px]"
            style={{ color: `${work.theme.ink}b0` }}
          >
            <span>{work.title}</span>
            <span style={{ color: `${work.theme.ink}40` }}>·</span>
            <span>{work.location}</span>
            <span style={{ color: `${work.theme.ink}40` }}>·</span>
            <span>
              {work.start} → {work.end}
            </span>
          </div>

          {/* description */}
          <p
            className="mt-4 max-w-[60ch] text-balance text-sm leading-relaxed sm:text-[15px]"
            style={{ color: `${work.theme.ink}c8` }}
          >
            {work.description}
          </p>

          {/* highlights */}
          <ul
            className="mt-5 grid gap-2 text-[13px] leading-snug sm:text-sm"
            style={{ color: `${work.theme.ink}cc` }}
          >
            {work.highlights.slice(0, 4).map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.06 }}
                className="flex items-start gap-3"
              >
                <span
                  className="mt-[7px] inline-block h-[2px] w-3 shrink-0"
                  style={{ background: work.theme.accent }}
                />
                <span>{h}</span>
              </motion.li>
            ))}
          </ul>

          {/* stack chips + visit link */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {work.stack.map((s) => (
              <StackChip key={s} tag={s} theme={work.theme} />
            ))}
            {work.href && work.href !== "#" ? (
              <Link
                href={work.href}
                target="_blank"
                rel="noreferrer"
                className="ml-1 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] transition hover:bg-white/5"
                style={{
                  color: work.theme.ink,
                  borderColor: `${work.theme.accent}77`,
                }}
              >
                Visit {work.company}
                <ArrowUpRightIcon className="size-3" />
              </Link>
            ) : (
              <span
                className="ml-1 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em]"
                style={{
                  color: `${work.theme.ink}aa`,
                  borderColor: `${work.theme.accent}55`,
                  background: `${work.theme.accent}10`,
                }}
              >
                <span
                  className="inline-block h-1.5 w-1.5 animate-pulse rounded-full"
                  style={{ background: work.theme.accent }}
                />
                More soon
              </span>
            )}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[6] h-32"
        style={{
          background: `linear-gradient(to top, ${work.theme.background} 0%, ${work.theme.background}cc 40%, transparent 100%)`,
        }}
      />
      <div
        className="pointer-events-none absolute bottom-5 right-6 z-[7] hidden font-mono text-[10px] uppercase tracking-[0.3em] sm:right-10 sm:block"
        style={{ color: `${work.theme.ink}55` }}
      >
        {work.id}.kashany
      </div>
    </section>
  );
}

function StackChip({ tag, theme }: { tag: string; theme: Theme }) {
  const { highlight, setHighlight } = useHighlight();
  const active = highlight === tag;
  return (
    <button
      type="button"
      onMouseEnter={() => setHighlight(tag)}
      onMouseLeave={() => setHighlight(null)}
      onFocus={() => setHighlight(tag)}
      onBlur={() => setHighlight(null)}
      className={cn(
        "rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] transition focus:outline-none"
      )}
      style={{
        borderColor: active ? `${theme.accent}cc` : `${theme.ink}22`,
        background: active ? `${theme.accent}1a` : "transparent",
        color: active ? theme.ink : `${theme.ink}b0`,
        boxShadow: active
          ? `0 0 0 1px ${theme.accent}55, 0 0 24px ${theme.glow}`
          : "none",
      }}
    >
      {tag}
    </button>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { DATA } from "@/data/resume";

export function ProjectsChapter() {
  const projects = DATA.projects;

  return (
    <section
      id="chapter-projects"
      data-chapter
      data-label="Projects"
      data-year="Side"
      className="relative min-h-svh w-full overflow-hidden snap-start bg-[#06070d]"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 20%, rgba(168,85,247,0.18) 0%, transparent 60%), radial-gradient(50% 40% at 10% 80%, rgba(34,211,238,0.14) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 grid-lines opacity-30" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 py-24 sm:px-12 lg:px-20">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50"
          >
            <span className="inline-block h-px w-10 bg-white/40" />
            <span>After hours</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-display tracking-tightest"
            style={{
              fontSize: "clamp(3rem, 9vw, 9rem)",
              lineHeight: 0.9,
              fontWeight: 600,
            }}
          >
            <span className="block italic text-white">Selected</span>
            <span className="block bg-gradient-to-r from-violet-300 via-pink-200 to-amber-200 bg-clip-text text-transparent">
              works.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl text-balance text-white/60 sm:text-lg"
          >
            Beyond the day job — projects worth shipping after hours.
            Volunteer work, small businesses, and the occasional weekend
            obsession.
          </motion.p>
        </div>

        {/* Project cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <Link
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md transition hover:border-white/25"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/45">
                        {p.dates}
                      </div>
                      <h3 className="mt-1 font-display text-2xl text-white">
                        {p.title}
                      </h3>
                    </div>
                    <ArrowUpRightIcon className="mt-1 size-5 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                  </div>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/65">
                    {p.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/55"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

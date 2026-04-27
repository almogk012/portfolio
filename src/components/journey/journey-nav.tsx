"use client";

import { cn } from "@/lib/utils";
import { startTransition, useEffect, useState } from "react";

type ChapterEntry = {
  id: string;
  label: string;
  year: string;
};

export function JourneyNav() {
  const [chapters, setChapters] = useState<ChapterEntry[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-chapter]")
    );

    startTransition(() => {
      setChapters(
        els.map((el) => ({
          id: el.id,
          label: el.dataset.label ?? el.id,
          year: el.dataset.year ?? "",
        }))
      );
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { threshold: [0.4, 0.6, 0.8] }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (chapters.length === 0) return null;

  return (
    <nav
      aria-label="Career timeline"
      className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="pointer-events-auto flex flex-col gap-3">
        {chapters.map((c) => {
          const active = c.id === activeId;
          return (
            <li key={c.id} className="group">
              <a
                href={`#${c.id}`}
                className="flex items-center justify-end gap-3"
              >
                <span
                  className={cn(
                    "font-mono text-[10px] uppercase tracking-[0.3em] transition",
                    active
                      ? "text-white"
                      : "text-white/0 group-hover:text-white/70"
                  )}
                >
                  <span className="mr-2 text-white/40">{c.year}</span>
                  {c.label}
                </span>
                <span
                  className={cn(
                    "block h-px transition-all duration-500",
                    active ? "w-10 bg-white" : "w-5 bg-white/30 group-hover:bg-white/70"
                  )}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

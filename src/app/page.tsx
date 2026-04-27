import { CompanyChapter } from "@/components/journey/company-chapter";
import { FinaleChapter } from "@/components/journey/finale-chapter";
import { HeroChapter } from "@/components/journey/hero-chapter";
import { HighlightProvider } from "@/components/journey/highlight-context";
import { JourneyNav } from "@/components/journey/journey-nav";
import { ProjectsChapter } from "@/components/journey/projects-chapter";
import { DATA } from "@/data/resume";

export default function Page() {
  const work = DATA.work;
  return (
    <HighlightProvider>
      <JourneyNav />
      <main className="relative w-full">
        <HeroChapter />
        {work.map((w, i) => (
          <CompanyChapter key={w.id} work={w} index={i} total={work.length} />
        ))}
        <ProjectsChapter />
        <FinaleChapter />
      </main>
    </HighlightProvider>
  );
}

import { RevealOnScroll } from "@/components/RevealOnScroll"
import { SectionHeader } from "@/components/ui/section-header"
import { Container } from "@/components/ui/container"
import { Tag } from "@/components/ui/tag"
import Mockup from "@/assets/Mockup.png"

const EXPERIENCES = [
  {
    id: 1,
    company: "PT Mobilitas Digital Indonesia (MODA)",
    role: "Fullstack Developer — Contract",
    period: "Sep 2026 – Present",
    achievements: [
      "Designed and developed a web-based logistics scheduling system to manage daily truck arrivals to suppliers and final destinations, including load volume management and workload balancing across work shifts.",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Git", "Koa", "Postman"],
  },
  {
    id: 2,
    company: "HUMIC Engineering Research Center",
    role: "Frontend Web Developer — Intern",
    period: "Sep 2024 – Jan 2025",
    achievements: [
      "Implemented the user interface of an online consultation application (menus, navigation, and page layouts) from UI team designs into responsive web components using Next.js.",
      "Implemented UI/UX designs into a responsive and interactive website using Next.js and React.",
      "Collaborated across teams (design & backend) in the review and testing process to ensure visual consistency and user interface quality.",
    ],
    tech: ["React", "TypeScript", "CSS3", "Next.js", "Git"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-16 md:py-24">
      <Container>
        <RevealOnScroll>
          <SectionHeader eyebrow="Experience" title="Work Experience" />
        </RevealOnScroll>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-8 border-l border-border pl-6">
            {EXPERIENCES.map((exp) => (
              <RevealOnScroll key={exp.id}>
                <div className="relative">
                  <span className="absolute -left-[1.85rem] top-1.5 size-2.5 rounded-full bg-accent" />
                  <h3 className="text-base font-semibold text-foreground">{exp.company}</h3>
                  <p className="font-mono text-xs text-muted-foreground">
                    {exp.role} · {exp.period}
                  </p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {exp.achievements.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delayMs={100} strong>
            <figure className="border border-border bg-card p-3">
              <img
                src={Mockup}
                alt="Consulife platform interface preview"
                width={960}
                height={600}
                loading="lazy"
                className="w-full"
              />
              <figcaption className="mt-3 text-sm text-muted-foreground">
                Consulife — a consultation platform built with React and TypeScript.
              </figcaption>
            </figure>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  )
}

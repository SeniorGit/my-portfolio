import { RevealOnScroll } from "@/components/RevealOnScroll"
import { Parallax } from "@/components/Parallax"
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
    <section id="experience" className="border-t border-border py-section">
      <Container>
        <SectionHeader index="03" eyebrow="Experience" title="Work Experience" />

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {EXPERIENCES.map((exp) => (
              <RevealOnScroll key={exp.id}>
                <article className="grid gap-4 border-t border-border py-10 first:border-t-0 first:pt-0 md:grid-cols-[10rem_1fr] md:gap-8">
                  <p className="label pt-1.5">{exp.period}</p>
                  <div>
                    <h3 className="font-display text-3xl text-foreground">{exp.company}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{exp.role}</p>
                    <ul className="mt-5 space-y-3 text-muted-foreground">
                      {exp.achievements.map((a) => (
                        <li key={a} className="flex gap-3">
                          <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-foreground" />
                          {a}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>

          <div className="lg:col-span-5">
            <RevealOnScroll strong>
              <figure>
                <Parallax distance={16}>
                  <div className="theme-surface rounded-sm border border-border bg-card p-3">
                    <img
                      src={Mockup}
                      alt="Consulife platform interface preview"
                      width={960}
                      height={600}
                      loading="lazy"
                      className="w-full"
                    />
                  </div>
                </Parallax>
                <figcaption className="mt-4 text-sm text-muted-foreground">
                  Consulife — a consultation platform built with React and TypeScript.
                </figcaption>
              </figure>
            </RevealOnScroll>
          </div>
        </div>
      </Container>
    </section>
  )
}

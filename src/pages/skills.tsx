import {
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiPostgresql,
  SiKoa,
  SiTypescript,
  SiMysql,
  SiPostman,
  SiGit,
} from "react-icons/si"
import { RevealOnScroll } from "@/components/RevealOnScroll"
import { SectionHeader } from "@/components/ui/section-header"
import { Container } from "@/components/ui/container"

const SKILLS = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Koa", icon: SiKoa },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Postman", icon: SiPostman },
  { name: "Git", icon: SiGit },
]

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-16 md:py-24">
      <Container>
        <RevealOnScroll>
          <SectionHeader eyebrow="Skills" title="Technical Skills" />
        </RevealOnScroll>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {SKILLS.map(({ name, icon: Icon }, i) => (
            <RevealOnScroll key={name} delayMs={i * 40}>
              <div className="flex items-center gap-3 border border-border bg-card p-4">
                <Icon className="size-5 text-accent" aria-hidden="true" />
                <span className="text-sm text-foreground">{name}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}

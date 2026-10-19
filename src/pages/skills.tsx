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
import { DrawLine } from "@/components/DrawLine"
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
    <section id="skills" className="border-t border-border py-section">
      <Container>
        <SectionHeader index="02" eyebrow="Skills" title="Technical Skills" />
        <ul className="border-t border-border">
          {SKILLS.map(({ name, icon: Icon }, i) => (
            <li key={name}>
              <RevealOnScroll delayMs={i % 3 * 60}>
                <div
                  data-cursor
                  className="theme-surface group flex items-center gap-6 py-5 transition-colors duration-300 hover:bg-accent"
                >
                  <span className="label w-8">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-3xl text-foreground transition-transform duration-500 ease-out group-hover:translate-x-4 md:text-5xl">{name}</span>
                  <Icon className="ml-auto size-6 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" aria-hidden="true" />
                </div>
              </RevealOnScroll>
              <DrawLine />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

import { RevealOnScroll } from "@/components/RevealOnScroll"
import { ScrubText } from "@/components/ScrubText"
import { SectionHeader } from "@/components/ui/section-header"
import { Container } from "@/components/ui/container"

export function About() {
  return (
    <section id="about" className="border-t border-border py-section">
      <Container>
        <SectionHeader index="01" eyebrow="About" title="Background" />
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7 md:col-start-6">
            <ScrubText
              className="text-lead text-foreground"
              text="I am a fresh graduate from Computer Science at Telkom University, with a strong interest in fullstack web development, particularly using *Next.js* and *Node.js*. I built the Consulife website during the Work Ready Program and interned at CoE Humic Telkom University."
            />
          </div>
          <RevealOnScroll delayMs={120} className="space-y-5 text-muted-foreground md:col-span-7 md:col-start-6">
            <p>
              In those projects, I turned UI designs into responsive,
              production-ready websites. I now work as a fullstack developer
              at MODA, building a logistics scheduling system with React,
              Koa, and PostgreSQL.
            </p>
            <p>
              Outside of work I build personal projects, like a task manager
              backed by a Node.js API and PostgreSQL, to go deeper on REST
              API integration and database fundamentals. This portfolio is
              built with React and TypeScript.
            </p>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  )
}

import { RevealOnScroll } from "@/components/RevealOnScroll"
import { SectionHeader } from "@/components/ui/section-header"
import { Container } from "@/components/ui/container"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <Container>
        <RevealOnScroll>
          <SectionHeader eyebrow="About" title="Background" />
        </RevealOnScroll>
        <RevealOnScroll delayMs={80}>
          <div className="max-w-2xl space-y-4 text-foreground">
            <p>
              I am a fresh graduate from Informatics Engineering at Telkom
              University, with a strong interest in fullstack web
              development, particularly using{" "}
              <span className="font-medium">Next.js</span> and{" "}
              <span className="font-medium">Node.js</span>. I built the
              Consulife website during the Work Ready Program and interned at
              CoE Humic Telkom University.
            </p>
            <p>
              In those projects, I turned UI designs into responsive,
              production-ready websites. I also built this portfolio with
              React and TypeScript.
            </p>
            <p>
              I enjoy learning and improving, particularly in REST API
              integration and database fundamentals, and work on personal
              projects in my free time to sharpen those skills.
            </p>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  )
}

import { Link } from "react-router-dom"
import { RevealOnScroll } from "@/components/RevealOnScroll"
import { SectionHeader } from "@/components/ui/section-header"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/ProjectCard"
import { practiceProjects } from "@/lib/projects"

export function PracticeProjects() {
  return (
    <section className="border-t border-border py-section">
      <Container>
        <SectionHeader
          index="05"
          eyebrow="Practice"
          title="Practice & Fundamentals"
          description="Smaller exercises used to learn core web fundamentals."
        />
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {practiceProjects.map((project, i) => (
            <RevealOnScroll key={project.id} delayMs={(i % 3) * 80}>
              <ProjectCard project={project} variant="practice" />
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll className="mt-16 flex justify-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/project">Explore all projects →</Link>
          </Button>
        </RevealOnScroll>
      </Container>
    </section>
  )
}

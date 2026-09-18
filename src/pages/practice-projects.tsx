import { Link } from "react-router-dom"
import { RevealOnScroll } from "@/components/RevealOnScroll"
import { SectionHeader } from "@/components/ui/section-header"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/ProjectCard"
import { practiceProjects } from "@/lib/projects"

export function PracticeProjects() {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <Container>
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Practice"
            title="Practice & Fundamentals"
            description="Smaller exercises used to learn core web fundamentals."
          />
        </RevealOnScroll>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practiceProjects.map((project, i) => (
            <RevealOnScroll key={project.id} delayMs={i * 60}>
              <ProjectCard project={project} variant="practice" />
            </RevealOnScroll>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button variant="outline" asChild>
            <Link to="/project">Explore all projects →</Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}

import { RevealOnScroll } from "@/components/RevealOnScroll"
import { SectionHeader } from "@/components/ui/section-header"
import { Container } from "@/components/ui/container"
import { ProjectCard } from "@/components/ProjectCard"
import { featuredProjects } from "@/lib/projects"

export function FeaturedProjects() {
  return (
    <section id="projects" className="border-t border-border py-16 md:py-24">
      <Container>
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Projects"
            title="Featured Projects"
            description="Production and full-stack work that best shows how I build."
          />
        </RevealOnScroll>
        <div className="space-y-8">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} variant="featured" revealDelay={i * 150} />
          ))}
        </div>
      </Container>
    </section>
  )
}

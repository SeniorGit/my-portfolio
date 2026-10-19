import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { ProjectCard } from "@/components/ProjectCard"
import { featuredProjects } from "@/lib/projects"

export function FeaturedProjects() {
  return (
    <section id="projects" className="border-t border-border py-section">
      <Container>
        <SectionHeader
          index="04"
          eyebrow="Projects"
          title="Featured Projects"
          description="Production and full-stack work that best shows how I build."
        />
        <div className="space-y-16 md:space-y-24">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} variant="featured" index={i + 1} />
          ))}
        </div>
      </Container>
    </section>
  )
}

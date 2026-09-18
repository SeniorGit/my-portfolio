import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/ProjectCard"
import { Container } from "@/components/ui/container"
import { featuredProjects, practiceProjects } from "@/lib/projects"

export default function AllProjects() {
  return (
    <div>
      <header className="border-b border-border py-6">
        <Container>
          <Button variant="outline" asChild>
            <Link to="/">← Back to Home</Link>
          </Button>
        </Container>
      </header>

      <main className="py-16">
        <Container>
          <h1 className="text-[clamp(1.75rem,3vw+1rem,2.5rem)] font-bold text-foreground">
            All Projects
          </h1>

          <section className="mt-12" aria-labelledby="featured-heading">
            <h2 id="featured-heading" className="mb-6 text-xl font-semibold text-foreground">
              Featured
            </h2>
            <div className="space-y-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} variant="featured" />
              ))}
            </div>
          </section>

          <section className="mt-16" aria-labelledby="practice-heading">
            <h2 id="practice-heading" className="mb-6 text-xl font-semibold text-foreground">
              Practice & Fundamentals
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {practiceProjects.map((project) => (
                <ProjectCard key={project.id} project={project} variant="practice" />
              ))}
            </div>
          </section>
        </Container>
      </main>
    </div>
  )
}

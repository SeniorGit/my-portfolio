import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/ProjectCard"
import { Container } from "@/components/ui/container"
import { SplitHeading } from "@/components/SplitHeading"
import { ThemeToggle } from "@/components/ThemeToggle"
import { featuredProjects, practiceProjects } from "@/lib/projects"

export default function AllProjects() {
  return (
    <div className="page-in">
      <header className="theme-surface border-b border-border py-4">
        <Container className="flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link to="/">← Back to Home</Link>
          </Button>
          <ThemeToggle />
        </Container>
      </header>

      <main id="main" className="py-section">
        <Container>
          <SplitHeading as="h1" text="All Projects" immediate className="font-display text-display text-foreground" />

          <section className="mt-20" aria-labelledby="featured-heading">
            <h2 id="featured-heading" className="label mb-10">
              Featured
            </h2>
            <div className="space-y-16 md:space-y-24">
              {featuredProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} variant="featured" index={i + 1} />
              ))}
            </div>
          </section>

          <section className="mt-28" aria-labelledby="practice-heading">
            <h2 id="practice-heading" className="label mb-10">
              Practice &amp; Fundamentals
            </h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
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

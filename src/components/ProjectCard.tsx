import { FiExternalLink, FiGithub } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { Tag } from "@/components/ui/tag"
import { RevealOnScroll } from "@/components/RevealOnScroll"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
  variant: "featured" | "practice"
  /** Stagger delay (ms) for the featured variant's own scroll-reveal, so cards can cascade in from a parent list. */
  revealDelay?: number
}

export function ProjectCard({ project, variant, revealDelay = 0 }: ProjectCardProps) {
  if (variant === "practice") {
    return (
      <div className="flex flex-col overflow-hidden border border-border bg-card transition-shadow duration-200 hover:shadow-md">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          width={640}
          height={400}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover"
        />
        <div className="flex flex-1 flex-col gap-3 p-4">
          <div>
            <h3 className="text-base font-semibold text-foreground">{project.title}</h3>
            <p className="font-mono text-xs text-muted-foreground">{project.subtitle}</p>
          </div>
          <p className="text-sm text-muted-foreground">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <div className="mt-auto flex gap-2 pt-2">
            {project.liveUrl && (
              <Button size="sm" variant="outline" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink className="size-3.5" /> Live
                </a>
              </Button>
            )}
            {project.sourceUrl && (
              <Button size="sm" variant="ghost" asChild>
                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                  <FiGithub className="size-3.5" /> Source
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <article className="grid gap-8 border border-border bg-card p-6 md:grid-cols-2 md:p-10">
      <RevealOnScroll delayMs={revealDelay} strong>
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          width={800}
          height={500}
          loading="lazy"
          className="aspect-[16/10] w-full border border-border object-cover"
        />
      </RevealOnScroll>
      <RevealOnScroll delayMs={revealDelay + 100} className="flex flex-col gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-accent">{project.subtitle}</p>
          <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
        </div>
        {project.problem && (
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wide text-muted-foreground">Problem</h4>
            <p className="text-sm text-foreground">{project.problem}</p>
          </div>
        )}
        {project.solution && (
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wide text-muted-foreground">Solution</h4>
            <p className="text-sm text-foreground">{project.solution}</p>
          </div>
        )}
        {project.decision && (
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wide text-muted-foreground">Key decision</h4>
            <p className="text-sm text-foreground">{project.decision}</p>
          </div>
        )}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className="flex gap-2 pt-2">
          {project.liveUrl && (
            <Button variant="outline" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <FiExternalLink className="size-4" /> Live Demo
              </a>
            </Button>
          )}
          {project.sourceUrl && (
            <Button variant="ghost" asChild>
              <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                <FiGithub className="size-4" /> Source
              </a>
            </Button>
          )}
        </div>
      </RevealOnScroll>
    </article>
  )
}

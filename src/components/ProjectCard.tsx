import { FiExternalLink, FiGithub } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { Tag } from "@/components/ui/tag"
import { RevealOnScroll } from "@/components/RevealOnScroll"
import { Parallax } from "@/components/Parallax"
import { DrawLine } from "@/components/DrawLine"
import { ImageCurtain } from "@/components/ImageCurtain"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
  variant: "featured" | "practice"
  /** 1-based position, shown as a numeral on featured cards. */
  index?: number
}

function ProjectLinks({ project, size }: { project: Project; size: "default" | "sm" }) {
  const icon = size === "sm" ? "size-3.5" : "size-4"
  return (
    <>
      {project.liveUrl && (
        <Button size={size} variant="outline" asChild>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <FiExternalLink className={icon} /> {size === "sm" ? "Live" : "Live Demo"}
          </a>
        </Button>
      )}
      {project.sourceUrl && (
        <Button size={size} variant="ghost" asChild>
          <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
            <FiGithub className={icon} /> Source
          </a>
        </Button>
      )}
    </>
  )
}

export function ProjectCard({ project, variant, index }: ProjectCardProps) {
  if (variant === "practice") {
    return (
      <article className="group flex h-full flex-col border-t border-border pt-5">
        <div className="overflow-hidden rounded-sm border border-border">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            width={640}
            height={400}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
        <div className="mt-5 flex flex-1 flex-col gap-3">
          <div>
            <h3 className="font-display text-2xl text-foreground">{project.title}</h3>
            <p className="label mt-1">{project.subtitle}</p>
          </div>
          <p className="text-sm text-muted-foreground">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <div className="mt-auto flex gap-2 pt-2">
            <ProjectLinks project={project} size="sm" />
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="group grid gap-8 lg:grid-cols-12 lg:gap-12">
      <DrawLine className="lg:col-span-12" />
      <div className="lg:col-span-7">
        <ImageCurtain className="rounded-sm border border-border">
          <Parallax distance={14}>
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              width={800}
              height={500}
              loading="lazy"
              className="aspect-[16/10] w-full scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </Parallax>
        </ImageCurtain>
      </div>
      <RevealOnScroll delayMs={100} className="flex flex-col gap-5 lg:col-span-5">
        <div>
          <p className="label flex items-center gap-3">
            <span className="text-foreground">{String(index ?? 1).padStart(2, "0")}</span>
            <span aria-hidden="true" className="h-px w-8 bg-border" />
            <span>{project.subtitle}</span>
          </p>
          <h3 className="mt-4 font-display text-4xl text-foreground md:text-5xl">{project.title}</h3>
        </div>
        {project.problem && (
          <div>
            <h4 className="label">Problem</h4>
            <p className="mt-1 text-foreground">{project.problem}</p>
          </div>
        )}
        {project.solution && (
          <div>
            <h4 className="label">Solution</h4>
            <p className="mt-1 text-foreground">{project.solution}</p>
          </div>
        )}
        {project.decision && (
          <div>
            <h4 className="label">Key decision</h4>
            <p className="mt-1 text-foreground">{project.decision}</p>
          </div>
        )}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className="flex gap-2 pt-2">
          <ProjectLinks project={project} size="default" />
        </div>
      </RevealOnScroll>
    </article>
  )
}

interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-2xl md:mb-14">
      <p className="font-mono text-xs uppercase tracking-wide text-accent">{eyebrow}</p>
      <h2 className="mt-2 text-[clamp(1.5rem,2.5vw+1rem,2.25rem)] font-semibold text-foreground">
        {title}
      </h2>
      {description && <p className="mt-3 text-muted-foreground">{description}</p>}
    </div>
  )
}

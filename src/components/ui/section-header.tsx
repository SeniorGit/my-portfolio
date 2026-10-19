import { SplitHeading } from "@/components/SplitHeading"
import { RevealOnScroll } from "@/components/RevealOnScroll"

interface SectionHeaderProps {
  /** Section number, e.g. "01". */
  index: string
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeader({ index, eyebrow, title, description }: SectionHeaderProps) {
  return (
    <header className="mb-12 md:mb-20">
      <RevealOnScroll>
        <p className="label flex items-center gap-3">
          <span className="text-foreground">{index}</span>
          <span aria-hidden="true" className="h-px w-10 bg-border" />
          <span>{eyebrow}</span>
        </p>
      </RevealOnScroll>
      <SplitHeading text={title} className="mt-6 max-w-4xl font-display text-title text-foreground" />
      {description && (
        <RevealOnScroll delayMs={150}>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{description}</p>
        </RevealOnScroll>
      )}
    </header>
  )
}

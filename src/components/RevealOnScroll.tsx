import type { ReactNode } from "react"
import { useReveal } from "@/hooks/useReveal"
import { cn } from "@/lib/utils"

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  delayMs?: number
  /** Bigger slide-up distance + slight scale-in, for elements that should feel more eye-catching (e.g. project mockup images). */
  strong?: boolean
}

export function RevealOnScroll({ children, className, delayMs = 0, strong = false }: RevealOnScrollProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out motion-reduce:transition-none motion-reduce:transform-none",
        strong ? "duration-700" : "duration-500",
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : strong
            ? "opacity-0 translate-y-10 scale-95"
            : "opacity-0 translate-y-3",
        className
      )}
      style={{ transitionDelay: isVisible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  )
}

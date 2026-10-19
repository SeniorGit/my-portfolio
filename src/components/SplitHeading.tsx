import { useLayoutEffect, useRef } from "react"
import type { ElementType } from "react"
import { gsap, revealOnce, EASE_OUT, DUR, prefersReducedMotion } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface SplitHeadingProps {
  text: string
  as?: ElementType
  className?: string
  /** Seconds before the first word starts (use for above-the-fold headings). */
  delay?: number
  /** Play immediately on mount instead of waiting for scroll. */
  immediate?: boolean
}

/** Heading whose words slide up out of a mask, staggered. Screen readers get the plain text. */
export function SplitHeading({ text, as: Tag = "h2", className, delay = 0, immediate = false }: SplitHeadingProps) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    const words = el.querySelectorAll("[data-word]")
    const play = () =>
      gsap.to(words, { yPercent: 0, duration: DUR.slow + 0.2, stagger: 0.06, delay, ease: EASE_OUT })
    const ctx = gsap.context(() => {
      gsap.set(words, { yPercent: 110 })
    })
    const stop = immediate ? (ctx.add(play), () => {}) : revealOnce(el, () => ctx.add(play))
    return () => {
      stop()
      ctx.revert()
    }
  }, [delay, immediate])

  return (
    <Tag ref={ref} aria-label={text} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <span data-word className={cn("inline-block will-change-transform")}>
            {word}
          </span>
          {" "}
        </span>
      ))}
    </Tag>
  )
}

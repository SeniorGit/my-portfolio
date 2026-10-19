import { useLayoutEffect, useRef } from "react"
import type { ReactNode } from "react"
import { gsap, revealOnce, EASE_OUT, DUR, prefersReducedMotion } from "@/lib/motion"

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  /** Stagger delay in ms. */
  delayMs?: number
  /** Larger travel for hero-weight elements such as project imagery. */
  strong?: boolean
}

/** Fade + rise on enter. Animates opacity/transform only. */
export function RevealOnScroll({ children, className, delayMs = 0, strong = false }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.set(el, { opacity: 0, y: strong ? 56 : 24 })
    })
    const stop = revealOnce(el, () =>
      ctx.add(() => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: strong ? DUR.slow + 0.2 : DUR.slow,
          delay: delayMs / 1000,
          ease: EASE_OUT,
        })
      })
    )
    return () => {
      stop()
      ctx.revert()
    }
  }, [delayMs, strong])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

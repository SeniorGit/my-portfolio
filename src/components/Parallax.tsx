import { useLayoutEffect, useRef } from "react"
import type { ReactNode } from "react"
import { gsap, prefersReducedMotion } from "@/lib/motion"

interface ParallaxProps {
  children: ReactNode
  className?: string
  /** Travel in px across the element's pass through the viewport (±). Keep small: it's subtle by design. */
  distance?: number
}

/** Scroll-scrubbed vertical drift (transform only). */
export function Parallax({ children, className, distance = 40 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    // Parallax is a desktop nicety; skip it on small screens to keep scroll cheap.
    if (!el || prefersReducedMotion() || !window.matchMedia("(min-width: 768px)").matches) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: -distance },
        { y: distance, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } }
      )
    })
    return () => ctx.revert()
  }, [distance])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

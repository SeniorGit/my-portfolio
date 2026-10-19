import { useLayoutEffect, useRef } from "react"
import type { ReactNode } from "react"
import { gsap, revealOnce, prefersReducedMotion } from "@/lib/motion"
import { cn } from "@/lib/utils"

/** Image reveal: a background-colored curtain lifts while the content settles from a slight zoom. */
export function ImageCurtain({ children, className }: { children: ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null)
  const curtain = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return
    if (prefersReducedMotion()) {
      if (curtain.current) curtain.current.style.display = "none"
      return
    }
    const ctx = gsap.context(() => {
      gsap.set(inner.current, { scale: 1.18 })
    })
    const stop = revealOnce(el, () =>
      ctx.add(() => {
        gsap
          .timeline()
          .to(curtain.current, { scaleY: 0, transformOrigin: "top", duration: 1.1, ease: "power4.inOut" })
          .to(inner.current, { scale: 1, duration: 1.4, ease: "expo.out" }, 0)
      })
    )
    return () => {
      stop()
      ctx.revert()
    }
  }, [])

  return (
    <div ref={root} className={cn("relative overflow-hidden", className)}>
      <div ref={inner}>{children}</div>
      <div ref={curtain} aria-hidden="true" className="absolute inset-0 z-10 bg-background" />
    </div>
  )
}

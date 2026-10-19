import { useLayoutEffect, useRef } from "react"
import { gsap, revealOnce, prefersReducedMotion } from "@/lib/motion"
import { cn } from "@/lib/utils"

/** Hairline that draws itself left to right when it enters the viewport (scaleX only). */
export function DrawLine({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.set(el, { scaleX: 0, transformOrigin: "left center" })
    })
    const stop = revealOnce(el, () =>
      ctx.add(() => {
        gsap.to(el, { scaleX: 1, duration: 1.2, ease: "expo.out" })
      })
    )
    return () => {
      stop()
      ctx.revert()
    }
  }, [])

  return <div ref={ref} aria-hidden="true" className={cn("h-px w-full bg-border", className)} />
}

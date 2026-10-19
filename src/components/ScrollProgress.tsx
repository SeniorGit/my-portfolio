import { useLayoutEffect, useRef } from "react"
import { gsap, prefersReducedMotion } from "@/lib/motion"

/** 2px page-progress line under the navbar, driven by scroll (scaleX only). */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) {
      el.style.display = "none"
      return
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: document.documentElement, start: "top top", end: "bottom bottom", scrub: 0.2 },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return <div ref={ref} aria-hidden="true" className="fixed inset-x-0 top-16 z-[60] h-[2px] origin-left bg-foreground" />
}

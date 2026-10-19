import { useLayoutEffect, useRef } from "react"
import { gsap, prefersReducedMotion } from "@/lib/motion"

interface ScrubTextProps {
  /** Plain text. Wrap a phrase in *asterisks* to set it in the display italic. */
  text: string
  className?: string
}

/** Words light up one by one as the paragraph scrolls through the viewport (opacity only, scrubbed). */
export function ScrubText({ text, className }: ScrubTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll("[data-w]"),
        { opacity: 0.6 }, // floor keeps unlit words above WCAG AA contrast in both themes
        {
          opacity: 1,
          ease: "none",
          stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 50%", scrub: true },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <p ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i}>
          <span data-w>
            {word.split(/(\*[^*]+\*)/).map((seg, j) =>
              seg.startsWith("*") ? (
                <em key={j} className="font-display">
                  {seg.slice(1, -1)}
                </em>
              ) : (
                seg
              )
            )}
          </span>{" "}
        </span>
      ))}
    </p>
  )
}

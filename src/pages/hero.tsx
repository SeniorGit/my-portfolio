import { useLayoutEffect, useRef } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { RevealOnScroll } from "@/components/RevealOnScroll"
import { SplitHeading } from "@/components/SplitHeading"
import { SocialLink } from "@/components/SocialLink"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { gsap, prefersReducedMotion } from "@/lib/motion"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Section transition: hero content drifts up and fades as the next section arrives.
  useLayoutEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content || prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.to(content, {
        y: -80,
        opacity: 0.15,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="pb-section pt-16 md:pt-28">
      <Container>
        <div ref={contentRef}>
          <RevealOnScroll>
            <p className="label">Fullstack Developer</p>
          </RevealOnScroll>

          <SplitHeading
            as="h1"
            text="Alfito Nur Fadhila"
            immediate
            delay={0.15}
            className="mt-6 font-display text-display text-foreground"
          />

          <div className="mt-12 md:mt-20">
            <p className="max-w-2xl text-lead text-foreground">
              Fresh graduate in Computer Science building production
              React/TypeScript and Node.js applications — from a live
              consultation platform to self-directed full-stack projects.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contact</a>
              </Button>
            </div>
            <div className="mt-8 flex gap-3">
              <SocialLink href="https://github.com/SeniorGit" label="GitHub" icon={FaGithub} />
              <SocialLink
                href="https://www.linkedin.com/in/alfitofadhil-dev/"
                label="LinkedIn"
                icon={FaLinkedin}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

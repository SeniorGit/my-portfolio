import { FaGithub, FaLinkedin } from "react-icons/fa"
import { RevealOnScroll } from "@/components/RevealOnScroll"
import { SocialLink } from "@/components/SocialLink"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import ProfilePhoto from "@/assets/AlfitoNF.JPG"

export function Hero() {
  return (
    <section id="hero" className="py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
          <RevealOnScroll delayMs={100} className="order-1 flex justify-center md:order-2">
            <img
              src={ProfilePhoto}
              alt="Alfito Nur Fadhila"
              width={280}
              height={280}
              loading="eager"
              fetchPriority="high"
              className="size-[220px] rounded-full border border-border object-cover md:size-[280px]"
            />
          </RevealOnScroll>

          <RevealOnScroll className="order-2 md:order-1">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-accent">
                Fullstack Developer
              </p>
              <h1 className="mt-3 text-[clamp(2.25rem,4vw+1rem,3.75rem)] font-bold leading-tight text-foreground">
                Alfito Nur Fadhila
              </h1>
              <p className="mt-4 max-w-xl text-lg text-muted-foreground">
                Fresh graduate in Informatics Engineering building production
                React/TypeScript and Node.js applications — from a live
                consultation platform to self-directed full-stack projects.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
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
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  )
}

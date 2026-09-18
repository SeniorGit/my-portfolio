import { FiMail } from "react-icons/fi"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { RevealOnScroll } from "@/components/RevealOnScroll"
import { SectionHeader } from "@/components/ui/section-header"
import { Container } from "@/components/ui/container"
import { SocialLink } from "@/components/SocialLink"
import { Button } from "@/components/ui/button"

const EMAIL = "alfitofadhil73@gmail.com"

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-16 md:py-24">
      <Container>
        <RevealOnScroll>
          <SectionHeader
            eyebrow="Contact"
            title="Get in Touch"
            description="Open to frontend/fullstack opportunities — feel free to reach out."
          />
        </RevealOnScroll>
        <RevealOnScroll delayMs={80}>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <a href={`mailto:${EMAIL}`}>
                <FiMail className="size-4" /> {EMAIL}
              </a>
            </Button>
            <div className="flex gap-3">
              <SocialLink href="https://github.com/SeniorGit" label="GitHub" icon={FaGithub} />
              <SocialLink
                href="https://www.linkedin.com/in/alfitofadhil-dev/"
                label="LinkedIn"
                icon={FaLinkedin}
              />
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  )
}

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SocialLink } from "@/components/SocialLink"
import { Container } from "@/components/ui/container"

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Alfito Nur Fadhila
        </p>
        <div className="flex gap-3">
          <SocialLink href="https://github.com/SeniorGit" label="GitHub" icon={FaGithub} />
          <SocialLink href="https://www.linkedin.com/in/alfitofadhil-dev/" label="LinkedIn" icon={FaLinkedin} />
        </div>
      </Container>
    </footer>
  )
}

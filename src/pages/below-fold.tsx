import { useEffect } from "react"
import { About } from "./about"
import { Skills } from "./skills"
import { Experience } from "./experience"
import { FeaturedProjects } from "./featured-projects"
import { PracticeProjects } from "./practice-projects"
import { Contact } from "./contact"

/** Everything under the hero, split into its own chunk so first paint doesn't parse it. */
export default function BelowFold({ onReady }: { onReady: () => void }) {
  useEffect(onReady, [onReady])
  return (
    <>
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <PracticeProjects />
      <Contact />
    </>
  )
}

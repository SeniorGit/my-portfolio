import { Navbar } from "@/components/navBar"
import { Hero } from "./hero"
import { About } from "./about"
import { Skills } from "./skills"
import { Experience } from "./experience"
import { FeaturedProjects } from "./featured-projects"
import { PracticeProjects } from "./practice-projects"
import { Contact } from "./contact"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <FeaturedProjects />
        <PracticeProjects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

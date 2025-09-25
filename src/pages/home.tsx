// Home.jsx
import { Navbar } from '../components/navBar'
import { Name } from './name'
import { Aboutme } from './aboutMe'
import { Experience } from './experience'
import Project from './project'


export default function Home() {
  return (
    <>
      <Navbar />
      <Name />
      <Aboutme />
      <Experience />
      <Project />
    </>
  )
}

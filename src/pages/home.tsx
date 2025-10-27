
import { Navbar } from '../components/navBar'
import { Name } from './name'
import { Aboutme } from './aboutMe'
import { Experience } from './experience'
import { ProjectList } from './projectlist'


export default function Home() {
  return (
    <>
      <Navbar />
      <Name />
      <Aboutme />
      <Experience />
      <ProjectList/>
    </>
  )
}

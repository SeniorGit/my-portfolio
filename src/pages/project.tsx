import "../styles/project.css"
import "../App.css"
import { Link } from "react-router-dom"
import { CardSwapper } from "@/components/projectCard"



export default function Project(){
    return(
        <div className="project" id="projects">
            <div  className="container container-project">
                <div className="project-header">
                    <h1>Project</h1>
                    <span className="project-subtitle">A showcase of my recent work and accomplishments</span>
                </div>
                    <CardSwapper/>
                <div className="project-seemore">
                    <Link to={"/project"}>
                        <button className="see-more-btn" >
                            See More Projects
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
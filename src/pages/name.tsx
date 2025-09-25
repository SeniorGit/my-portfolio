import "../styles/name.css"
import "../App.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"
export function Name(){
    return(
        <div className="name">
            <div className="container container-name">
                <div className="imgProfile"></div>
                <div className="text-content">
                    <h1>Alfito Nur Fadhila</h1>
                   <p>Fresh graduate computer scientist, specializing in frontend and backend development</p>
                </div>
                <div className="social-links">
                    <div>
                        <a 
                            href="https://github.com/SeniorGit"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit my LinkedIn profile"
                        >
                            <FaGithub size={45}/>
                        </a>
                    </div>
                    <div>
                        <a 
                            href="https://www.linkedin.com/in/alfitofadhil/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit my LinkedIn profile"
                        >
                            <FaLinkedin size={45}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
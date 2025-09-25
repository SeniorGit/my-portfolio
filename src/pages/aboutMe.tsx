import "../styles/aboutme.css"
import { 
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiNextdotjs,
    SiPostgresql,
    SiExpress
 } from "react-icons/si"
import "../App.css"
export function Aboutme(){
    return(
        <div className="aboutme" id="about">
            <div   className="container container-about">
                <div className="text">
                    <h1>About Me</h1>
                    <p>
                        I am a fresh graduate from Informatics Engineering at Telkom University, with a strong interest in web development, particularly using Angular and Next.js. I have experience in developing the Consulife website during the Work Ready Program and also interned at CoE Humic Telkom University.
                    </p>
                    <p>
                        In these projects, I was responsible for implementing UI designs into responsive, production-ready websites. Additionally, I have developed this personal portfolio website using Angular.
                    </p>
                    <p>
                        I am someone who enjoys learning new things and continuously improving my skills, especially in REST API integration and database fundamentals. In my free time, I actively work on personal projects to enhance my technical abilities.
                    </p>
                </div>
                <div className="skills">
                    <h2>Technical Skills</h2>
                    <div className="skills-grid">
                        <div className="skill-item">
                            <SiJavascript size={30}/>
                            <span>Javascript</span>
                        </div>
                        <div className="skill-item">
                            <SiReact size={30} />
                            <span>React</span>
                        </div>
                        <div className="skill-item">
                            <SiNodedotjs size={30} />
                            <span>Node.js</span>
                        </div>
                        <div className="skill-item">
                            <SiNextdotjs size={30} />
                            <span>Next.js</span>
                        </div>
                        <div className="skill-item">
                            <SiPostgresql size={30} />
                            <span>SQL</span>
                        </div>
                        <div className="skill-item">
                            <SiExpress size={30} />
                            <span>REST API</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
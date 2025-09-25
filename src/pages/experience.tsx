import "../styles/experience.css"
import "../App.css"
export function Experience(){
    return(
        <div className="expe" id="experience">
            <div  className="container container-experience">
                <div className="ExperienceText">
                   <h1>Experience</h1>
                    <p>I recently completed an internship at <span>CoE Humic</span> to redesign and rebuild the consultation website, <span>Consulife</span>.</p>
                    <p>My responsibility was to implement the user interface designs provided by the design team into a fully functional, responsive, and visually appealing web application.</p>
                    
                    <h3 className="achievements-title">Key Achievements:</h3>
                    <ul className="achievements">
                        <li>Transformed UI designs into responsive web pages</li>
                        <li>Ensured cross-browser compatibility</li>
                        <li>Collaborated with design team to implement pixel-perfect layouts</li>
                    </ul>
                </div>
                <div className="ExperienceImg">
                    <img src="src/assets/Mockup.png" className="mockup" alt="mockupDeskstop" />
                </div>
            </div>
        </div>
    )
}
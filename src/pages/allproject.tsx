import "../App.css";
import "../styles/allproject.css"
import { CardIsian } from "@/lib/cardMaincontent";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function AllProject(){
    return(
        <div id="project" className="allProject">
            <div className="back-button-container">
                <Link to={'/'}>
                    <Button variant="outline" className="back-btn">
                        ← Back to Main
                    </Button>
                </Link>
            </div>
            <div className="projects-grid">
                {CardIsian.map((isian)=>(
                    <div className="container container-allProject" key={isian.id}>
                        <div className="img-container">
                            <img src={isian.ImgScr} alt={isian.Title} className="project-image" />
                        </div>
                        <div className="card-content">
                            <h3 className="project-title">{isian.Title}</h3>
                            <h4 className="project-subtitle">{isian.SubTitle}</h4>
                            <p className="project-description">{isian.Description}</p>
                            <div className="card-buttons">
                                <a href={isian.Preview} target="_blank" rel="noopener noreferrer">
                                <Button className="demo-btn">Live Demo</Button>
                                </a>
                            {isian.Source && (
                                <a href={isian.Source} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="source-btn">Source Code</Button>
                                </a>
                            )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
import { useEffect, useRef } from "react";
import "../App.css";
import "../styles/allproject.css"
import { CardIsian } from "@/lib/cardMaincontent";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function AllProject(){
    const sectionRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        
                        // Animate project cards sequentially
                        if (entry.target.classList.contains('all-projects-grid')) {
                            const cards = entry.target.querySelectorAll('.project-item-card');
                            cards.forEach((card, index) => {
                                setTimeout(() => {
                                    card.classList.add('animate-in');
                                }, index * 150);
                            });
                        }
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        if (projectsRef.current) observer.observe(projectsRef.current);

        return () => observer.disconnect();
    }, []);

    return(
        <div id="project" className="all-projects-page" ref={sectionRef}>
            {/* Animated Background */}
            <div className="experience-background">
                <div className="bg-shape shape-1"></div>
                <div className="bg-shape shape-2"></div>
                <div className="bg-shape shape-3"></div>
            </div>
            <div className="all-projects-bg-elements">
                <div className="all-bg-code">{"</>"}</div>
            </div>

            <div className="all-projects-header">
                <Link to={'/'}>
                    <Button variant="outline" className="all-back-btn">
                        ← Back to Main
                    </Button>
                </Link>
            </div>
            
            <div className="all-projects-grid" ref={projectsRef}>
                {CardIsian.map((isian, index) => (
                    <div 
                        className="project-item-card" 
                        key={isian.id}
                        style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                        <div className="project-item-container">
                            <div className="project-item-image">
                                <img src={isian.ImgScr} alt={isian.Title} className="project-item-img" />
                                <div className="project-item-overlay">
                                    <div className="project-tech-stack">
                                        {/* Tambahkan tech stack icons jika ada */}
                                    </div>
                                </div>
                            </div>
                            <div className="project-item-content">
                                <div className="project-item-header">
                                    <h3 className="project-item-title">{isian.Title}</h3>
                                    <h4 className="project-item-subtitle">{isian.SubTitle}</h4>
                                </div>
                                <p className="project-item-description">{isian.Description}</p>
                                <div className="project-item-actions">
                                    <a href={isian.Preview} target="_blank" rel="noopener noreferrer">
                                        <Button className="project-demo-btn">
                                            <FiExternalLink className="btn-icon" />
                                            Live Demo
                                        </Button>
                                    </a>
                                    {isian.Source && (
                                        <a href={isian.Source} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" className="project-source-btn">
                                                <FiGithub className="btn-icon" />
                                                Source Code
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="project-item-glow"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
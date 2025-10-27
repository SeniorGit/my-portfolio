// src/components/ProjectList.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MockUpTodolist from "../assets/ToDoListMockUp.png"
import MockUpKopiJourney from "../assets/MockUpKopiJourney.png"
import "../styles/projectlist.css";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FiExternalLink } from "react-icons/fi";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function ProjectList() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const mockupRefs = useRef<(HTMLImageElement | null)[]>([]);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const projects = [
        {
            id: 1,
            name: "TodoList App",
            description: "A modern, responsive todo application with intuitive user interface.",
            features: [
                "Create, edit, and delete tasks with ease",
                "Organize tasks by categories and priorities",
                "Set due dates and reminders",
                "Data persistence with local storage",
                "Responsive design for all devices",
            ],
            tech: ["React", "TypeScript", "Next.js", "Node.js", "Supabase", "Railway", "PostgreSQL"],
            liveUrl: "https://to-do-list-rho-ashen.vercel.app",
            status: "Live",
            img: MockUpTodolist
        },
        {
            id: 2,
            name: "Kopi Journey",
            description: "A transparent coffee supply chain platform that connects local farmers with coffee enthusiasts through traceable sourcing and roast-to-order system.",
            features: [
                "End-to-end supply chain tracking from farm to cup",
                "Roast-to-order scheduling system",
                "Farmer empowerment through direct market access",
                "Quality control and batch verification",
                "Personalized coffee blend recommendations",
                "Real-time order status updates"
            ],
            tech: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"],
            liveUrl: "https://kopi-journey.vercel.app",
            status: "In Development",
            img: MockUpKopiJourney
        },
    ];

    useEffect(() => {
        // Button hover animation
        if (buttonRef.current) {
            buttonRef.current.addEventListener('mouseenter', () => {
                gsap.to(buttonRef.current, {
                    y: -5,
                    scale: 1.05,
                    boxShadow: "0 15px 40px rgba(101, 126, 234, 0.4)",
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            buttonRef.current.addEventListener('mouseleave', () => {
                gsap.to(buttonRef.current, {
                    y: 0,
                    scale: 1,
                    boxShadow: "0 8px 25px rgba(101, 126, 234, 0.3)",
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        }

        const ctx = gsap.context(() => {
            // Section entrance animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });

            // Staggered entrance animation
            tl.fromTo(titleRef.current,
                { 
                    y: 80, 
                    opacity: 0,
                    rotationX: 45
                },
                { 
                    y: 0, 
                    opacity: 1,
                    rotationX: 0,
                    duration: 1,
                    ease: "power3.out"
                }
            )
            .fromTo(".project-info-card",
                { 
                    x: -100, 
                    opacity: 0,
                    scale: 0.8
                },
                { 
                    x: 0, 
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "back.out(1.5)"
                },
                "-=0.5"
            )
            .fromTo(".project-mockup-card",
                { 
                    x: 100, 
                    opacity: 0,
                    rotationY: 90
                },
                { 
                    x: 0, 
                    opacity: 1,
                    rotationY: 0,
                    duration: 1,
                    stagger: 0.3,
                    ease: "back.out(1.7)"
                },
                "-=0.3"
            )
            .fromTo(".project-timeline-line",
                { 
                    scaleY: 0,
                    transformOrigin: "top center"
                },
                { 
                    scaleY: 1,
                    duration: 1.5,
                    ease: "power2.inOut"
                },
                "-=0.5"
            );

            // Timeline dot animations
            gsap.fromTo(".project-timeline-dot",
                { 
                    scale: 0,
                    opacity: 0
                },
                { 
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.3,
                    ease: "back.out(1.5)",
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: "top 70%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Card hover animations
            const projectCards = document.querySelectorAll('.project-info-card, .project-mockup-card');
            projectCards.forEach((card) => {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        y: -10,
                        scale: 1.02,
                        boxShadow: "0 25px 50px rgba(101, 126, 234, 0.3)",
                        duration: 0.3,
                        ease: "power2.out"
                    });
                    
                    // Glow effect
                    const glowElement = card.querySelector('.project-card-glow');
                    if (glowElement) {
                        gsap.to(glowElement, {
                            opacity: 0.8,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        y: 0,
                        scale: 1,
                        boxShadow: "0 10px 30px rgba(101, 126, 234, 0.1)",
                        duration: 0.3,
                        ease: "power2.out"
                    });
                    
                    const glowElement = card.querySelector('.project-card-glow');
                    if (glowElement) {
                        gsap.to(glowElement, {
                            opacity: 0.4,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                });
            });

            // Continuous floating animation for mockups
            mockupRefs.current.forEach((mockupRef) => {
                if (mockupRef) {
                    gsap.to(mockupRef, {
                        y: -15,
                        duration: 3,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut"
                    });
                }
            });

            // Tech stack badges animation
            gsap.fromTo(".project-tech-badge",
                { 
                    scale: 0,
                    rotation: -180
                },
                { 
                    scale: 1,
                    rotation: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: ".project-tech-stack",
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Button hover animations
            const buttons = document.querySelectorAll('.project-demo-btn');
            buttons.forEach((button) => {
                button.addEventListener('mouseenter', () => {
                    gsap.to(button, {
                        scale: 1.05,
                        duration: 0.2,
                        ease: "power2.out"
                    });
                });

                button.addEventListener('mouseleave', () => {
                    gsap.to(button, {
                        scale: 1,
                        duration: 0.2,
                        ease: "power2.out"
                    });
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Function untuk menambahkan ref ke array
    const addToRefs = (el: HTMLImageElement | null) => {
        if (el && !mockupRefs.current.includes(el)) {
            mockupRefs.current.push(el);
        }
    };

    return (
        <section className="project-section" id="projects" ref={sectionRef}>
            {/* Animated Background Elements */}
            <div className="project-background">
                <div className="project-bg-shape project-shape-1"></div>
                <div className="project-bg-shape project-shape-2"></div>
                <div className="project-bg-shape project-shape-3"></div>
            </div>

            <div className="container project-container">
                {/* Section Title */}
                <div className="project-header">
                    <h1 className="project-title" ref={titleRef}>
                        Featured <span className="project-title-accent">Projects</span>
                    </h1>
                    <p className="project-subtitle">
                        A showcase of my recent work and accomplishments in web development
                    </p>
                </div>

                <div className="project-content">
                    {/* Timeline Section */}
                    <div className="project-timeline-section" ref={timelineRef}>
                        <div className="project-timeline-line"></div>
                        
                        {projects.map((project) => (
                            <div key={project.id} className="project-item-wrapper">
                                {/* Dua card yang bersandingan */}
                                <div className="project-cards-container">
                                    {/* Card Informasi Project */}
                                    <div className="project-info-card">
                                        <div className="project-card-glow"></div>
                                        <div className="project-timeline-dot"></div>
                                        
                                        <div className="project-card-header">
                                            <div className="project-role-period">
                                                <h3 className="project-company-name">{project.name}</h3>
                                                <span className="project-period">{project.status}</span>
                                            </div>
                                        </div>
                                        
                                        <p className="project-card-description">{project.description}</p>
                                        
                                        <div className="project-achievements">
                                            <h4 className="project-achievements-title">Key Features:</h4>
                                            <ul className="project-achievements-list">
                                                {project.features.map((achievement, idx) => (
                                                    <li key={idx} className="project-achievement-item">
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className="project-tech-stack">
                                            <h4 className="project-tech-title">Technologies:</h4>
                                            <div className="project-tech-badges">
                                                {project.tech.map((tech, idx) => (
                                                    <span key={idx} className="project-tech-badge">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Button */}
                                        <div className="project-card-buttons">
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                <Button variant="outline" className="project-demo-btn">
                                                    <FiExternalLink className="project-btn-icon" />
                                                    Live Demo
                                                </Button>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Card Mockup - terpisah dari card informasi */}
                                    
                                    <div className="project-mockup-contentt">
                                        <div className="project-mockup-container">
                                            <img 
                                                ref={addToRefs}
                                                src={project.img} 
                                                className="project-mockup-image" 
                                                alt={`${project.name} Mockup`}
                                            />
                                        </div>
                                        <div className="project-mockup-caption">
                                            <h3>{project.name} Preview</h3>
                                            <p>{project.description.split('.')[0]}.</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Explore All Projects Button - Paling bawah */}
                <div className="project-seemore">
                    <Link to={"/project"}>
                        <button className="project-see-more-btn" ref={buttonRef}>
                            Explore All Projects
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
// src/components/Experience.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/experience.css";
import Mockup from "../assets/Mockup.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function Experience() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const mockupRef = useRef<HTMLImageElement>(null);
    
    // Experience data
    const experiences = [
        {
            id: 1,
            company: "CoE Humic - Telkom University",
            role: "Frontend Developer Intern",
            period: "Sep 2024 - Jan 2025",
            description: "Redesigned and rebuilt the consultation website, Consulife, focusing on modern UI/UX implementation.",
            achievements: [
                "Transformed UI designs into responsive web pages",
                "Ensured cross-browser compatibility",
                "Collaborated with design team to implement pixel-perfect layouts",
                "Implemented responsive design principles",
                "Integrated RESTful APIs for dynamic content",
                "Conducted user testing and feedback implementation",
            ],
            tech: ["React", "TypeScript", "CSS3", "Next.js", "Github"]
        },
    ];

    useEffect(() => {
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
            .fromTo(".experience-card",
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
            .fromTo(mockupRef.current,
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
                    ease: "back.out(1.7)"
                },
                "-=0.3"
            )
            .fromTo(".timeline-line",
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
            gsap.fromTo(".timeline-dot",
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
            const experienceCards = document.querySelectorAll('.experience-card');
            experienceCards.forEach((card) => {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        y: -10,
                        scale: 1.02,
                        boxShadow: "0 25px 50px rgba(101, 126, 234, 0.3)",
                        duration: 0.3,
                        ease: "power2.out"
                    });
                    
                    // Glow effect
                    gsap.to(card.querySelector('.card-glow'), {
                        opacity: 0.8,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        y: 0,
                        scale: 1,
                        boxShadow: "0 10px 30px rgba(101, 126, 234, 0.1)",
                        duration: 0.3,
                        ease: "power2.out"
                    });
                    
                    gsap.to(card.querySelector('.card-glow'), {
                        opacity: 0.4,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            });

            // Continuous floating animation for mockup
            gsap.to(mockupRef.current, {
                y: -15,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            // Tech stack badges animation
            gsap.fromTo(".tech-badge",
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
                        trigger: ".tech-stack",
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="experience-section" id="experience" ref={sectionRef}>
            {/* Animated Background Elements */}
            <div className="experience-background">
                <div className="bg-shape shape-1"></div>
                <div className="bg-shape shape-2"></div>
                <div className="bg-shape shape-3"></div>
            </div>

            <div className="container experience-container">
                {/* Section Title */}
                <div className="experience-header">
                    <h1 className="experience-title" ref={titleRef}>
                        Work <span className="title-accent">Experience</span>
                    </h1>
                    <p className="experience-subtitle">
                        My journey in web development and digital innovation
                    </p>
                </div>

                <div className="experience-content">
                    {/* Timeline Section */}
                    <div className="timeline-section" ref={timelineRef}>
                        <div className="timeline-line"></div>
                        
                        {experiences.map((exp, ) => (
                            <div key={exp.id} className="experience-card">
                                <div className="card-glow"></div>
                                <div className="timeline-dot"></div>
                                
                                <div className="card-header">
                                    <h3 className="company-name">{exp.company}</h3>
                                    <div className="role-period">
                                        <span className="role">{exp.role}</span>
                                        <span className="period">{exp.period}</span>
                                    </div>
                                </div>
                                
                                <p className="card-description">{exp.description}</p>
                                
                                <div className="achievements">
                                    <h4 className="achievements-title">Key Achievements:</h4>
                                    <ul className="achievements-list">
                                        {exp.achievements.map((achievement, idx) => (
                                            <li key={idx} className="achievement-item">
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="tech-stack">
                                    <h4 className="tech-title">Technologies:</h4>
                                    <div className="tech-badges">
                                        {exp.tech.map((tech, idx) => (
                                            <span key={idx} className="tech-badge">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mockup Image Section */}
                    <div className="mockup-section">
                        <div className="mockup-container">
                            <img 
                                ref={mockupRef}
                                src={Mockup} 
                                className="mockup-image" 
                                alt="Project Mockup" 
                            />
                            <div className="mockup-glow"></div>
                        </div>
                        <div className="mockup-caption">
                            <h3>Consulife Project</h3>
                            <p>Modern consultation platform built with React and TypeScript</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import "../styles/project.css";
import { CardSwapper } from "@/components/projectCard";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Project() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLSpanElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    
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
            .fromTo(subtitleRef.current,
                { 
                    y: 40, 
                    opacity: 0,
                    scale: 0.8
                },
                { 
                    y: 0, 
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: "power2.out"
                },
                "-=0.5"
            )
            .fromTo(".project-card",
                { 
                    y: 100, 
                    opacity: 0,
                    scale: 0.8,
                    rotationY: -30
                },
                { 
                    y: 0, 
                    opacity: 1,
                    scale: 1,
                    rotationY: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "back.out(1.5)"
                },
                "-=0.3"
            )
            .fromTo(buttonRef.current,
                { 
                    y: 50, 
                    opacity: 0,
                    scale: 0.8
                },
                { 
                    y: 0, 
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "back.out(1.7)"
                },
                "-=0.2"
            );

            // Background shapes animation
            gsap.to(".bg-shape", {
                y: (i: number) => (i + 1) * -20,
                rotation: (i: number) => (i + 1) * 5,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });

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

            // Card hover animations
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach((card) => {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        y: -10,
                        scale: 1.02,
                        rotationY: 5,
                        boxShadow: "0 25px 50px rgba(101, 126, 234, 0.3)",
                        duration: 0.3,
                        ease: "power2.out"
                    });
                    
                    // Image zoom effect
                    const image = card.querySelector('.project-image');
                    if (image) {
                        gsap.to(image, {
                            scale: 1.1,
                            duration: 0.5,
                            ease: "power2.out"
                        });
                    }
                    
                    // Content highlight
                    const title = card.querySelector('.project-title');
                    if (title) {
                        gsap.to(title, {
                            color: "#667eea",
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        y: 0,
                        scale: 1,
                        rotationY: 0,
                        boxShadow: "0 10px 30px rgba(101, 126, 234, 0.1)",
                        duration: 0.3,
                        ease: "power2.out"
                    });
                    
                    const image = card.querySelector('.project-image');
                    if (image) {
                        gsap.to(image, {
                            scale: 1,
                            duration: 0.5,
                            ease: "power2.out"
                        });
                    }
                    
                    const title = card.querySelector('.project-title');
                    if (title) {
                        gsap.to(title, {
                            color: "#fffffe",
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    }
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="project-section" id="projects" ref={sectionRef}>
            {/* Animated Background Elements */}
            <div className="project-background">
                <div className="bg-shape shape-1"></div>
                <div className="bg-shape shape-2"></div>
                <div className="bg-shape shape-3"></div>
            </div>

            <div className="container project-container">
                {/* Project Header */}
                <div className="project-header">
                    <h1 className="project-title" ref={titleRef}>
                        Featured <span className="title-accent">Projects</span>
                    </h1>
                    <span className="project-subtitle" ref={subtitleRef}>
                        A showcase of my recent work and accomplishments in web development
                    </span>
                </div>

                {/* Project Cards Swapper */}
                <div className="project-showcase">
                    <CardSwapper />
                </div>

                {/* See More Button */}
                <div className="project-seemore">
                    <Link to={"/project"}>
                        <button className="see-more-btn" ref={buttonRef}>
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
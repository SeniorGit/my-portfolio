import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiNextdotjs,
    SiPostgresql,
    SiExpress,
    SiAngular,
    SiTypescript
} from "react-icons/si";
import "../styles/aboutme.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function Aboutme() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const illustrationRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });

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
            .fromTo(".about-text",
                { 
                    x: -50, 
                    opacity: 0,
                    filter: "blur(10px)"
                },
                { 
                    x: 0, 
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out"
                },
                "-=0.3"
            )
            .fromTo(illustrationRef.current,
                { 
                    x: 50, 
                    opacity: 0,
                    scale: 0.8,
                    rotationY: 90
                },
                { 
                    x: 0, 
                    opacity: 1,
                    scale: 1,
                    rotationY: 0,
                    duration: 1,
                    ease: "back.out(1.7)"
                },
                "-=0.5"
            )
            .fromTo(".skill-item",
                { 
                    y: 60, 
                    opacity: 0,
                    scale: 0.5,
                    rotation: -180
                },
                { 
                    y: 0, 
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "back.out(1.5)"
                },
                "-=0.3"
            );

            // Parallax effect for floating elements
            gsap.to(".floating-element", {
                y: (i: number) => (i + 1) * -20,
                rotation: (i: number) => (i + 1) * 5,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });

            // Skill items hover animations
            const skillItems = document.querySelectorAll('.skill-item');
            skillItems.forEach((item,) => {
                item.addEventListener('mouseenter', () => {
                    gsap.to(item, {
                        y: -8,
                        scale: 1.05,
                        rotationY: 10,
                        boxShadow: "0 15px 40px rgba(101, 126, 234, 0.3)",
                        duration: 0.3,
                        ease: "power2.out"
                    });
                    
                    // Pulsate glow effect
                    gsap.to(item.querySelector('.skill-glow'), {
                        scale: 1.2,
                        opacity: 0.8,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });

                item.addEventListener('mouseleave', () => {
                    gsap.to(item, {
                        y: 0,
                        scale: 1,
                        rotationY: 0,
                        boxShadow: "0 8px 25px rgba(101, 126, 234, 0.1)",
                        duration: 0.3,
                        ease: "power2.out"
                    });
                    
                    gsap.to(item.querySelector('.skill-glow'), {
                        scale: 1,
                        opacity: 0.4,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            });

            // Text highlight animation
            const highlights = document.querySelectorAll('.tech-highlight');
            gsap.fromTo(highlights,
                { 
                    backgroundSize: "0% 100%",
                    backgroundPosition: "left center"
                },
                { 
                    backgroundSize: "100% 100%",
                    backgroundPosition: "right center",
                    duration: 1.2,
                    delay: 0.5,
                    stagger: 0.2,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Continuous floating animation for illustration
            gsap.to(illustrationRef.current, {
                y: -10,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="aboutme-section" id="about" ref={sectionRef}>
            {/* Animated Background Elements */}
            <div className="background-elements">
                <div className="floating-element element-1"></div>
                <div className="floating-element element-2"></div>
                <div className="floating-element element-3"></div>
                <div className="floating-element element-4"></div>
            </div>

            <div className="container aboutme-container">
                <div className="about-content">
                    <h1 className="about-title" ref={titleRef}>
                        About <span className="title-accent">Me</span>
                    </h1>
                    
                    <div className="about-text" ref={textRef}>
                        <p className="about-text-paragraph">
                            I am a fresh graduate from Informatics Engineering at Telkom University, with a strong interest in web development, particularly using <span className="tech-highlight">Angular</span> and <span className="tech-highlight">Next.js</span>. I have experience in developing the Consulife website during the Work Ready Program and also interned at CoE Humic Telkom University.
                        </p>
                        <p className="about-text-paragraph">
                            In these projects, I was responsible for implementing UI designs into <span className="tech-highlight">responsive, production-ready websites</span>. Additionally, I have developed this personal portfolio website using <span className="tech-highlight">React with TypeScript</span>.
                        </p>
                        <p className="about-text-paragraph">
                            I am someone who enjoys learning new things and continuously improving my skills, especially in <span className="tech-highlight">REST API integration</span> and <span className="tech-highlight">database fundamentals</span>. In my free time, I actively work on personal projects to enhance my technical abilities.
                        </p>
                    </div>
                </div>

                {/* Right Column - Skills & Illustration */}
                <div className="about-visual">
                    <div className="illustration-wrapper" ref={illustrationRef}>
                        <div className="code-illustration">
                            <div className="code-line"></div>
                            <div className="code-line"></div>
                            <div className="code-line"></div>
                            <div className="code-line"></div>
                            <div className="floating-dot dot-1"></div>
                            <div className="floating-dot dot-2"></div>
                            <div className="floating-dot dot-3"></div>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="skills-section" ref={skillsRef}>
                        <h2 className="skills-title">
                            Technical <span className="title-accent">Skills</span>
                        </h2>
                        
                        <div className="skills-grid">
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <SiJavascript />
                                    <div className="skill-glow"></div>
                                </div>
                                <span className="skill-name">JavaScript</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <SiTypescript />
                                    <div className="skill-glow"></div>
                                </div>
                                <span className="skill-name">TypeScript</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <SiReact />
                                    <div className="skill-glow"></div>
                                </div>
                                <span className="skill-name">React</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <SiAngular />
                                    <div className="skill-glow"></div>
                                </div>
                                <span className="skill-name">Angular</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <SiNextdotjs />
                                    <div className="skill-glow"></div>
                                </div>
                                <span className="skill-name">Next.js</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <SiNodedotjs />
                                    <div className="skill-glow"></div>
                                </div>
                                <span className="skill-name">Node.js</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <SiExpress />
                                    <div className="skill-glow"></div>
                                </div>
                                <span className="skill-name">Express</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <SiPostgresql />
                                    <div className="skill-glow"></div>
                                </div>
                                <span className="skill-name">PostgreSQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
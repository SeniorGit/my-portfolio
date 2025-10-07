import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/name.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function Name() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const roleRef = useRef<HTMLParagraphElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const socialRef = useRef<HTMLDivElement>(null);
    
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
            tl.fromTo(imgRef.current, 
                { 
                    scale: 0.5, 
                    opacity: 0, 
                    rotationY: -180,
                    filter: "blur(10px)"
                },
                { 
                    scale: 1, 
                    opacity: 1, 
                    rotationY: 0,
                    filter: "blur(0px)",
                    duration: 1.2,
                    ease: "back.out(1.7)"
                }
            )
            .fromTo(nameRef.current,
                { 
                    y: 100, 
                    opacity: 0,
                    skewY: 10
                },
                { 
                    y: 0, 
                    opacity: 1,
                    skewY: 0,
                    duration: 1,
                    ease: "power3.out"
                },
                "-=0.5"
            )
            .fromTo(roleRef.current,
                { 
                    y: 50, 
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
                "-=0.3"
            )
            .fromTo(descriptionRef.current,
                { 
                    y: 30, 
                    opacity: 0
                },
                { 
                    y: 0, 
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out"
                },
                "-=0.2"
            )
            .fromTo(".cta-button",
                { 
                    y: 40, 
                    opacity: 0,
                    scale: 0.8
                },
                { 
                    y: 0, 
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "back.out(1.5)"
                },
                "-=0.2"
            )
            .fromTo(socialRef.current,
                { 
                    y: 30, 
                    opacity: 0
                },
                { 
                    y: 0, 
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out"
                },
                "-=0.1"
            );

            // Parallax effect for background elements
            gsap.to(".floating-shapes .shape", {
                y: (i) => (i + 1) * -30,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });

            // Image hover animation
            if (imgRef.current) {
                imgRef.current.addEventListener('mouseenter', () => {
                    gsap.to(imgRef.current, {
                        scale: 1.05,
                        rotationY: 10,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                    gsap.to(".img-glow", {
                        scale: 1.2,
                        opacity: 0.8,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                });

                imgRef.current.addEventListener('mouseleave', () => {
                    gsap.to(imgRef.current, {
                        scale: 1,
                        rotationY: 0,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                    gsap.to(".img-glow", {
                        scale: 1,
                        opacity: 0.6,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                });
            }

            // Button hover animations
            const ctaButtons = document.querySelectorAll('.cta-button');
            ctaButtons.forEach((button) => {
                button.addEventListener('mouseenter', () => {
                    gsap.to(button, {
                        y: -5,
                        boxShadow: "0 15px 40px rgba(101, 126, 234, 0.4)",
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });

                button.addEventListener('mouseleave', () => {
                    gsap.to(button, {
                        y: 0,
                        boxShadow: "0 8px 25px rgba(101, 126, 234, 0.2)",
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            });

            // Text reveal animation for description highlights
            const highlights = gsap.utils.toArray('.highlight');
            gsap.fromTo(highlights,
                { 
                    backgroundSize: "0% 100%",
                    backgroundPosition: "left center"
                },
                { 
                    backgroundSize: "100% 100%",
                    backgroundPosition: "right center",
                    duration: 1.5,
                    delay: 1,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: descriptionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="profile-section" id="myProfile" ref={sectionRef}>
            {/* Animated Background Elements */}
            <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
            </div>

            {/* Animated Gradient Orbs */}
            <div className="gradient-orbs">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
            </div>

            <div className="container profile-container">
                {/* Profile Image with Animation */}
                <div className="profile-image-wrapper">
                    <div className="profile-image" ref={imgRef}>
                        <div className="img-glow"></div>
                        <div className="image-border"></div>
                    </div>
                </div>

                {/* Profile Content */}
                <div className="profile-content">
                    <h1 className="profile-name" ref={nameRef}>
                        Alfito Nur Fadhila
                    </h1>
                    
                    <p className="profile-role" ref={roleRef}>
                        Fullstack Developer
                    </p>

                    <p className="profile-description" ref={descriptionRef}>
                        Fresh graduate computer scientist, specializing in 
                        <span className="highlight"> frontend</span> and 
                        <span className="highlight"> backend</span> development. 
                        Passionate about creating innovative digital solutions.
                    </p>

                    {/* Social Links */}
                    <div className="social-links" ref={socialRef}>
                        <a 
                            href="https://github.com/SeniorGit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="GitHub"
                        >
                            <FaGithub className="social-icon" />
                            <span className="social-tooltip">GitHub</span>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/alfitofadhil/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="social-icon" />
                            <span className="social-tooltip">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>          
        </section>
    );
}
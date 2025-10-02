import type React from "react";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/navBar.css";

const LinkContent = [
    { name: 'Home', sectionId: 'myProfile' },
    { name: 'About Me', sectionId: 'about' },
    { name: 'Experience', sectionId: 'experience' },
    { name: 'Projects', sectionId: 'projects' },
];

export function Navbar() {
    const [activeSection, setActiveSection] = useState('myProfile');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const navbarRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const navItemsRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const hamburgerRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    // GSAP Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            timelineRef.current = gsap.timeline()
                .fromTo(navbarRef.current, 
                    { 
                        y: -100, 
                        opacity: 0,
                        backdropFilter: "blur(0px)"
                    },
                    { 
                        y: 0, 
                        opacity: 1,
                        backdropFilter: "blur(20px)",
                        duration: 1,
                        ease: "power3.out"
                    }
                )
                .fromTo(logoRef.current,
                    { x: -50, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
                    "-=0.5"
                )
                .fromTo(".navMenu",
                    { 
                        y: -30, 
                        opacity: 0,
                        scale: 0.8
                    },
                    { 
                        y: 0, 
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "power2.out"
                    },
                    "-=0.3"
                );
            gsap.to(navbarRef.current, {
                backgroundColor: "rgba(22, 22, 26, 0.95)",
                backdropFilter: "blur(25px)",
                duration: 0.3,
                scrollTrigger: {
                    trigger: "body",
                    start: "100px top",
                    end: "max",
                    toggleActions: "play reverse play reverse",
                    onEnter: () => setIsScrolled(true),
                    onLeaveBack: () => setIsScrolled(false)
                }
            });

        });

        return () => ctx.revert();
    }, []);

    // Mobile menu animations dengan perbaikan hamburger icon
    useEffect(() => {
        if (mobileMenuRef.current && hamburgerRef.current) {
            const hamburgerSpans = hamburgerRef.current.querySelectorAll('span');
            if (isMobileMenuOpen) {
                gsap.to(mobileMenuRef.current, {
                    x: 0,
                    duration: 0.5,
                    ease: "power3.out"
                });
                gsap.to(hamburgerSpans[0], { 
                    rotate: 45, 
                    y: 8, 
                    duration: 0.3,
                    ease: "power2.out"
                });
                gsap.to(hamburgerSpans[1], { 
                    opacity: 0, 
                    duration: 0.2,
                    ease: "power2.out"
                });
                gsap.to(hamburgerSpans[2], { 
                    rotate: -45, 
                    y: -8, 
                    duration: 0.3,
                    ease: "power2.out"
                });
                gsap.fromTo(".mobile-navMenu",
                    { x: 50, opacity: 0 },
                    { 
                        x: 0, 
                        opacity: 1, 
                        duration: 0.4, 
                        stagger: 0.1,
                        ease: "power2.out",
                        delay: 0.2
                    }
                );
            } else {
                gsap.to(mobileMenuRef.current, {
                    x: "100%",
                    duration: 0.4,
                    ease: "power3.in"
                });
                gsap.to(hamburgerSpans[0], { 
                    rotate: 0, 
                    y: 0, 
                    duration: 0.3,
                    ease: "power2.out"
                });
                gsap.to(hamburgerSpans[1], { 
                    opacity: 1, 
                    duration: 0.3,
                    ease: "power2.out",
                    delay: 0.1
                });
                gsap.to(hamburgerSpans[2], { 
                    rotate: 0, 
                    y: 0, 
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        }
    }, [isMobileMenuOpen]);

    // Active section detection
    useEffect(() => {
        const handleScroll = () => {
            const sections = LinkContent.map(link => link.sectionId);
            const current = sections.find(sectionId => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            
            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        setActiveSection(targetId);

        if (window.innerWidth <= 768) {
            setIsMobileMenuOpen(false);
        }

        const element = document.getElementById(targetId);

        if (element) {
            gsap.to(e.currentTarget, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1
            });
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const handleNavHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (window.innerWidth > 768) { 
            gsap.to(e.currentTarget, {
                scale: 1.05,
                y: -2,
                duration: 0.3,
                ease: "power2.out"
            });
        }
    };

    const handleNavHoverOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (window.innerWidth > 768 && !e.currentTarget.classList.contains('active')) {
            gsap.to(e.currentTarget, {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <nav ref={navbarRef} className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container container-nav">
                    <div ref={logoRef} className="nav-logo">
                        <span className="logo-text">My Portfolio</span>
                    </div>
                    <div ref={navItemsRef} className="nav-items">
                        {LinkContent.map(link => (
                            <a
                                key={link.name}
                                href={`#${link.sectionId}`}
                                onClick={(e) => handleSmoothScroll(e, link.sectionId)}
                                onMouseEnter={handleNavHover}
                                onMouseLeave={handleNavHoverOut}
                                className={`navMenu ${activeSection === link.sectionId ? 'active' : ''}`}
                            >
                                <span className="nav-text">{link.name}</span>
                                <span className="nav-underline"></span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="hamburger-menu" onClick={toggleMobileMenu} ref={hamburgerRef}>
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Menu dengan Backdrop */}
            {isMobileMenuOpen && (
                <div 
                    className="mobile-nav-backdrop" 
                    onClick={handleBackdropClick}
                >
                    <div ref={mobileMenuRef} className="mobile-nav">
                        <div className="mobile-nav-content">
                            {LinkContent.map(link => (
                                <a
                                    key={link.name}
                                    href={`#${link.sectionId}`}
                                    onClick={(e) => handleSmoothScroll(e, link.sectionId)}
                                    className={`mobile-navMenu ${activeSection === link.sectionId ? 'active' : ''}`}
                                >
                                    <span className="mobile-nav-text">{link.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
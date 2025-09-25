import type React from "react";
import "../styles/navBar.css";
import "../App.css"

const LinkContent = [
    { name: 'Home', sectionId:'myProfile'},
    { name: 'About Me', sectionId: 'about' },
    { name: 'Experience', sectionId: 'experience' },
    { name: 'Project', sectionId: 'projects' },
];

export function Navbar(){
    const handleSmoothScroll = (e:React.MouseEvent<HTMLAnchorElement>, targetId:string) =>{
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element){
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }
    return(
        <nav className="navbar">
            <div className="container container-nav">
                {LinkContent.map(link => (
                    <a 
                        key={link.name}
                        href={`#${link.sectionId}`}
                        onClick={(e) => handleSmoothScroll(e, link.sectionId)}
                        className="navMenu"
                    >
                        {link.name}
                    </a>
                ))}

            </div>
        </nav>
    )
}
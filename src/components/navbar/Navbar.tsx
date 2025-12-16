import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { links } from "../../data/data";


const Navbar = function () {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setIsActiveSection] = useState(links.map(function(link){
        return link?.id
    }))
    console.log(activeSection)

    useEffect(function(){

        const handleScroll = function () {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll);

        return function() {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

    const handleNavClick = function (sectionId) {
        scrollToSection(section.id)
        setIsMenuOpen(false)
    }

    return (
        <nav>
            <div className="navcontainer">
                Bonjour les gens, ici c'est la navbar
            </div>
        </nav>
    )
}

export default Navbar
import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { links } from "../../data/data";
import { scrollToSection, useScrollSpy } from "../../hooks/useScrollSpy";
import {Link} from "react-router-dom"
import { a } from "framer-motion/client";


const Navbar = function () {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setIsActiveSection] = useScrollSpy(links.map(function(link){
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

    const handleNavClick = function (sectionId: string) {
        scrollToSection(sectionId)
        setIsMenuOpen(false)
    }

    return (
        <nav >
            <div className="navContainer">

                <div className="start">
                    <a href="/" className="logo">
                        <img src="/images/logosaas.png" />
                        <span>Hemolane</span>
                    </a>

                    <div className="inputBox">
                        <img src="/images/chercher.png" alt="Icones de la recherche" />
                        <input type="text" placeholder="Rehercher..." />
                    </div>


                </div>




                <div className="end">

                    <div className="middle">
                        {links.map(function(item){
                            return (
                                <a key={item.id}>{item.label}</a>
                            )
                        })}
                    </div>
                    <img src="" alt="" />

                    <a href="" className="contactLink">
                        <img src="/images/w.svg" alt="" />
                    </a>

                </div>

                {/* search icon */}
                <img src="/images/chercher.png" className="searchIcon" alt="Icones de la recherche" />



                {/* Mobile Display */}
                <div className="menuIcon">
                    <img src="/images/hamburger.png" alt="" onClick={function(){
                        setIsMenuOpen(function(state){
                            return !state
                        })
                    }} />
                </div>

                <div className={isMenuOpen ? "menu active": "menu"}>
                    {links.map(function(item){
                        return (
                            <a href="/">{item.label}</a>
                        )
                    })}
                </div>



            </div>
        </nav>
    )
}

export default Navbar
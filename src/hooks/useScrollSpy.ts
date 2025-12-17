import React, { useEffect, useState } from "react";


export const useScrollSpy = function (sectionIds: Array<string>, offset=100) {

    const [activeSection, setActiveSection] = useState("")

    useEffect(function(){
        const handleScroll = function () {

            const scrollPosition = window.scrollY + offset;

            // Find the current section
            for (let i = sectionIds.length - 1 ; i >= 0; i--) {
                const section = document.getElementById(sectionIds[i])
                
                if (section) {
                    const sectionTop = section.offsetTop
                    const sectionHeight = section.offsetHeight


                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(sectionIds[i]);
                        break;
                    }
                }
            }

        }

        handleScroll()
        

        window.addEventListener("scroll", handleScroll, {passive: true})

        return function () {
            window.removeEventListener("scroll", handleScroll)
            
        }
        

    }, [sectionIds, offset])

    return activeSection
}

// Smooth scroll to a section
export const scrollToSection = function (sectionId: string, offset=500) {
    const section = document.getElementById(sectionId)
    if (section) {
        const top = section.offsetTop  - offset;
        
        window.scrollTo({
            top,
            behavior: "smooth"
        })
    }
}       

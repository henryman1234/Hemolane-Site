import React, { useEffect, useRef, useState } from  "react"


interface OptionsProps {
    threshold: number | undefined,
    rootMargin: string | undefined
}


export const useScrollReveal = function (options:OptionsProps = {threshold: 0.1, rootMargin: "0px"}) {

    const {
        threshold,
        rootMargin,
    } = options

    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    useEffect(function (){
        const element = ref.current

        if (!element) {
            return
        }

        const observer = new IntersectionObserver(function([entry]){
            if (entry.isIntersecting) {
                setIsVisible(true)
                observer.unobserve(element);
            }
        }, {threshold, rootMargin})

        observer.observe(element)

        return function () {

            if  (element) {
                observer.unobserve(element)
            }

        }

    }, [threshold, rootMargin])

    return {ref, isVisible}

}

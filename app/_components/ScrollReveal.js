"use client"

import gsap from "gsap";
import { useEffect } from "react";

export default function ScrollReveal() {



const animationList = [
    [
        { opacity: 0, y: 100, }, { opacity: 1, y: 0, duration: 1, }
    ],
    [
        { opacity: 0, x: 100, }, { opacity: 1, x: 0, duration: 1, }
    ],
    [
        { opacity: 0, scale: 0, }, { opacity: 1, scale: 1, duration: 1, }
    ],
]



  useEffect(() => {

    const observer = new IntersectionObserver(callback);
    function callback(entries){
        entries.forEach((entry)=>{
            console.log(entry)
            if(entry.isIntersecting){
                const index = getNUM()
                gsap.fromTo(entry.target,animationList[index][0],animationList[index][1])
            }
        })
        
    }

    const animatableEl = window.document.querySelectorAll(".anim")
    Array.from(animatableEl).forEach( el => observer.observe(el))

    return () => {
      observer.disconnect();
    };

  }, []);

  return null;
}

function getNUM(){
    return Math.round(Math.random()*2)
}


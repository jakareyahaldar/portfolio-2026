"use client"

import { useEffect } from 'react'
import { gsap } from "gsap"

export default function MouseEffect() {
    

    useEffect(()=>{
      gsap.to("#pointer", { x: -100 })
        window.addEventListener("mousemove",(e)=>{
            gsap.to("#pointer", { x: e.x-17, y: e.y-17, opacity: 1 })
        })
        window.addEventListener("click",(e)=>{
            gsap.to("#pointer", { scale: 1.5 })
            setTimeout(()=>{ gsap.to("#pointer", { scale: 1 }) },200)
        })
    },[])

  return (
    <div
  id="pointer"
  className="h-10 w-10 rounded-full fixed z-[9999] opacity-0 pointer-events-none shadow-[0_0_25px_8px_rgba(37,99,235,0.7)]"
/>
  )
}

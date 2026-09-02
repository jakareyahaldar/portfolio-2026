"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { usePathname } from "next/navigation"
import React, { useRef } from "react"

export default function PathChangeAnimation() {
    const container = useRef(null)
    const path = usePathname()

    useGSAP(() => {
        // Reset overlay
        gsap.set(container.current, {
            display: "grid",
        })

        // Reset stairs
        gsap.set(".staire", {
            y: "0%",
        })

        const tl = gsap.timeline({
            defaults: {
                ease: "power4.inOut",
            },
        })

        tl.to(".staire", {
            y: "-100%",
            duration: 0.5,
            stagger: 0.1,
        })

        tl.set(container.current, {
            display: "none",
        })

        return () => {
            tl.kill()
        }
    }, {
        dependencies: [path],
        scope: container,
    })

    return (
        <div
            ref={container}
            className="grid grid-cols-5 h-dvh w-dvw fixed top-0 left-0 z-[200]"
        >
            <div className="staire bg-white h-full" />
            <div className="staire bg-black h-full" />
            <div className="staire bg-white h-full" />
            <div className="staire bg-black h-full" />
            <div className="staire bg-white h-full" />
        </div>
    )
}
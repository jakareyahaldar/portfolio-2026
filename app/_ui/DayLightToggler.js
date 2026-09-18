"use client"

import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function DayLightToggler() {
    const [isDay,setIsDay] = useState(false)

    useEffect(()=>{
        if(!window) return
        const root = document.documentElement
        if(isDay){
            root.classList.add("dark")
        }else{
            root.classList.remove("dark")
        }
    },[isDay])

    if(isDay) return <SunIcon onClick={()=> setIsDay(!isDay) } />
    if(!isDay) return <MoonIcon onClick={()=> setIsDay(!isDay) } />
}

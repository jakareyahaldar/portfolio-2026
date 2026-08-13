"use client"

import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";

export default function DayLightToggler() {
    const [isDay,setIsDay] = useState(false)
    if(isDay) return <SunIcon onClick={()=> setIsDay(!isDay) } />
    if(!isDay) return <MoonIcon onClick={()=> setIsDay(!isDay) } />
}

"use client"

import { useEffect, useState } from "react"

export default function page() {

  const baseURL = process.env.NEXT_PUBLIC_BASE_URL
    const [projects, setProjects] = useState([])
  
    async function getProject(){
      const url = baseURL+"/api/project"
      try{
        const req = await fetch(url)
        console.log("is req ok: ",req.ok)
        if(!req.ok) return []
        const projects = await req.json()
        setProjects(projects)
      }catch(err){
        console.log("error from getting project on home: ",err)
      }
    }
  
    useEffect(()=>{
      getProject()
    },[])

  return (
    <section className="p-5">
      <h2 className="text-2xl font-bold my-2">Admin Dashboard</h2>
      {/* dashboard cards */}
      <div className="grid grid-cols-3 gap-3">
        <StatsCard  title={"Project"} count={`${projects.length}`} text={"All my project thet added on my ortfolio"} />
        <StatsCard  title={"Skills"} count={"20"} text={"Skills tht i know and experienced"} />
        <StatsCard  title={"Socials"} count={"04"} text={"Save all my socials links."} />
      </div>
    </section>
  )
}


function StatsCard({title,count,text}) {
  return (
    <div className="bg-black text-white rounded-2xl p-3 shadow-xl">
      <h2 className="text-2xl">{title}</h2>
      <h2 className="text-5xl font-bold">{count}</h2>
      <p className="text-sm text-gray-300">{text}</p>
    </div>
  )
}




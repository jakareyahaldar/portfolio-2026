"use client"

import { useEffect, useState } from "react";
import ProjectCard from "../_ui/ProjectCard";
import SectionEnd from "../_ui/SectionEnd";
import SectionStart from "../_ui/SectionStart";

export default function MyProjects() {
  const [loading, setLoading] = useState(false)
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL
  const [projects, setProjects] = useState([])

  async function getProject() {
    const url = baseURL + "/api/project"
    try {
      setLoading(true)
      const req = await fetch(url)
      console.log("is req ok: ", req.ok)
      if (!req.ok) return []
      const projects = await req.json()
      setProjects(projects)
    } catch (err) {
      console.log("error from getting project on home: ", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProject()
  }, [])

  return (
    <section id="projects" className="md:px-20 px-5 relative py-20 h-auto min-h-dvh">
      <SectionStart text={"My Projects"} />
      <div className="grid md:grid-cols-3 md:gap-10 py-10">
        {
          loading && new Array(3).fill(null).map(() => {
            return (
              <div key={Math.random()} className="h-70 p-5 rounded-2xl grid gap-4 bg-gray-300 animate-pulse duration-75 shadow-2xl"></div>
            )
          })
        }
        {
          projects?.map((project) => {
            return <ProjectCard key={project.title} title={project.title} description={project.description} logo={project.logo} previewImage={project.preview} githubUrl={project.githubUrl} liveUrl={project.liveUrl} />
          })
        }
      </div>
      <SectionEnd text={"My Projects"} />
    </section>
  )
}

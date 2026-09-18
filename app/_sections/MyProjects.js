
import { Suspense } from "react";
import ProjectCard from "../_ui/ProjectCard";
import SectionEnd from "../_ui/SectionEnd";
import SectionStart from "../_ui/SectionStart";

export default function MyProjects() {
  
  return (
    <section id="projects" className="md:px-20 px-5 relative py-20 h-auto min-h-dvh">
      <SectionStart text={"My Projects"} />
      <div className="grid md:grid-cols-3 md:gap-10 py-10">
        <Suspense fallback={<LoadingProjectsList />}>
          <ProjectList />
        </Suspense>
      </div>
      <SectionEnd text={"My Projects"} />
    </section>
  )
}


async function ProjectList() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL
  async function getProject() {
    const url = baseURL + "/api/project"
    try {
      const req = await fetch(url)
      if (!req.ok) return []
      const projects = await req.json()
      return projects
    } catch (err) {
      console.log("error from getting project on home: ", err)
      return []
    }
  }

  const projects = await getProject()

  return (
    <>
      {
        projects?.map((project) => {
          return <ProjectCard key={project.title} title={project.title} description={project.description} logo={project.logo} previewImage={project.preview} githubUrl={project.githubUrl} liveUrl={project.liveUrl} />
        })
      }
    </>
  )

}


async function LoadingProjectsList() {
  

  const projects = [1,1,1,1,1,1]

  return (
    <>
      {
        projects?.map((project) => {
          return (
            <div className="h-70 p-5 rounded-2xl grid gap-4 bg-gray-300 animate-pulse duration-75 shadow-2xl">

            </div>
          )
        })
      }
    </>
  )

}

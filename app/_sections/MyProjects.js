import ProjectCard from "../_ui/ProjectCard";
import SectionEnd from "../_ui/SectionEnd";
import SectionStart from "../_ui/SectionStart";

export default async function MyProjects() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL

  async function getProject(){
    try{
      const req = await fetch(baseURL+"/api/project")
      if(!req.ok) return []
      const projects = await req.json()
      return projects
    }catch(err){
      console.log(err)
    }
  }

  const projects = await getProject()
  console.log(projects)

  return (
    <section id="projects" className="md:px-20 px-5 relative py-20 h-auto min-h-dvh">
        <SectionStart text={"My Projects"} />
        <div className="grid md:grid-cols-3 md:gap-10 py-10">
            
            {
              projects.map((project)=>{
                return <ProjectCard key={project.title} title={project.title} description={project.description} logo={project.logo} previewImage={project.preview} />
              })
            }
        </div>
        <SectionEnd text={"My Projects"} />
    </section>
  )
}

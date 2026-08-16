import ProjectCard from "../_ui/ProjectCard";
import SectionEnd from "../_ui/SectionEnd";
import SectionStart from "../_ui/SectionStart";

export default function MyProjects() {
  return (
    <section id="projects" className="md:px-20 px-5 relative py-20 h-auto min-h-dvh">
        <SectionStart text={"My Projects"} />
        <div className="grid md:grid-cols-3 md:gap-10 p-10">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
        <SectionEnd text={"My Projects"} />
    </section>
  )
}

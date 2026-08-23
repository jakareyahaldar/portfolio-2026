import SectionEnd from "../_ui/SectionEnd";
import SectionStart from "../_ui/SectionStart";
import TechCard from "../_ui/TechCard";

const web_progming_config = [
    { title: "HTML", image: "/icons/html.png" },
    { title: "CSS", image: "/icons/css.png" },
    { title: "JavaScript", image: "/icons/js.png" },
    { title: "Python", image: "/icons/python.png" },
    { title: "TypeScript", image: "/icons/typescript.png" },
    // { title: "", image: "/icons/" },
]
const frontend_config = [
    { title: "Reactjs", image: "/icons/reactjs.png" },
    { title: "NEXTjs", image: "/icons/nextjs.png" },
    { title: "PHP", image: "/icons/php.png" },
    { title: "Tailwind", image: "/icons/tailwind.png" },
    { title: "GSAP", image: "/icons/gsap.png" },
    // { title: "", image: "/icons/" },
]
const backend_api_config = [
    { title: "Nodejs", image: "/icons/nodejs.png" },
    { title: "Expressjs", image: "/icons/expressjs.png" },
    { title: "PHP", image: "/icons/php.png" },
    { title: "RestApi", image: "/icons/restapi.png" },
    { title: "Firebase", image: "/icons/firebase.png" },
    // { title: "", image: "/icons/" },
]
const databasees_storage_config = [
    { title: "Mongodb", image: "/icons/mongodb.png" },
    { title: "Supabase", image: "/icons/supabase.png" },
    { title: "PostGreSql", image: "/icons/postgresql.png" },
    { title: "MySql", image: "/icons/my-sql.png" },
    { title: "FireStore", image: "/icons/firebase.png" },
    // { title: "", image: "/icons/" },
]

export default function TechStack() {
return (
    <section id="tech_stack" className="md:px-20 px-5 relative py-20 h-auto min-h-dvh">
        <SectionStart text={"Tech Stack"} />
        <div className="grid md:grid-cols-2 md:gap-40 md:px-30">
            <TechCard title={"Web & Programming"} items={web_progming_config} />
            <TechCard title={"Frontend"} items={frontend_config} />
            <TechCard title={"Backend & APIs"} items={backend_api_config} />
            <TechCard title={"Databases & Storage"} items={databasees_storage_config} />
        </div> 
        <SectionEnd text={"Tech Stack"} />
    </section>
  )
}

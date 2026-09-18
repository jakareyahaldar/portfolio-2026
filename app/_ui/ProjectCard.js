import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProjectCard({ title, description, previewImage, logo, githubUrl, liveUrl }) {
  const router = useRouter()
  return (
    <div key={title} className=" p-5 rounded-2xl grid gap-4 hover:bg-gray-300 hover:-translate-y-2 transition duration-1000 border shadow-2xl">
        <div>
            <Image loading="eager" className="w-full rounded-md" src={previewImage} alt="Project" height={1000} width={1500} />
        </div>
        <div className="flex items-center justify-between">
           <div className="flex gap-1 items-center">
                <Image className="w-10 h-10 rounded-md"  src={logo} alt="Project" height={100} width={150} />
                <h3 className="md:text-xl">{title}</h3>
           </div>
           <div className="flex gap-5 items-center">
                <div className="flex items-center gap-2 uppercase animate-bounce text-amber-300  text-sm">
                    <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
                    Live
                </div>
                <a href={githubUrl}><FontAwesomeIcon icon={faGithub} className="w-30 h-30 hover:-translate-y-1 transition" /></a>
                <a href={liveUrl}><ArrowUpRight className="hover:-translate-y-1 transition"  /></a>
           </div>
        </div>
        <p className="text-center text-gray-500 w-full wrap-anywhere">{description}</p>
    </div>
  )
}

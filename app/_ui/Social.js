import { faFacebook, faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const social_links = [
  { name: "Facebook", 
    link: "https://www.facebook.com/jakareyahaldar2005", 
    icon: faFacebook, 
    css: "top-0 left-1/2"
  },
  { name: "Linkedin", 
    link: "",
    icon: faLinkedin, 
    css: "top-1/2 left-0"
  },
  { name: "Github", 
    link: "https://github.com/jakareyahaldar",
    icon: faGithub, 
    css: "top-1/2 left-full" 
  },
  { name: "Whatsapp", 
    link: "",
    icon: faWhatsapp, 
    css: "top-full left-1/2" 
  }
]

export default function Social() {
  return (
    <div className=" md:h-[400] md:w-[400] h-[300] w-[300] border border-dashed rounded-full relative mt-12">
      
      {
        social_links.map(({name, icon, css, link})=>{
          return(
             <a key={name} href={link} title={name} target="_blank" className={`w-15 h-15 flex justify-center items-center text-4xl rounded-full border border-dashed bg-black absolute ${css} -translate-1/2 shadow-amber-200 hover:shadow-2xl transition hover:scale-125`}> <FontAwesomeIcon icon={icon} /> </a>
          )
        })
      }
    </div>
  )
}

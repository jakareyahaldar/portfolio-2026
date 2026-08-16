import Link from "next/link";
import DayLightToggler from "../_ui/DayLightToggler";
import { Download } from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
});

const links_config = [
    {href: "#about", title: "About"},
    {href: "#tech_stack", title: "Skills"},
    {href: "#projects", title: "Projects"},
    {href: "#contact", title: "Contact"},
]

export default function Navbar() {
  return (
    <header className="fixed backdrop-blur-xl z-[99]">
        <div className="flex  w-dvw justify-between items-center md:px-20 px-5 py-5">
            <Link className={`${caveat.className} text-4xl text-blue-600 font-bold`} href="/"><span>Portfolio</span></Link>
            <nav className="md:flex gap-5 hidden">
                {
                    links_config?.map( item => <Link className="uppercase hover:text-amber-300 transition" key={item?.title} href={item?.href}>{item?.title}</Link>)
                }
            </nav>
            <div className="flex gap-5 items-center">
                <DayLightToggler />
                <button className="flex gap-2 px-3 py-1 border-2 border-blue-700 rounded-md">Resume <Download /></button>
            </div>
        </div>
    </header>
  )
}

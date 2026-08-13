import Link from "next/link";
import DayLightToggler from "../_components/DayLightToggler";
import { Download } from "lucide-react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
});

const links_config = [
    {href: "/", title: "About"},
    {href: "/", title: "Skills"},
    {href: "/", title: "Projects"},
    {href: "/", title: "Contact"},
]

export default function Navbar() {
  return (
    <header className="">
        <div className="flex fixed w-dvw justify-between items-center px-20 py-5">
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

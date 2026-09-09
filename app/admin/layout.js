"use client"

import { Brain, Sticker, Workflow } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation_config = [
    { href: "/admin/project", text: "Project", icon: <Workflow /> },
    { href: "/admin/links", text: "Social Links", icon: <Sticker /> },
    { href: "/admin/skills", text: "My Skills", icon: <Brain /> },
]

export default function layout({ children }) {
    const path = usePathname()
    console.log(path)
    return (
        <div className="pt-20 grid grid-cols-4">
            <div className="p-5 h-auto min-h-dvh">
                {navigation_config.map((item)=>{
                    return(
                        <Link key={item.text} className={`${ path.includes(item.href) ? "bg-gray-400" : "" } flex items-center gap-2 hover:bg-gray-400 transition duration-700 rounded-md py-2 px-3 mb-3`} href={item.href} > {item.icon} {item.text} </Link>
                    )
                })}
            </div>
            <div className="col-span-3">
                {children}
            </div>
        </div>
    )
}

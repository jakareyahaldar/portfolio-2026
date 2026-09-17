"use client"

import { Brain, LayoutDashboard, Sticker, Workflow } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Store the Icon reference as a Component, not an inline JSX element (<Workflow />)
const navigation_config = [
    { href: "/admin", text: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/project", text: "Project", icon: Workflow },
    { href: "/admin/links", text: "Social Links", icon: Sticker },
    { href: "/admin/skills", text: "My Skills", icon: Brain },
];

export default function Layout({ children }) {
    const pathname = usePathname();

    return (
        <div className="pt-20 grid grid-cols-4">
            <aside className="p-5 h-auto min-h-dvh">
                {navigation_config.map((item) => {
                    const Icon = item.icon; // Extract component reference
                    const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);

                    return (
                        <Link 
                            key={item.href} 
                            href={item.href}
                            className={`${
                                isActive ? "bg-gray-400" : ""
                            } flex items-center gap-2 hover:bg-gray-400 transition duration-700 rounded-md py-2 px-3 mb-3`} 
                        > 
                            <Icon className="w-5 h-5" /> 
                            <span>{item.text}</span>
                        </Link>
                    );
                })}
            </aside>
            <main className="col-span-3">
                {children}
            </main>
        </div>
    );
}
"use client";

import Link from "next/link";
import DayLightToggler from "../_ui/DayLightToggler";
import { DoorClosedIcon, Download, MenuIcon } from "lucide-react";
import { Caveat } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
});

const links_config = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/tech-stack", title: "Skills" },
  { href: "/projects", title: "Projects" },
  { href: "/contact", title: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth > 400);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  function toggle() {
    if (isDesktop) return;
    setOpen(!open);
  }

  return (
    <header className="fixed w-dvw backdrop-blur-xl z-[99]">
      <div className="flex  w-dvw justify-between items-center md:px-20 px-5 py-5">
        <Link
          className={`${caveat.className} md:text-4xl text-2xl text-blue-600 font-bold`}
          href="/"
        >
          <span>Portfolio</span>
        </Link>
        <nav
          className={`md:flex md:flex-row md:static gap-5 ${open ? "fixed top-0 left-0 flex flex-col justify-center items-center bg-blue-950 text-white h-dvh w-dvw" : "hidden"}`}
        >
          <DoorClosedIcon
            onClick={toggle}
            className=" absolute top-10 right-10 md:hidden "
          />
          {links_config?.map((item) => {
            return (
              <Link
                onClick={toggle}
                className={`${path === item.href ? "bg-blue-600 text-white" : ""} uppercase px-2 py-1  hover:text-amber-300 transition`}
                key={item?.title}
                href={item?.href}
              >
                {item?.title}
              </Link>
            );
          })}
        </nav>
        <div className="flex gap-5 items-center">
          <DayLightToggler />
          <button className="flex gap-1 px-2 py-1 border border-blue-700 rounded-md hover:bg-blue-400 transition duration-700">
            Resume <Download />
          </button>
          <MenuIcon onClick={toggle} className="md:hidden" />
        </div>
      </div>
    </header>
  );
}

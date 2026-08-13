import { faFacebook, faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LocateIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section>
        <div className="w-full h-dvh grid xl:grid-cols-2 xl:px-80">
            <div className="flex justify-center items-center ">
                <div className="flex justify-center items-center relative">
                    <Image className="rounded-full sm:h-[300] h-[60dvw] sm:w-[300] w-[60dvw]" height={300} width={300} alt="jakareya" src="/jakareya.jpg" />
                    <div className="sm:w-[500] w-[80dvw] sm:h-[500] h-[80dvw] border-b-2 border-amber-400  rounded-full absolute spinner"></div>
                    <div className="sm:w-[400] w-[70dvw] sm:h-[400] h-[70dvw] border-b-2 border-b-blue-700  rounded-full absolute spinner_rev"></div>
                </div>
            </div>
            <div className="m-auto xl:text-start text-center xl:order-first grid gap-5">
                <h4 className="xl:text-3xl text-[5dvw]">Hi 😇 My name is</h4>
                <h3 className="xl:text-[100px] text-4xl">Jakareya</h3>
                <p className="xl:text-3xl text-xl">I'm a Fullstack Software Engineer.<br/>I create <span className="text-blue-700">Exciting Stuff</span> on the Internet.</p>
                <div className="flex gap-5 text-3xl mt-7">
                    <Link href={"/"}> <FontAwesomeIcon icon={faFacebook}/> </Link>
                    <Link href={"/"}> <FontAwesomeIcon icon={faWhatsapp}/> </Link>
                    <Link href={"/"}> <FontAwesomeIcon icon={faLinkedin}/> </Link>
                    <Link href={"/"}> <FontAwesomeIcon icon={faGithub}/> </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

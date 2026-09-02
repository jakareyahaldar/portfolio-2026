"use client";

import {
  faFacebook,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Frijole } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const frijole = Frijole({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function HeroSection() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Devoloper","<i>MERN </i> Stack Devoloper","<i>FULL </i> Stack Devoloper"],
      typeSpeed: 100,
      showCursor: false,
      loop: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className="h-dvh w-dvw pt-20 ">
        <div className="grid md:grid-cols-2 h-full">
          <div className="pl-5 pt-20 md:pt-25 relative">
            <h1 className={`${frijole.className} font-bold md:text-[170px] text-4xl `}>Jakareya<span className="text-blue-600  ">.dev</span></h1>
            <h3 ref={el} className="font-bold md:text-7xl text-2xl absolute mt-10"></h3>
            <p className=" relative top-40 md:text-2xl opacity-90 ">
              I  am an web devoloper around 3+ years, MERN, FULL stack Devoloper.<br/> i am provide web devolopment and any kinds of web work. 
            </p>
            <div className="md:text-4xl flex md:gap-10 gap-5 absolute bottom-20 md:left-10">
              <a className='hover:scale-125 transition duration-500 hover:text-blue-500' href="https://www.facebook.com/jakareyahaldar2005" target="_blank"> <FontAwesomeIcon icon={faFacebook} /> </a>
              <a className='hover:scale-125 transition duration-500 hover:text-blue-500' href="#" target="_blank"> <FontAwesomeIcon icon={faWhatsapp} /> </a>
              <a className='hover:scale-125 transition duration-500 hover:text-blue-500' href="https://github.com/jakareyahaldar" target="_blank"> <FontAwesomeIcon icon={faGithub} /> </a>
              <a className='hover:scale-125 transition duration-500 hover:text-blue-500' href="#" target="_blank"> <FontAwesomeIcon icon={faLinkedin} /> </a>
            </div>
          </div>
          <div className="h-full relative">
            <Image className="md:w-400 w-full absolute bottom-0" src="/me.png" height={500} width={500} alt="Hero Image" />
          </div>
        </div>
    </section>
  )
}

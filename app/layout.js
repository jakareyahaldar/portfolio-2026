import "./globals.css";
import Navbar from "./_layouts/Navbar";
import MouseEffect from "./_layouts/MouseEffect";
import { Fredoka } from "next/font/google";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmooth from "@/lib/ScrollSmoother";
config.autoAddCss = false

gsap.registerPlugin(ScrollTrigger);

const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body  className={`${fredoka.className} `}>
        <div>
          <ScrollSmooth />
          <Navbar />
          <MouseEffect />
          {children}
        </div>
      </body>
    </html>
  );
}
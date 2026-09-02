import "./globals.css";
import Navbar from "./_layouts/Navbar";
import MouseEffect from "./_layouts/MouseEffect";
import { Fredoka } from "next/font/google";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PathChangeAnimation from "./_layouts/PathChangeAnimation";
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
          <PathChangeAnimation />
          <Navbar />
          <MouseEffect />
          {children}
        </div>
      </body>
    </html>
  );
}
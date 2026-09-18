import "./globals.css";

// tailwind configaration
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false; // Prevents FontAwesome from dynamically inserting styles during client hydration
// other imports
import Navbar from "./_layouts/Navbar";
import MouseEffect from "./_layouts/MouseEffect";
import { Fredoka } from "next/font/google";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PathChangeAnimation from "./_layouts/PathChangeAnimation";
import Providers from "./providers";

gsap.registerPlugin(ScrollTrigger);

const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${fredoka.className} `}>
        <Providers>
          <div className="dark:bg-indigo-950 dark:text-white">
            <PathChangeAnimation />
            <Navbar />
            <MouseEffect />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
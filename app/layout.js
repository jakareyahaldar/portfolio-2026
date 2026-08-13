import "./globals.css";
import Navbar from "./_layouts/Navbar";
import MouseEffect from "./_layouts/MouseEffect";
import { Fredoka } from "next/font/google";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fredoka.className} w-dvw`}>
        <Navbar />
        <MouseEffect />
        {children}
      </body>
    </html>
  );
}
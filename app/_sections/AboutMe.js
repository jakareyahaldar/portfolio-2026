
import Image from "next/image";
import SectionStart from "../_ui/SectionStart";
import SectionEnd from "../_ui/SectionEnd";

export default function AboutMe() {
  return (
    <section id="about" className="h-auto min-h-dvh w-full  px-5 pb-20 relative">
        <SectionStart text={"About Me"} />
        <div className="flex justify-center items-center md:flex-row flex-col md:gap-20 md:mt-10 md:px-10 py-10" >
            <div className="">
                <Image className="md:w-[800] w-[200] rounded-full" src="/about.png" alt="Jakareya" height={300} width={300} />
            </div>
            <div className=" flex gap-7">
                <div className="h-[calc(100%+10)] w-1 rounded-2xl bg-blue-700 shrink-0 md:block hidden"></div>
                
                <div className="grid gap-5 text-center md:text-start mt-10 md:mt-0">
                    <h3 className="text-3xl">Hey there! 👋🏻</h3>
                    <p className=" text-xl">
                        Hey, I’m Jakareya Haldar 👋🏻

I build high-performance, interactive web applications with a focus on speed, precision, and getting the details right.
<br />
I thrive on non-static systems—real-time updates, complex interfaces, and applications with lots of moving parts. I naturally dive deep into technical challenges: profiling performance, refining architecture, and chasing that moment where everything feels seamless and responsive.
<br />
Whether it’s optimizing bottlenecks or scaling real-time functionality, I love pushing systems to their limit to make them faster, cleaner, and more reliable.

Building something complex or ambitious? Let’s connect.
                    </p>
                </div>
            </div>
        </div>

        <SectionEnd text={"About Me"} />
    </section>
  )
}

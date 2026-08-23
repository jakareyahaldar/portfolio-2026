
import Image from "next/image";
import SectionStart from "../_ui/SectionStart";
import SectionEnd from "../_ui/SectionEnd";

export default function AboutMe() {
  return (
    <section id="about" className="h-auto min-h-dvh w-full md:px-20 px-5 pb-20 relative">
        <SectionStart text={"About Me"} />
        <div className="flex justify-center items-center md:flex-row flex-col md:gap-20 md:mt-72 md:px-50 py-10" >
            <div className="">
                <Image className="w-[500] rounded-full" src="/jakareya_ai.png" alt="Jakareya" height={600} width={600} />
            </div>
            <div className=" flex gap-7">
                <div className="h-[calc(100%+10)] w-1 rounded-2xl bg-blue-700 shrink-0 md:block hidden"></div>
                
                <div className="grid gap-5 text-center md:text-start mt-10 md:mt-0">
                    <h3 className="text-3xl">Hey there! 👋🏻</h3>
                    <p className=" text-xl">
                        Hey there! 👋🏻 I'm Chirag. I build things on the internet — with a strong focus on performance, interactivity, and getting the details right.
<br/><br/>
                        I enjoy working on systems that aren’t static. Real-time updates, complex UIs, and applications with lots of moving parts. I naturally go deeper into problems — optimizing, refining, and chasing that "this feels right" moment.
<br/><br/>
                        I like pushing systems to their limits, understanding how they behave, and improving them to be faster, cleaner, and more reliable.
<br/><br/>
                        If you're building something interesting, challenging, or technically demanding… I’d love to be part of it 😄
                    </p>
                </div>
            </div>
        </div>

        <SectionEnd text={"About Me"} />
    </section>
  )
}

import SectionStart from "../_ui/SectionStart";
import Social from "../_ui/Social";

export default function ContactMe() {
  return (
    <section id="contact" className="md:px-20 px-5 relative py-20 h-auto min-h-dvh">
        <SectionStart text={"Contact Me"} />
        <Social />
    </section>
  )
}

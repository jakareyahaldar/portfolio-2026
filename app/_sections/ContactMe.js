import ContactForm from "../_ui/ContactForm";
import SectionStart from "../_ui/SectionStart";
import Social from "../_ui/Social";

export default function ContactMe() {
  return (
    <section id="contact" className="md:px-20 px-5 relative py-20 h-auto min-h-dvh">
        <SectionStart text={"Contact Me"} />
        <div className="flex flex-col justify-center items-center gap-5 text-center my-10">
          <h2 className="text-5xl font-semibold text-blue-600">Let's collaborate!</h2>
          <p className="text-2xl">Contact me to discuss your web development needs <br/> or just to say hello. 😉</p>
        </div>
        <div className="grid md:grid-cols-2 md:px-80 my-20">
          <Social />
          <ContactForm />
        </div>
    </section>
  )
}

import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <form className=" md:w-[600] w-full text-lg bg-blue-950/10 p-5 rounded-2xl" >
        <div className="grid gap-2 ">
            <label>Name</label>
            <input className="px-2 py-1 rounded-md bg-black/20" type="name" placeholder="Enter your Name: " name="name" />
        </div>
        <div className="grid gap-2">
            <label>Email</label>
            <input className="px-2 py-1 rounded-md bg-black/20" type="name" placeholder="Enter your Email: " name="email" />
        </div>
        <div className="grid gap-2">
            <label>Message</label>
            <textarea placeholder="Enter your Message" rows={4} className="px-2 py-1 rounded-md bg-black/20"></textarea>
        </div>
        <button className="flex items-center gap-5 px-10 my-5 py-2 border rounded-md">Submit <Send /></button>
    </form>
  )
}
